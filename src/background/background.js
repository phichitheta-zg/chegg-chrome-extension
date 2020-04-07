export const openTab = () => {
  console.log("Login Button (div) clicked!");
  chrome.tabs.create({
    url: "https://www.chegg.com/auth?action=login",
    active: true
  });
};
