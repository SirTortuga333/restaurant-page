import burger1 from './lidye-1Shk_PkNkNw-unsplash.jpg'
import burger2 from './amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg'
import burger3 from './mae-mu-I7A_pHLcQK8-unsplash.jpg'

export function homeRender(){
    const content = document.querySelector('#content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');

    const container1 = document.createElement('div');
    const container2 = document.createElement('div');
    const container3 = document.createElement('div');

    const image1 = document.createElement('img');
    image1.src = burger1;
    image1.alt = 'Hamburger with a knife impaled.';

    const title1 = document.createElement('h2');
    title1.textContent = 'Best burger of the city!';

    const desc1 = document.createElement('p');
    desc1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur rerum, repudiandae animi praesentium in dolores voluptate? Aliquam, veniam ad dolore eum, labore, necessitatibus quod animi corrupti consectetur nisi maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid neque ea impedit possimus in aspernatur pariatur facere, maxime excepturi consequuntur illum aliquam facilis nisi ducimus provident hic! Fugit, odit animi.'

    const image2 = document.createElement('img');
    image2.src = burger2;
    image2.alt = 'Hamburger with sauce.'

    const title2 = document.createElement('h2');
    title2.textContent = 'Burgers with sauces!';

    const desc2 = document.createElement('p');
    desc2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vel quidem. Non accusantium repudiandae saepe pariatur labore, blanditiis, magnam, iste et voluptates nihil quos. Dolore maiores maxime quas quasi praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetur consectetur repellendus dolor quaerat, accusamus odio fugit maxime dignissimos! Blanditiis nostrum neque quis fugit optio eum, dicta nihil explicabo perspiciatis!'


    const image3 = document.createElement('img');
    image3.src = burger3;
    image3.alt = 'Two Hamburgers'

    const title3 = document.createElement('h2');
    title3.textContent = 'Burgers with sauces!';

    const desc3 = document.createElement('p');
    desc3.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aut voluptatem odit, odio assumenda quo ab totam alias incidunt ad facere beatae ea sequi unde commodi recusandae adipisci! Asperiores, tenetur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tenetur excepturi consequuntur itaque earum, ullam porro neque iusto. Sapiente cum nobis repellendus, accusamus distinctio delectus laudantium ullam odio fuga dolores.'

    container1.appendChild(image1);
    container1.appendChild(title1);
    container1.appendChild(desc1);
    container2.appendChild(image2);
    container2.appendChild(title2);
    container2.appendChild(desc2);
    container3.appendChild(image3);
    container3.appendChild(title3);
    container3.appendChild(desc3);

    homeContainer.appendChild(container1);
    homeContainer.appendChild(container2);
    homeContainer.appendChild(container3);

    content.appendChild(homeContainer);

}
