/*============= toggle icon menu =============*/
let subMenu = document.getElementById("subMenu");
            function toggleMenu(){
                menu.onclick = () => {
                menu.classList.toggle('bx-x');
                subMenu.classList.toggle("open-menu");
            }
        
// animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

};

/*============= typed js =============*/
const typed = new Typed('.multiple-text', {
    strings: ['Designer', 'Packaging', 'Logos', 'Broucher', 'Website', 'Brand', 'Nagasai'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
