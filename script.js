// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll for CTA Button
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector('#contact');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element, index) => {
    setTimeout(() => {
        element.classList.add('visible');
    }, index * 30); // Delay dipercepat ke 30ms
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el, index) => {
        if (elementInView(el, 0.8)) { // Threshold dikurangi ke 0.8
            displayScrollElement(el, index);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', () => {
    scrollElements.forEach((el, index) => {
        if (elementInView(el, 0.8)) {
            displayScrollElement(el, index);
        }
    });
});

// WhatsApp Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = contactForm.querySelector('input[name="nama"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const pesan = contactForm.querySelector('textarea[name="pesan"]').value;
        
        // Ganti dengan nomor WhatsApp Anda
        const whatsappNumber = '+62882003827976';
        
        // Membuat pesan WhatsApp
        const message = `Halo, saya ${nama}.\nEmail: ${email}\nPesan: ${pesan}`;
        
        // Encode pesan untuk URL
        const encodedMessage = encodeURIComponent(message);
        
        // URL WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Buka WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset formulir
        contactForm.reset();
    });
}