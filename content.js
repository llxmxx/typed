console.log("typed is running")

const table = {
    "😃": ":D",
    "🙂": ":)",
    "🙁": ":(",
    "😮": ":o",
    "❤": "<3",
    "😕": ":/",
    "😘": ":*",
    ":3": ":3"
}

function check(){
    const emojis = document.querySelectorAll('img[src*="emoji.php"]');
    for(const e of emojis){
        const r = table[e.alt];
        if(r){
            e.parentElement.replaceWith(table[e.alt]);
        }
    }
}

const observer = new MutationObserver(check);
observer.observe(document.body, {childList: true, subtree: true});

