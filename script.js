

console.log("Connect script loaded");

// handling nav clicks
const links = document.querySelectorAll('.nav-links a');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

links.forEach(l => {
    l.addEventListener('click', (e) => {
        e.preventDefault();

        // get the target
        let href = l.getAttribute('href');
        let pg = document.querySelector(href);

        if (pg) {
            // checking if we need to offset for the fixed header
            let offset = 60;
            let bodyRect = document.body.getBoundingClientRect().top;
            let elRect = pg.getBoundingClientRect().top;
            let elPos = elRect - bodyRect;
            let offsetPos = elPos - offset;

            window.scrollTo({
                top: offsetPos,
                behavior: 'smooth'
            });

            // close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    })
});

// mobile menu toggle
if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // nice animation maybe?
        burger.classList.toggle('toggle');
    });
}

// simple sticky nav effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = '#111'; // make it darker when scrolling
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = '#222';
        navbar.style.boxShadow = 'none';
    }
});
