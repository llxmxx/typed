console.log("typed is running")

function check(){
    const emojis = document.querySelectorAll('img[src*="emoji.php"]');
    console.log("[typed]", emojis.length);
}

const observer = new MutationObserver(check);
observer.observe(document.body, {childList: true, subtree: true});