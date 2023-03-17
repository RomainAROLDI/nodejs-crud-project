import {TeamService} from './team.service.js';
import {Team} from './team.class.js';

const team = document.querySelector('#team');
const logo = document.querySelector('#logo');
const foundation = document.querySelector('#foundation');
const stadium = document.querySelector('#stadium');
const id = window.location.hash.substring(1);

const T = new TeamService();
const myTeam = T.get(id);
myTeam.then((elt) => {
    team.value = elt.name;
    logo.value = elt.logo;
    foundation.value = elt.foundation;
    stadium.value = elt.stadium;

    const update = document.querySelector('#update');
    update.addEventListener('click', () => {
        const tmp = new Team(elt._id, team.value, logo.value, foundation.value, stadium.value);
        T.update(tmp);
    });
});

