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
    const quotes = document.querySelectorAll("blockquote");
    for(const e of emojis){
        const r = table[e.alt];
        if(r){
            e.parentElement.replaceWith(table[e.alt]);
        }
    }
    for(const q of quotes){
        const text = q.textContent;
        if(text.startsWith(":")){
            q.replaceWith(">" + text);
        }
    }
}

const observer = new MutationObserver(check);
observer.observe(document.body, {childList: true, subtree: true});

