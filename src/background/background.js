/* global chrome */

export const openTab = () => {
  console.log("Login Button (div) clicked!");
  chrome.tabs.create({
    url: "https://www.chegg.com/auth?action=login",
    active: true,
  });
};

export const closeCurrentTab = () => {
  console.log("Log out completed, close Egg tab");
  chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
  });
};
