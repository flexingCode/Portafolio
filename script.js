let currentLanguage = 'en';

const translations = {
    es: {},
    en: {}
};

function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    
    document.querySelectorAll('[data-es]').forEach(element => {
        const key = element.getAttribute('data-es');
        translations.es[key] = element.getAttribute('data-es');
        translations.en[key] = element.getAttribute('data-en');
    });
    
    setLanguageContent();
    langToggle.addEventListener('click', toggleLanguage);
}

function setLanguageContent() {
    document.querySelectorAll('[data-es]').forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'en') {
            element.textContent = enText;
        } else {
            element.textContent = esText;
        }
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    const langToggle = document.getElementById('langToggle');
    
    langToggle.classList.toggle('active');
    setLanguageContent();
    document.documentElement.lang = currentLanguage;
}

function initParticlesBackground() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#667eea", "#764ba2", "#3b82f6", "#10b981"]
            },
            "shape": {
                "type": ["circle", "triangle", "polygon", "star"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "star": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#667eea",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.querySelector('.progress-fill')) {
                    const progressBars = entry.target.querySelectorAll('.progress-fill');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 200);
                    });
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/90');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white/90');
        }
    });
}

function initTypingAnimation() {
    const text = document.querySelector('section#hero h1 .gradient-text');
    if (text) {
        const originalText = text.textContent;
        text.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

function initParallaxEffect() {
    const heroFloatingElements = document.querySelectorAll('#hero .floating-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        heroFloatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.05;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

function initFormHandling() {
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name') || form.querySelector('input[type="text"]').value;
            const email = formData.get('email') || form.querySelector('input[type="email"]').value;
            const message = formData.get('message') || form.querySelector('textarea').value;
            
            const subject = currentLanguage === 'es' ? 'Contacto desde tu portafolio' : 'Contact from your portfolio';
            const body = currentLanguage === 'es' 
                ? `Hola Carlos,\n\nMi nombre es ${name}.\n\n${message}\n\nSaludos,\n${name}\n${email}`
                : `Hi Carlos,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}\n${email}`;
            
            const mailtoLink = `mailto:carlosminerodubon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = currentLanguage === 'es' ? '¡Mensaje enviado!' : 'Message sent!';
            button.disabled = true;
            button.classList.add('bg-green-600');
            button.classList.remove('bg-indigo-600');
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.classList.remove('bg-green-600');
                button.classList.add('bg-indigo-600');
                form.reset();
            }, 3000);
        });
    }
}

function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const nav = document.querySelector('nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            } else {
                createMobileMenu();
            }
        });
    }
}

function createMobileMenu() {
    const nav = document.querySelector('nav .max-w-7xl');
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200';
    
    const menuItems = `
        <div class="px-4 py-2 space-y-1">
            <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors" data-es="Sobre mí" data-en="About me">Sobre mí</a>
            <a href="#stack" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors" data-es="Stack" data-en="Stack">Stack</a>
            <a href="#experience" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors" data-es="Experiencia" data-en="Experience">Experiencia</a>
            <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors" data-es="Contacto" data-en="Contact">Contacto</a>
        </div>
    `;
    
    mobileMenu.innerHTML = menuItems;
    nav.appendChild(mobileMenu);
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    if (currentLanguage === 'en') {
        mobileMenu.querySelectorAll('[data-es]').forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
    }
}

function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initScrollAnimations();
    initSmoothScrolling();
    initNavbarScroll();
    initTypingAnimation();
    initParallaxEffect();
    initFormHandling();
    initMobileMenu();
    initPreloader();
    
    initParticlesBackground();
    
    document.body.classList.add('loaded');
});

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', throttle(() => {
    initNavbarScroll();
}, 16));

function initEasterEggs() {
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join('') === konami.join('')) {
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    });
}

setTimeout(initEasterEggs, 2000);

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                e.preventDefault();
                document.querySelector('#stack').scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                e.preventDefault();
                document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

function addInteractionFeedback() {
    document.querySelectorAll('button, .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

setTimeout(addInteractionFeedback, 1000);

