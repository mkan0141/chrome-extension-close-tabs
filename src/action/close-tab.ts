const getActiveTabIndex = (tabs: chrome.tabs.Tab[]) => {
  return tabs.findIndex((tab) => tab.active);
};

const fetchCurrentWindowTabs = async () => {
  return await chrome.tabs.query({
    lastFocusedWindow: true,
  });
};

const closeChromeTabs = (tabs: chrome.tabs.Tab[]) => {
  const tabIds = tabs.map((tab) => tab.id);
  const removeTabs = tabIds.filter((id) => id !== undefined);
  chrome.tabs.remove(removeTabs);
};

export const closeTab = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const activeTab = tabs[activeTabIndex];

  closeChromeTabs([activeTab]);
};

export const closeOtherTabs = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const notActiveTabs = tabs.filter((_, index) => index !== activeTabIndex);

  closeChromeTabs(notActiveTabs);
};

export const closeToLeftTabs = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const tabsToLeft = tabs.slice(0, activeTabIndex);

  closeChromeTabs(tabsToLeft);
};

export const closeToRightTabs = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const tabsToRight = tabs.slice(activeTabIndex + 1);

  closeChromeTabs(tabsToRight);
};

export const closeTabsFromThisDomain = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const { url: activeTabUrl } = tabs[activeTabIndex];
  if (!activeTabUrl) return;

  const activeTabDomain = new URL(activeTabUrl).origin;
  const sameDomainTabs = tabs.filter(
    ({ url }) => url && new URL(url).origin === activeTabDomain,
  );

  closeChromeTabs(sameDomainTabs);
};

export const closeTabsFromOtherDomain = async () => {
  const tabs = await fetchCurrentWindowTabs();

  const activeTabIndex = getActiveTabIndex(tabs);
  const { url: activeTabUrl } = tabs[activeTabIndex];
  if (!activeTabUrl) return;

  const activeTabDomain = new URL(activeTabUrl).origin;
  const otherDomainTabs = tabs.filter(
    ({ url }) => !(url && new URL(url).origin === activeTabDomain),
  );

  closeChromeTabs(otherDomainTabs);
};
