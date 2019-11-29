import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace enumerations {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Enumerations`.
     */
    class Condition extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsConditionSettings: documenttemplates.ConditionSettings;
        readonly containerAsConditionalSettings: pages.ConditionalSettings;
        attributeValue: string;
        editableVisible: boolean;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * The new Condition will be automatically stored in the 'conditions' property
         * of the parent documenttemplates.ConditionSettings element passed as argument.
         */
        static createInConditionSettingsUnderConditions(container: documenttemplates.ConditionSettings): Condition;
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * The new Condition will be automatically stored in the 'conditions' property
         * of the parent pages.ConditionalSettings element passed as argument.
         */
        static createInConditionalSettingsUnderConditions(container: pages.ConditionalSettings): Condition;
        /**
         * Creates and returns a new Condition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Condition;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/enumerations relevant section in reference guide}
     */
    interface IEnumeration extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly values: internal.IList<IEnumerationValue>;
        asLoaded(): Enumeration;
        load(callback: (element: Enumeration) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Enumeration>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/enumerations relevant section in reference guide}
     */
    class Enumeration extends projects.Document implements IEnumeration {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly values: internal.IList<EnumerationValue>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Enumeration unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Enumeration;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/enumeration-values relevant section in reference guide}
     */
    interface IEnumerationValue extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsEnumeration: IEnumeration;
        readonly name: string;
        asLoaded(): EnumerationValue;
        load(callback: (element: EnumerationValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<EnumerationValue>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/enumeration-values relevant section in reference guide}
     */
    class EnumerationValue extends internal.Element implements IEnumerationValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsEnumeration: Enumeration;
        name: string;
        caption: texts.Text;
        image: images.IImage | null;
        readonly imageQualifiedName: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EnumerationValue instance in the SDK and on the server.
         * The new EnumerationValue will be automatically stored in the 'values' property
         * of the parent Enumeration element passed as argument.
         */
        static createIn(container: Enumeration): EnumerationValue;
        /**
         * Creates and returns a new EnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EnumerationValue;
        readonly qualifiedName: string | null;
    }
}
import { documenttemplates } from "./documenttemplates";
import { images } from "./images";
import { pages } from "./pages";
import { texts } from "./texts";
import { IModel } from "./base-model";