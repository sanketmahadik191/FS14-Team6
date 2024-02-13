import { getActiveTabURL } from "./utlis.js";


const addNewBookmark = (bookmarks, bookmark) => {

    // Create a new div element for the bookmark
    const newBookmarkElement = document.createElement("div");
    newBookmarkElement.id = "bookmark-" + bookmark.time;
    newBookmarkElement.className = "bookmark";
    newBookmarkElement.setAttribute("timestamp", bookmark.time);

    // Create a div element for the bookmark title
    const bookmarkTitleElement = document.createElement("div");
    bookmarkTitleElement.innerHTML = bookmark.desc;
    bookmarkTitleElement.className = "bookmark-title";
    newBookmarkElement.appendChild(bookmarkTitleElement);

    // Create a div element for the bookmark description
    const bookmarkdels = document.createElement("div")
    bookmarkdels.textContent = bookmark.dels;
    bookmarkdels.contentEditable = true;
    bookmarkdels.className = "bookmark-dels";
    newBookmarkElement.appendChild(bookmarkdels);

    // Create a div element for the bookmark controls
    const controlsElement = document.createElement("div");
    controlsElement.className = "bookmark-controls";

    // Create and set attributes for the play control
    setBookmarkAttributes("play", onPlay, controlsElement);

    // Create and set attributes for the delete control
    setBookmarkAttributes("delete", onDelete, controlsElement);

    // Append the controls element to the bookmark element
    newBookmarkElement.appendChild(controlsElement);

    bookmarks.appendChild(newBookmarkElement);
};


// Add and set buttons and contant to bookmark
const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
    const controlElement = document.createElement("img");

    controlElement.src = "./Assets/" + src + ".png";
    controlElement.title = src;
    controlElement.classList.add(src)
    controlElement.addEventListener("click", eventListener);
    controlParentElement.appendChild(controlElement);
};

const viewBookmarks = (currentBookmarks = []) => {
    const bookmarksElement = document.getElementById("bookmarks");
    bookmarksElement.innerHTML = "";

    if (currentBookmarks.length > 0) {
        for (let i = 0; i < currentBookmarks.length; i++) {
            const bookmark = currentBookmarks[i];
            addNewBookmark(bookmarksElement, bookmark);
        }
    } else {
        bookmarksElement.innerHTML =
            `<h1 style="color: black;">No bookmarks to show</h1>`;
    }

    return;
};

// Play the video at time of bookmark
const onPlay = async(e) => {
    const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
    const activeTab = await getActiveTabURL();

    chrome.tabs.sendMessage(activeTab.id, {
        type: "PLAY",
        value: bookmarkTime,
    });
};

// Delete the bookmark
const onDelete = async(e) => {
    const activeTab = await getActiveTabURL();
    const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
    const bookmarkElementToDelete = document.getElementById(
        "bookmark-" + bookmarkTime
    );

    bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);

    chrome.tabs.sendMessage(
        activeTab.id, {
            type: "DELETE",
            value: bookmarkTime,
        },
        viewBookmarks
    );
};

document.addEventListener("DOMContentLoaded", async() => {
    // Get the URL of the active tab
    const activeTab = await getActiveTabURL();

    // Extract the video ID from the URL parameters
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    const currentVideo = urlParameters.get("v");

    // Check if the active tab is a YouTube watch page and a video ID is present
    if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
        // Retrieve bookmarks for the current video from Chrome storage
        chrome.storage.sync.get([currentVideo], (data) => {
            // Parse retrieved data into an array or use an empty array if no data found
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];

            // Display the bookmarks for the current video
            viewBookmarks(currentVideoBookmarks);
        });
    } else {
        // Display a message if the active tab is not a YouTube watch page
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = `<h1 style="color: black; margin:10px">This Is Not A Youtube Page</h1>`;
    }
});