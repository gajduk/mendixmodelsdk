import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace menus {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Menus`.
     */
    /**
     * See: {@link https://docs.mendix.com/refguide7/menu relevant section in reference guide}
     */
    interface IMenuDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): MenuDocument;
        load(callback: (element: MenuDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<MenuDocument>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/menu relevant section in reference guide}
     */
    class MenuDocument extends projects.Document implements IMenuDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsFolderBase: projects.FolderBase;
        itemCollection: MenuItemCollection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new MenuDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): MenuDocument;
    }
    abstract class MenuItemContainer extends internal.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMenuDocument: MenuDocument;
        readonly containerAsMenuItemContainer: MenuItemContainer;
        readonly containerAsNavigationProfile: navigation.NavigationProfile;
        readonly items: internal.IList<MenuItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * See: {@link https://docs.mendix.com/refguide7/menu-item relevant section in reference guide}
     */
    class MenuItem extends MenuItemContainer {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMenuItemContainer: MenuItemContainer;
        caption: texts.Text;
        icon: pages.Icon | null;
        action: pages.ClientAction;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MenuItem instance in the SDK and on the server.
         * The new MenuItem will be automatically stored in the 'items' property
         * of the parent MenuItemContainer element passed as argument.
         */
        static createIn(container: MenuItemContainer): MenuItem;
        /**
         * Creates and returns a new MenuItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MenuItem;
    }
    class MenuItemCollection extends MenuItemContainer {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        model: IModel;
        readonly containerAsMenuDocument: MenuDocument;
        readonly containerAsNavigationProfile: navigation.NavigationProfile;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * The new MenuItemCollection will be automatically stored in the 'itemCollection' property
         * of the parent MenuDocument element passed as argument.
         */
        static createInMenuDocumentUnderItemCollection(container: MenuDocument): MenuItemCollection;
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * The new MenuItemCollection will be automatically stored in the 'menuItemCollection' property
         * of the parent navigation.NavigationProfile element passed as argument.
         */
        static createInNavigationProfileUnderMenuItemCollection(container: navigation.NavigationProfile): MenuItemCollection;
        /**
         * Creates and returns a new MenuItemCollection instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MenuItemCollection;
    }
}
import { navigation } from "./navigation";
import { pages } from "./pages";
import { texts } from "./texts";
import { IModel } from "./base-model";