'use strict';
const menuButton = document.querySelector('.menu-button__wrap');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open')
    header.classList.toggle('header--open')
})