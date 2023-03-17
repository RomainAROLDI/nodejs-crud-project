import {Team} from "./team.class.js";

export class TeamService {
    constructor() {
    }

    /**
     * Récupère l'ensemble des données et les ajoutent dans le DOM
     * @param {Element} target - localisation dans le dom
     * @return {Array<Team>}
     */
    getAll(target) {
        const headers = new Headers();
        const url = '/teams';
        const options = {
            method: 'GET',
            headers: headers
        };

        return fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((response) => {
                response.forEach(elt => {
                    const team = document.createElement('tr');

                    const logo = document.createElement('td');
                    logo.innerHTML = "<img style='max-width: 40px; max-height: 40px' src='" + elt.logo + "' alt='Logo de " + elt.name + "'>";

                    const title = document.createElement('td');
                    title.innerHTML = elt.name;

                    const update = document.createElement('td');
                    const icon = document.createElement('i');
                    icon.classList.add('fas', 'fa-light', 'fa-circle-info');
                    const myLinkToDetails = document.createElement('a');
                    myLinkToDetails.setAttribute('href', './pages/details.html#' + elt._id);
                    myLinkToDetails.appendChild(icon);
                    update.appendChild(myLinkToDetails);
                    update.style.textAlign = 'center';

                    const tdDelete = document.createElement('td');
                    const btnDelete = document.createElement('button');
                    const icon2 = document.createElement('i');
                    icon2.classList.add('fas', 'fa-light', 'fa-trash')
                    btnDelete.classList.add('btn', 'btn-outline-danger');
                    tdDelete.style.textAlign = 'center';
                    tdDelete.appendChild(btnDelete);
                    btnDelete.appendChild(icon2);
                    btnDelete.addEventListener('click', () => {
                        //this.remove(elt._id);
                    });

                    team.appendChild(logo);
                    team.appendChild(title);
                    team.appendChild(update);
                    team.appendChild(tdDelete);

                    target.appendChild(team);
                });
                return response;
            })
            .catch(error => console.log(`Error : ${error}`));
    }
}
