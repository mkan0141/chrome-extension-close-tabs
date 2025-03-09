import {
  closeTab,
  closeOtherTabs,
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
    title: chrome.i18n.getMessage("closeCurrentTabTitle"),
    parentId: RootContextMenu.id,
    onClick: closeTab,
  },
  {
    id: "closeOtherTabs",
    title: chrome.i18n.getMessage("closeOtherTabsTitle"),
    parentId: RootContextMenu.id,
    onClick: closeOtherTabs,
  },
  {
    id: "closeToLeftTabs",
    title: chrome.i18n.getMessage("closeToLeftTabsTitle"),
    parentId: RootContextMenu.id,
    onClick: closeToLeftTabs,
  },
  {
    id: "closeToRightTabs",
    title: chrome.i18n.getMessage("closeToRightTabsTitle"),
    parentId: RootContextMenu.id,
    onClick: closeToRightTabs,
  },
  {
    id: "closeFromThisDomain",
    title: chrome.i18n.getMessage("closeFromThisDomainTitle"),
    parentId: RootContextMenu.id,
    onClick: closeTabsFromThisDomain,
  },
  {
    id: "closeFromOtherDomain",
    title: chrome.i18n.getMessage("closeFromOtherDomainTitle"),
    parentId: RootContextMenu.id,
    onClick: closeTabsFromOtherDomain,
  },
];
