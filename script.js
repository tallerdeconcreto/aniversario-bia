// Scroll animation
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Fade out card 1
    if (scrollY > windowHeight * 0.3) {
        card1.classList.add('fade-out');
    } else {
        card1.classList.remove('fade-out');
    }

    // Fade in card 2
    if (scrollY > windowHeight * 0.5) {
        card2.classList.add('fade-in');
    } else {
        card2.classList.remove('fade-in');
    }
}

window.addEventListener('scroll', handleScroll);

function scrollToSection2() {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
}

// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (15 + Math.random() * 10) + 's';
        heartsContainer.appendChild(heart);
    }
}

createHearts();
