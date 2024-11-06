// Chat functionality
const chatButton = document.getElementById('chat-button');
const chatWidget = document.getElementById('chat-widget');
const closeChat = document.getElementById('close-chat');

chatButton.addEventListener('click', () => {
    chatWidget.style.display = chatWidget.style.display === 'none' ? 'block' : 'none';
});

closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
});

// Form submission
document.getElementById('therapy-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your submission. We will contact you soon.');
});

// Language switching
document.getElementById('language-selector').addEventListener('change', (e) => {
    const language = e.target.value;
    if (language === 'en') {
        window.location.href = 'index.html';
    } else if (language === 'fa') {
        window.location.href = 'index-fa.html';
    }
});

// Smooth scroll for hero buttons
document.querySelectorAll('.hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Emergency chat button
document.getElementById('emergency-chat-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Open chat with emergency priority
    document.getElementById('chat-widget').style.display = 'block';
    // You could add additional logic here to mark this as an emergency chat
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .testimonial').forEach((el) => {
    observer.observe(el);
});
