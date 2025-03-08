import {
  closeTab,
  closeTabsFromOtherDomain,
  closeTabsFromThisDomain,
  closeToLeftTabs,
  closeToRightTabs,
} from "@/action";

type ContextMenu = chrome.contextMenus.CreateProperties & {
  onClick?: () => void;
};

export const RootContextMenu: ContextMenu = {
  id: "CloseTabsRoot",
  title: "Close Tabs",
};

export const ChildContextMenus: ContextMenu[] = [
  {
    id: "closeCurrentTab",
    title: "Close tab",
    parentId: RootContextMenu.id,
    onClick: closeTab,
  },
  {
    id: "closeToLeftTabs",
    title: "Close tabs to the Left",
    parentId: RootContextMenu.id,
    onClick: closeToLeftTabs,
  },
  {
    id: "closeToRightTabs",
    title: "Close tabs to the Right",
    parentId: RootContextMenu.id,
    onClick: closeToRightTabs,
  },
  {
    id: "closeFromThisDomain",
    title: "Close tabs from this domain",
    parentId: RootContextMenu.id,
    onClick: closeTabsFromThisDomain,
  },
  {
    id: "closeFromOtherDomain",
    title: "Close tabs from other domain",
    parentId: RootContextMenu.id,
    onClick: closeTabsFromOtherDomain,
  },
];
