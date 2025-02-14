import chefs from './clem-onojeghuo-aUeMxXAUGec-unsplash.jpg'

export function aboutRender(){

    const content = document.querySelector('#content');


    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('about')

    const image = document.createElement('img');
    image.src = chefs;
    image.alt = 'Us - A group of chefs.';

    const title = document.createElement('h2');
    title.textContent = 'About Us!';

    const desc = document.createElement('p');
    desc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend suscipit leo sed eleifend. Nunc mollis sit amet turpis sed ultricies. Phasellus ullamcorper quam in turpis dapibus accumsan. Ut lobortis arcu ac tortor sollicitudin egestas. Sed ut magna tincidunt, pulvinar purus a, pulvinar nisi. Mauris dignissim lacus augue, quis congue libero venenatis eu. Phasellus convallis nec purus sed ornare. Integer iaculis est velit. Vivamus porta viverra ex sed imperdiet. Ut lobortis est at ipsum imperdiet dictum scelerisque quis orci. Aliquam mattis neque quam. Sed malesuada venenatis imperdiet. Pellentesque a faucibus tellus. Praesent non enim tincidunt, posuere tortor non, congue tortor. Aenean consequat ornare lectus, non commodo nibh pellentesque sit amet. Suspendisse sodales nisi non cursus malesuada. Vivamus pulvinar nibh ac lorem hendrerit pharetra. Ut sed fringilla purus. Nunc est nisi, semper vitae gravida in, tempus ut lectus. Nam a posuere massa. Integer eu neque fermentum, pulvinar lectus sit amet, porttitor urna.'

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(desc);
    aboutContainer.appendChild(image);

    content.appendChild(aboutContainer);


}