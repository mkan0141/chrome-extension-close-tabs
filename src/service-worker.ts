import { RootContextMenu, ChildContextMenus } from "@/context-menu";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(RootContextMenu);
  ChildContextMenus.forEach(({ id, title, parentId }) => {
    chrome.contextMenus.create({ id, title, parentId });
  });
});

chrome.contextMenus.onClicked.addListener(({ menuItemId }) => {
  ChildContextMenus.forEach((childContextMenu) => {
    if (childContextMenu.id === menuItemId) {
      childContextMenu.onClick?.();
    }
  });
});
