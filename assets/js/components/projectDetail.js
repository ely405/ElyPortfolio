 'use strict';

const proyectDetail = (element) => {
    let row = $(' <div class="row container"></div>');
    element.map(e => {
        console.log(e);
        const { title, imgSrc, imgAlt, detail, urlDemo, urlGithub, icons} = e;
        console.log('icons', icons);
        let list = $('<ul class="valign-wrapper justify-around flex-wrap"></ul>');
        icons.map(icon => {
            console.log('icon', icon);
            let iconLi = $(`<li class="contact-li valign-wrapper justify-center">
                            <a target='_blank' class="grey-text text-darken-1"><i class="fab ${icon} fa-3x "></i></a>
                        </li>`);
            list.append(iconLi);
        })

        let container = $('<div class="col m6"></div>');
        let card =  $('<div class="card"></div>')
        let img = $(`<div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src=${imgSrc} alt=${imgAlt}
                    </div>`);
        let cardContent = $(`<div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
                                <a class="btn waves-effect m-1rm" href="${urlGithub}" target="_blank"><i class="fab fa-github"></i> Github</a>
                                <a class="btn waves-effect m-1rm" href="${urlDemo}"><i class="fa fa-external-link-alt"></i> Demo</a>
                            </div>`);
        // let cardAction = $(`<div class="card-action">
        //                     </div>`);
        let cardReveral = $(`<div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                                <p class="grey-text">${detail}</p>     
                            </div>`);
        cardReveral.append(list);
        container.append(card.append(img, cardContent, cardReveral));
        row.append(container);
    });
    return row;
}

const portfolioDetail = [
    {
        title: 'LabCar',
        imgAlt: 'LabCar aplicación para pedir taxi',
        imgSrc: 'assets/img/labCar.png',
        detail: 'Es una aplicación que te permite pedir un taxi cuando quieras y en donde quieras, el diseño es responsivo',
        urlDemo: 'https://ely405.github.io/labCar/',
        urlGithub: 'https://github.com/ely405/labCar',
        icons: ['fa-css3-alt', 'fa-html5', 'fa-js-square']
    },{
        title: 'Freelancer',
        imgAlt: 'Start Bootstrap plantilla de portafolio',
        imgSrc: 'assets/img/startBootstrap.png',
        detail: `Freelancer es un tema de Bootstrap, en ésta réplica el diseño se realiza con flex-box, diseño responsivo`,
        urlDemo: 'https://ely405.github.io/start-boostrap/',
        urlGithub: 'https://github.com/ely405/start-boostrap',
        icons: ['fa-css3-alt', 'fa-html5']        
    },{
        title: 'Chat',
        imgAlt: 'Chat con firebase',
        imgSrc: 'assets/img/startBootstrap.png',
        detail: `Es una aplicación con la que te puedes comunicar con varias personas a la vez`,
        urlDemo: 'https://ely405.github.io/start-boostrap/',
        urlGithub: 'https://github.com/ely405/start-boostrap',
        icons: ['fa-css3-alt', 'fa-html5']        
    }
]

$('#rootPortfolio').append(proyectDetail(portfolioDetail));


// <div class="card col m6">
//             <div class="card-image waves-effect waves-block waves-light">
//               <img class="activator" src="assets/img/labCar.png">
//             </div>
            // <div class="card-content">
            //   <span class="card-title activator grey-text text-darken-4">LabCar<i class="material-icons right">more_vert</i></span>
            //     <a class="btn waves-effect waves-light red" target="_blank" href="https://www.google.com.pe/search?q=a+_blank&oq=a+_blank&aqs=chrome..69i57.5960j0j7&sourceid=chrome&ie=UTF-8">demo</a>
            //     <button class="btn waves-effect waves-light red" type="button">Detalles</button>
            //   </div>
            //   <div class="card-action">
            //     <a class="btn waves-effect waves-light red" target="_blank" href="https://www.google.com.pe/search?q=a+_blank&oq=a+_blank&aqs=chrome..69i57.5960j0j7&sourceid=chrome&ie=UTF-8">demo</a>
            //     <a class="btn waves-effect waves-light red" target="_blank" href="https://www.google.com.pe/search?q=a+_blank&oq=a+_blank&aqs=chrome..69i57.5960j0j7&sourceid=chrome&ie=UTF-8">demo</a>            </div>
//             <div class="card-reveal">
//               <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
//               <p>Here is some more information about this product that is only revealed once clicked on.</p>
//             </div>
//           </div>