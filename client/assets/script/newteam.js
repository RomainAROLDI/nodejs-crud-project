import {TeamService} from "./team.service.js";
import {Team} from "./team.class.js";

const btnNew = document.querySelector('#newteam');
const T = new TeamService();

btnNew.addEventListener('click', () => {
    const team = document.querySelector('#team');
    const stadium = document.querySelector('#stadium');
    const foundation = document.querySelector('#foundation');
    const logo = document.querySelector('#logo');

    const newTeam = new Team('', team.value, stadium.value, foundation.value, logo.value);

    const promise = T.add(newTeam);
    promise.then(() => {
        team.value = '';
        stadium.value = '';
        foundation.value = '';
        logo.value = '';
    });
});