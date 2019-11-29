import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace images {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Images`.
     */
    interface IImage extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsImageCollection: IImageCollection;
        readonly name: string;
        asLoaded(): Image;
        load(callback: (element: Image) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Image>;
    }
    class Image extends internal.Element implements IImage {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsImageCollection: ImageCollection;
        name: string;
        imageData: string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * The new Image will be automatically stored in the 'images' property
         * of the parent ImageCollection element passed as argument.
         */
        static createIn(container: ImageCollection): Image;
        /**
         * Creates and returns a new Image instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Image;
        readonly qualifiedName: string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/images relevant section in reference guide}
     */
    interface IImageCollection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly images: internal.IList<IImage>;
        asLoaded(): ImageCollection;
        load(callback: (element: ImageCollection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ImageCollection>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/images relevant section in reference guide}
     */
    class ImageCollection extends projects.Document implements IImageCollection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        readonly images: internal.IList<Image>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ImageCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ImageCollection;
    }
}
import { IModel } from "./base-model";