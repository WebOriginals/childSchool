// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
let header = document.querySelector('.header');
if(header) {
    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            header.classList.add('stickytop');
        } else {
            header.classList.remove('stickytop');
        }
    };
}
