function reveal() {
    var reveals = document.querySelectorAll(".polaroid-frame, .glass-letter");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            reveals[i].classList.add("appear");
        }
    }
}

window.addEventListener("scroll", reveal);

function createFloatingEmoji() {
    const emojis = ['🎈', '✨', '👯‍♀️', '🍕', '🧁', '💖'];
    const emoji = document.createElement('div');
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.bottom = "-5vh";
    emoji.style.fontSize = "25px";
    emoji.style.zIndex = "-1";
    emoji.style.transition = "transform 6s linear, opacity 6s";
    
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        emoji.style.opacity = "0";
    }, 100);

    setTimeout(() => emoji.remove(), 6000);
}

setInterval(createFloatingEmoji, 1000);
reveal();