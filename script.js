
const aboutBtn = document.querySelector('.about-btn');
const contactBtn = document.querySelector('.contact-btn');

const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

aboutBtn.addEventListener('click', function (event) {
    event.preventDefault();  
    aboutSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
    });
});

contactBtn.addEventListener('click', function (event) {
    event.preventDefault(); 
    contactSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
    });
});
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});
