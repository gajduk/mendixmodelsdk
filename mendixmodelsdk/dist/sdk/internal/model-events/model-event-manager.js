"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const event_emitter_1 = require("../event-emitter");
const model_event_receiver_1 = require("./model-event-receiver");
class ModelEventManager {
    constructor(model, deltaManager, deltaProcessor, workingCopyId, currentEventId) {
        this.eventEmitter = new event_emitter_1.EventEmitter();
        this.eventQueue = [];
        this.pendingUnits = 0;
        this.loadUnitResults = [];
        this.modelChanged = false;
        this.deltaProcessor = deltaProcessor;
        this.currentEventId = currentEventId;
        this.eventReceiver = new model_event_receiver_1.ModelEventReceiver(workingCopyId, model._client, model);
        this.eventReceiver.onNewModelEvent(modelEvent => this.scheduleEvent(modelEvent));
        deltaManager.onNewDelta(this.onNewDelta.bind(this));
    }
    start() {
        if (this.modelChanged) {
            throw new Error("Cannot start receiving events after making changes or loading units");
        }
        this.eventReceiver.start(this.currentEventId);
    }
    stop() {
        this.eventReceiver.stop();
        // If we have already queued loaded unit callbacks, process them right away.
        for (const loadUnitResult of this.loadUnitResults) {
            loadUnitResult.callback();
        }
    }
    loadUnitStarted() {
        this.modelChanged = true;
        this.pendingUnits++;
    }
    loadUnitCompleted(eventId, callback, errorCallback) {
        this.pendingUnits--;
        if (this.eventReceiver.isRunning) {
            this.loadUnitResults.push({ eventId: eventId, callback: callback });
            try {
                this.processEventsQueue();
            }
            catch (error) {
                errorCallback(error);
            }
        }
        else {
            callback();
        }
    }
    onEventProcessed(callback) {
        this.eventEmitter.on("ModelEventProcessed", callback);
    }
    scheduleEvent(modelEvent) {
        this.eventQueue.push(modelEvent);
        this.processEventsQueue();
    }
    onNewDelta() {
        if (this.eventReceiver.isRunning) {
            throw new Error("Making changes while receiving events not supported yet");
        }
        this.modelChanged = true;
    }
    processEventsQueue() {
        if (this.pendingUnits !== 0) {
            return;
        }
        while (true) {
            this.processLoadedUnits();
            const modelEvent = this.eventQueue.shift();
            if (modelEvent) {
                if (modelEvent.id <= this.currentEventId) {
                    // Ignore this event as we have already processed it.
                    continue;
                }
                // Process deltas inside a MobX action, as there might be inconsistent states in between processing the individual deltas.
                mobx_1.runInAction(() => {
                    this.deltaProcessor.processDeltas(modelEvent.deltas);
                    this.eventEmitter.emit("ModelEventProcessed", undefined);
                });
                this.currentEventId = modelEvent.id;
            }
            else {
                break;
            }
        }
    }
    processLoadedUnits() {
        const toExcuteLater = [];
        for (const loadUnitResult of this.loadUnitResults) {
            if (loadUnitResult.eventId < this.currentEventId) {
                throw new Error(`The loaded unit event id '${loadUnitResult.eventId}' is smaller than the last processed event id '${this.currentEventId}'`);
            }
            else if (loadUnitResult.eventId === this.currentEventId) {
                loadUnitResult.callback();
            }
            else {
                toExcuteLater.push(loadUnitResult);
            }
        }
        this.loadUnitResults = toExcuteLater;
    }
}
exports.ModelEventManager = ModelEventManager;
//# sourceMappingURL=model-event-manager.js.map