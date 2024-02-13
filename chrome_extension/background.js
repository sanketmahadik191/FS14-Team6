// Service workers are scripts that your browser runs in the background, separate from a web page, allowing them to handle tasks such as push notifications, background sync, and offline capabilities

//Service worker files are important for enhancing the capabilities of web applications, particularly in scenarios where offline access, background processing, and push notifications are desired



// from this function our extension know we are on new page or change the page
chrome.tabs.onUpdated.addListener(async(tabId, changeInfo, tab) => {
    const { url } = tab;

    // check we are on youtube page or not
    if (url && url.includes("youtube.com/watch")) {
        const { searchParams } = new URL(url);
        const videoId = searchParams.get("v");

        chrome.tabs.sendMessage(tabId, { type: "NEW", videoId }, response => {
            if (!chrome.runtime.lastError) {
                console.log("response", response);
            } else {
                console.log(chrome.runtime.lastError);
            }
        });
    }
});