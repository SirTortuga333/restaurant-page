import './styles.css';
import {homeRender} from './home.js';
import {menuRender} from './menu.js';
import {aboutRender} from './about.js';

homeRender();

const contentContainer = document.querySelector('#content');

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');


homeButton.addEventListener('click',(e)=>{

    const toDelete = contentContainer.querySelectorAll('#content > *');

    toDelete.forEach(element => {
        contentContainer.removeChild(element);
    });

    homeRender();

})



menuButton.addEventListener('click',(e)=>{

    const toDelete = contentContainer.querySelectorAll('#content > *');

    toDelete.forEach(element => {
        contentContainer.removeChild(element);
    });

    menuRender();

})



aboutButton.addEventListener('click',(e)=>{

    const toDelete = contentContainer.querySelectorAll('#content > *');

    toDelete.forEach(element => {
        contentContainer.removeChild(element);
    });

    aboutRender();

})