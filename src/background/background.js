/* global chrome */

export const openTab = () => {
  console.log("Login Button (div) clicked!");
  chrome.tabs.create({
    windowID = 1,
    url: "https://www.chegg.com/auth?action=login",
    active: true,

  });
};

export const closeCurrentTab = () => {
  console.log("Timer ran out, close Egg tab");
  chrome.tabs.remove(tab.id, function() { });
  
};
