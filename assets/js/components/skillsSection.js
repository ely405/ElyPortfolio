'use strict';

const skillsSection = (element) => {
    const listContainer = $('<ul class="skills-icons valign-wrapper justify-center flex-wrap container scrollflow -pop"></ul>');

    element.map(el => {
        const { name, classIcon } = el;
        const listItem = $('<li class="valign-wrapper justify-center flex-column"></li>');
        const skillIcon = $(`<i class='${classIcon} m-1rm'></i>`);
        const skillName = $(`<p>${name}</p>`);
        listItem.append(skillIcon, skillName);
        listContainer.append(listItem);
    });
    return listContainer;
}

const skills = [
    {
        name: 'Javascript',
        classIcon: 'fab fa-js-square fa-5x',
    },{
        name: 'React js',
        classIcon: 'fab fa-react fa-5x',
    },{
				name: 'Redux',
				classIcon: 'icon-redux ico-5x',
		},{
        name: 'Jquery',
        classIcon: 'icon-jquery ico-5x',
    },{
        name: 'HTML 5',
        classIcon: 'fab fa-html5 fa-5x',
    },{
        name: 'CSS 3',
        classIcon: 'fab fa-css3-alt fa-5x',
    },{
        name: 'Sass',
        classIcon: 'fab fa-sass fa-5x',
    },{
        name: 'Bootstrap',
        classIcon: 'icon-bootstrap ico-5x',
    },,{
        name: 'Materialize',
        classIcon: 'icon-materialize ico-5x',
    },{
        name: 'Webpack',
        classIcon: 'icon-webpack ico-5x',
    },{
        name: 'Gulp',
        classIcon: 'fab fa-gulp fa-5x',
    },{
        name: 'Git',
        classIcon: 'fab fa-git fa-5x',
    },{
        name: 'Node Js',
        classIcon: 'fab fa-node-js fa-5x'
    },{
        name: 'Ajax',
        classIcon: 'icon-ajax ico-5x'
    },{
        name: 'Firebase',
        classIcon: 'icon-firebase ico-5x',
    }
];

$('#skills-section').append(skillsSection(skills));