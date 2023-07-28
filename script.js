/*============= toggle icon navbar =============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============= scroll sections active link =============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        
        // if want to use animation that reports on scroll use this
        else {
            sec.classList.remove('show-animate');
        };
    });

// animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

/*============= sticky navbar =============*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*============= remove toggle icon and navbar when click navbar link (scroll)=============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*============= typed js =============*/
const typed = new Typed('.multiple-text', {
    strings: ['Designer', 'Packaging', 'Logos', 'Broucher', 'Website', 'Brand', 'Nagasai'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});