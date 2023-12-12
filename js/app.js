const navbar = document.getElementById('navbar');
const toggle_bars = document.getElementById('navbar-toggler');
const offcanvas = document.getElementById('mobile-navbar-menu');
var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);

function replaceClass(elementToBeChanged, oldClass, newClass) {
    elementToBeChanged.classList.remove(oldClass);
    elementToBeChanged.classList.add(newClass);
}

function adjustToScreenResolution() {
    if (window.matchMedia("(max-width: 768px)").matches){
        if(navbar.classList.contains('navbar-expand')) {
            navbar.classList.remove('navbar-expand');
            navbar.classList.remove('fixed-top');
            toggle_bars.classList.add('active');
        }
    } else {
        if(!navbar.classList.contains('navbar-expand')) {
            navbar.classList.add('navbar-expand');
            navbar.classList.add('fixed-top');
            toggle_bars.classList.remove('active');
        }
    }
}

window.addEventListener('resize', adjustToScreenResolution);
window.addEventListener('load', adjustToScreenResolution);

toggle_bars.addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
});