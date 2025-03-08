import { RootContextMenu, ChildContextMenus } from "@/context-menu";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(RootContextMenu);
  for (const { id, title, parentId } of ChildContextMenus) {
    chrome.contextMenus.create({ id, title, parentId });
  }
});

chrome.contextMenus.onClicked.addListener(({ menuItemId }) => {
  for (const childContextMenu of ChildContextMenus) {
    if (childContextMenu.id === menuItemId) {
      childContextMenu.onClick?.();
    }
  }
});
