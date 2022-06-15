/*
Принцип работы меню
функция menuInit() инициализирует меню.
а именно: кнопку бургера .menu__icon; обертку самого меню .menu__body;
По клику на iconMenu идет проверка флага bodyLockStatus истина или лож
и запускает bodyLockToggle(). Каторый в свою очередь проверяет
есть ли класс lock у html.
если есть , то выполнится  bodyLock
если нет , bodyUnlock

*/
import {addTouchClass,  menuInit, isMobile} from './functions.js';

function menuArrow(){
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}

if (isMobile.any()) {
    addTouchClass();
    menuInit();
    //если есть выпадающий список
    menuArrow();
}