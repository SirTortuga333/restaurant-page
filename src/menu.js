export function menuRender(){

    const content = document.querySelector('#content');

    const menuBorder = document.createElement('div');
    menuBorder.classList.add('outer-border');
    menuBorder.classList.add('menu');

    const innerBorder = document.createElement('div');
    innerBorder.classList.add('inner-border');

    const burgers = document.createElement('h2');
    burgers.textContent = 'Burgers'

    menuBorder.appendChild(innerBorder);
    innerBorder.appendChild(burgers);

    for (let index = 1; index < 6; index++) {

        const burger = document.createElement('p');
        burger.textContent = 'Burger ' + index.toString();
        burger.classList.add('menu-item');

        const separator = document.createElement('p');
        separator.textContent = '............................................................';
        separator.classList.add('menu-separator');

        const price = document.createElement('p');
        price.textContent = '$1' + index.toString() + '.00';
        price.classList.add('menu-price');
        
        innerBorder.appendChild(burger);
        innerBorder.appendChild(separator);
        innerBorder.appendChild(price);
        
    }


    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks'

    innerBorder.appendChild(drinks);

    for (let index = 1; index < 4; index++) {

        const drink = document.createElement('p');
        drink.textContent = 'Drink ' + index.toString();
        drink.classList.add('menu-item');

        const separator = document.createElement('p');
        separator.textContent = '............................................................';
        separator.classList.add('menu-separator');

        const price = document.createElement('p');
        price.textContent = '$1' + index.toString() + '.00';
        price.classList.add('menu-price');
        
        innerBorder.appendChild(drink);
        innerBorder.appendChild(separator);
        innerBorder.appendChild(price);
        
    }


    content.appendChild(menuBorder);

}