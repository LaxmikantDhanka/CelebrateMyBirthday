/* ===========================
   Birthday Page Script
   =========================== */

const confetti = document.getElementById('confetti');
const popup = document.getElementById('popup');

/* Colors for Confetti */
function randomColor() {
    const colors = ['#fbb1bd', '#ffde7d', '#c5f8f1', '#ffc09f', '#f7aef8', '#a0ced9'];
    return colors[Math.floor(Math.random() * colors.length)];
}

/* Play Birthday Song */
function playSong() {
    const audio = document.getElementById("bday-audio");
    if (audio) {
        audio.play().catch(() => {
            // Some browsers need user interaction; you already clicked, so ignore errors.
        });
    }
}

/* Confetti Burst */
function createConfettiBurst(count = 120) {
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.style.left = Math.random() * 100 + 'vw';
        span.style.top = Math.random() * 10 + 'vh';
        span.style.background = randomColor();
        span.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.appendChild(span);
        setTimeout(() => span.remove(), 5000);
    }
}

/* Celebration Trigger */
function triggerCelebration() {
    createConfettiBurst(150);
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 7000);
}

/* Light Confetti Loop */
setInterval(() => {
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + 'vw';
    span.style.background = randomColor();
    confetti.appendChild(span);
    setTimeout(() => span.remove(), 5000);
}, 250);

/* ---------------------------
   Gallery Scrolling
   --------------------------- */
let autoScrollInterval;
let currentIndex = 0;

function scrollGallery(direction) {
    const gallery = document.getElementById('photoGallery');
    if (!gallery) return;

    const totalItems = gallery.children.length;
    const scrollAmount = gallery.clientWidth;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    gallery.scrollTo({ left: currentIndex * scrollAmount, behavior: 'smooth' });
}

/* Auto-scroll every 3s */
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollGallery(1);
    }, 3000);
}

/* Stop Auto-scroll when user interacts */
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

const galleryElem = document.getElementById('photoGallery');
if (galleryElem) {
    galleryElem.addEventListener('touchstart', stopAutoScroll);
    galleryElem.addEventListener('mousedown', stopAutoScroll);
}

/* ---------------------------
   Love Letter Typewriter
   --------------------------- */
const message = `Hey my friend`;

let letterIndex = 0;
const typeSpeed = 40; // ms

function typeLetter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    if (letterIndex < message.length) {
        el.innerHTML += message.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, typeSpeed);
    } else {
        // Hide letter after 4s, reset for replay
        setTimeout(() => {
            const wrapper = document.getElementById("loveLetter");
            if (wrapper) wrapper.style.display = "none";
            el.innerHTML = "";
            letterIndex = 0;
        }, 4000);
    }
}

function showLoveLetter() {
    const wrapper = document.getElementById("loveLetter");
    const el = document.getElementById("typewriter");
    if (!wrapper || !el) return;
    wrapper.style.display = "block";
    el.innerHTML = "";
    letterIndex = 0;
    typeLetter();
}

/* ---------------------------
   Memories Toggle
   --------------------------- */
function showMemories() {
    const intro = document.getElementById("memoriesIntro");
    const section = document.getElementById("memoriesSection");
    if (intro) intro.style.display = "none";
    if (section) section.style.display = "block";
}

/* ---------------------------
   Floating Hearts
   --------------------------- */
// setInterval(() => {
//     const heart = document.createElement("div");
//     heart.className = "heart";

//     // Random X drift between -50vw and +50vw
//     const x = (Math.random() * 100 - 50).toFixed(2) + "vw";
//     heart.style.setProperty("--x", x);

//     const heartsWrapper = document.getElementById("hearts");
//     if (!heartsWrapper) return;
//     heartsWrapper.appendChild(heart);

//     setTimeout(() => heart.remove(), 6000);
// }, 600);

/* ---------------------------
   Flip Cards (auto unflip after 4s)
   --------------------------- */
function initFlipCards() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
            setTimeout(() => {
                card.classList.remove('flipped');
            }, 4000);
        });
    });
}

// adding new heart Animation

const heartsContainer = document.getElementById("hearts");

// Color gradients for hearts
const gradients = [
    "linear-gradient(45deg, #ff4d6d, #ff85a1)",
    "linear-gradient(45deg, #f39c12, #f1c40f)",
    "linear-gradient(45deg, #8e44ad, #9b59b6)",
    "linear-gradient(45deg, #3498db, #5dade2)",
    "linear-gradient(45deg, #16a085, #1abc9c)",
    "linear-gradient(45deg, #e75480, #ff69b4)"
];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random properties
    const size = Math.floor(Math.random() * 15 + 10) + "px"; // 10px–25px
    const duration = Math.random() * 4 + 6 + "s"; // 6–10s
    const drift = Math.random() * 300 - 150 + "px"; // horizontal sway
    const color = gradients[Math.floor(Math.random() * gradients.length)];

    heart.style.left = "0px";
    heart.style.setProperty("--size", size);
    heart.style.setProperty("--duration", duration);
    heart.style.setProperty("--x", drift);
    heart.style.setProperty("--color", color);

    heartsContainer.appendChild(heart);

    // Remove after animation ends
    setTimeout(() => {
        heart.remove();
    }, parseFloat(duration) * 1000);
}

//  flippedcards start here
function flipWithSparkle(section) {
    // Flip the card
    section.classList.toggle('flipped');

    // Create sparkles on the back
    // const sparkleContainer = section.querySelector('.sparkle-container');
    // if (!sparkleContainer) return;

    // for (let i = 0; i < 30; i++) {
    //     const sparkle = document.createElement('div');
    //     sparkle.className = 'sparkle';
    //     sparkle.style.left = Math.random() * 100 + '%';
    //     sparkle.style.top = Math.random() * 30 + '%';
    //     sparkle.style.background = ['#ffd700', '#ff69b4', '#87cefa'][Math.floor(Math.random() * 3)];
    //     sparkleContainer.appendChild(sparkle);

    //     // Remove after animation
    //     setTimeout(() => sparkle.remove(), 1200);
    // }
}

//    flip card section
// const card = document.getElementById('card');

// card.addEventListener('click', () => {
//     card.classList.add('flipped');

//     setTimeout(() => {
//         card.classList.remove('flipped');
//     }, 4000); // 4 seconds
// });

const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('flipped');
        setTimeout(() => {
            card.classList.remove('flipped');
        }, 4000);
    });
});


// Continuous heart flow
setInterval(createHeart, 400);
// final js to work with jerry and hearts 
