const article = document.getElementsByClassName('article-container');

function replaceClass(elementToBeChanged, oldClass, newClass) {
    elementToBeChanged.classList.remove(oldClass);
    elementToBeChanged.classList.add(newClass);
}

function adjustToScreenResolution() {
    if (window.matchMedia("(max-width: 992px)").matches){
        if(article[0].classList.contains('col-7')) {
            replaceClass(article[0], 'col-7', 'col-10');
        }
    } else {
        if(article[0].classList.contains('col-10')) {
            replaceClass(article[0], 'col-10', 'col-7');
        }
    }
}

window.addEventListener('resize', adjustToScreenResolution);
window.addEventListener('load', adjustToScreenResolution);