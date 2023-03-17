import {TeamService} from './team.service.js';
import {Team} from './team.class.js';

const team = document.querySelector('#team');
const logo = document.querySelector('#logo');
const foundation = document.querySelector('#foundation');
const stadium = document.querySelector('#stadium');
const id = window.location.hash.substring(1);
const title = document.querySelector('h1#title');
const img = document.querySelector('img#header-logo');

const T = new TeamService();
const myTeam = T.get(id);
myTeam.then((elt) => {
    title.textContent = elt.name;
    img.src = elt.logo;
    img.classList.replace('d-none', 'd-block');
    team.value = elt.name;
    stadium.value = elt.stadium;
    foundation.value = elt.foundation;
    logo.value = elt.logo;

    const update = document.querySelector('#update');
    update.addEventListener('click', () => {
        const tmp = new Team(elt._id, team.value, stadium.value, foundation.value, logo.value);
        T.update(tmp);
    });
});

