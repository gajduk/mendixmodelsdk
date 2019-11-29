import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { mappings } from "./mappings";
export declare namespace exportmappings {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExportMappings`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/export-mappings relevant section in reference guide}
     */
    interface IExportMapping extends mappings.IMappingDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ExportMapping;
        load(callback: (element: ExportMapping) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExportMapping>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/export-mappings relevant section in reference guide}
     */
    class ExportMapping extends mappings.MappingDocument implements IExportMapping {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        parameterName: string;
        /**
         * In version 6.1.0: deleted
         */
        parameterTypeName: string;
        isHeader: boolean;
        /**
         * In version 6.7.0: introduced
         */
        nullValueOption: microflows.NullValueOption;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ExportMapping unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ExportMapping;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/export-mappings relevant section in reference guide}
     */
    class ExportObjectMappingElement extends mappings.ObjectMappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMappingDocument: mappings.MappingDocument;
        readonly containerAsObjectMappingElement: mappings.ObjectMappingElement;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * The new ExportObjectMappingElement will be automatically stored in the 'rootMappingElements' property
         * of the parent mappings.MappingDocument element passed as argument.
         */
        static createInMappingDocumentUnderRootMappingElements(container: mappings.MappingDocument): ExportObjectMappingElement;
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * The new ExportObjectMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createInObjectMappingElementUnderChildren(container: mappings.ObjectMappingElement): ExportObjectMappingElement;
        /**
         * Creates and returns a new ExportObjectMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportObjectMappingElement;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/export-mappings relevant section in reference guide}
     */
    class ExportValueMappingElement extends mappings.ValueMappingElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsObjectMappingElement: mappings.ObjectMappingElement;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExportValueMappingElement instance in the SDK and on the server.
         * The new ExportValueMappingElement will be automatically stored in the 'children' property
         * of the parent mappings.ObjectMappingElement element passed as argument.
         */
        static createIn(container: mappings.ObjectMappingElement): ExportValueMappingElement;
        /**
         * Creates and returns a new ExportValueMappingElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExportValueMappingElement;
    }
}
import { microflows } from "./microflows";
import { projects } from "./projects";
import { IModel } from "./base-model";
