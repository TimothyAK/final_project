const main_title = document.getElementById('main-title');
const main_text = document.getElementById('main-text');
const about_us_content = document.getElementsByClassName('about-container');
const posts = document.getElementsByClassName('posts-container');

function replaceClass(elementToBeChanged, oldClass, newClass) {
    elementToBeChanged.classList.remove(oldClass);
    elementToBeChanged.classList.add(newClass);
}

function adjustToScreenResolution() {
    if (window.matchMedia("(max-width: 768px)").matches){
        if(main_title.classList.contains('col-6')) {
            replaceClass(main_title, 'col-6', 'col-8');
        }
        if(main_text.classList.contains('col-5')) {
            replaceClass(main_text, 'col-5', 'col-8');
        }
        if(about_us_content[0].classList.contains('col-8')) {
            replaceClass(about_us_content[0], 'col-8', 'col-10');
        }
        if(posts[0].classList.contains('col-8')) {
            replaceClass(posts[0], 'col-8', 'col-10');
        }
    } else {
        if(main_title.classList.contains('col-8')) {
            replaceClass(main_title, 'col-8', 'col-6');
        }
        if(main_text.classList.contains('col-8')) {
            replaceClass(main_text, 'col-8', 'col-5');
        }
        if(about_us_content[0].classList.contains('col-10')) {
            replaceClass(about_us_content[0], 'col-10', 'col-8');
        }
        if(posts[0].classList.contains('col-10')) {
            replaceClass(posts[0], 'col-10', 'col-8');
        }
    }
}

window.addEventListener('resize', adjustToScreenResolution);
window.addEventListener('load', adjustToScreenResolution);
