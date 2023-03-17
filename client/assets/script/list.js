import { TeamService } from './team.service.js';

const tbody = document.querySelector('tbody#teams-list');
const Team = new TeamService();
Team.getAll(tbody);