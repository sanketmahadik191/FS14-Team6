(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";
    let currentVideoBookmarks = [];


    // fetching previous bookmarks associated with video push
    const fetchBookmarks = () => {
        return new Promise((resolve) => {
            chrome.storage.sync.get([currentVideo], (obj) => {
                if (chrome.runtime.lastError) {
                    console.error("Error fetching bookmarks:", chrome.runtime.lastError.message);
                    resolve([]); // Return an empty array if context is invalidated
                } else {
                    resolve(obj[currentVideo] ? JSON.parse(obj[currentVideo]) : []);
                }
            });
        });
    };


    // this function haddles event when user click on add bookamark
    const addNewBookmarkEventHandler = async(e) => {
        let details = window.prompt("Add Heading To Bookmark");
        const currentTime = youtubePlayer.currentTime;
        const newBookmark = {
            time: currentTime,
            desc: getTime(currentTime) + "</span>",
            dels: details,
        };

        currentVideoBookmarks = await fetchBookmarks();

        chrome.storage.sync.set({
            [currentVideo]: JSON.stringify(
                [...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time)
            ),
        });
    };

    // when new video loaded its add bookmark button
    const newVideoLoaded = async() => {
        const bookmarkBtnExists =
            document.getElementsByClassName("bookmark-btn")[0];
        currentVideoBookmarks = await fetchBookmarks();

        if (!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");

            bookmarkBtn.src = chrome.runtime.getURL("Assets/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "Add Your Bookmark";
            bookmarkBtn.style.height = "20px";
            bookmarkBtn.style.width = "20px";
            bookmarkBtn.style.alignSelf = "center";

            youtubeLeftControls =
                document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];

            youtubeLeftControls.appendChild(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
        }
    };

    // get message from background script  , haddle bookamarks function such as play delete
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if (type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        } else if (type === "PLAY") {
            youtubePlayer.currentTime = value;
        } else if (type === "DELETE") {
            currentVideoBookmarks = currentVideoBookmarks.filter(
                (b) => b.time != value
            );
            chrome.storage.sync.set({
                [currentVideo]: JSON.stringify(currentVideoBookmarks),
            });

            response(currentVideoBookmarks);
        }
    });
})();

// return timestamp to store in bookmark
const getTime = (t) => {
    var date = new Date(0);
    date.setSeconds(t);
    return date.toISOString().substr(11, 8);
};