let page = 1;
async function getInformationAboutPerson() {
    try {
        let response = await fetch("https://swapi.co/api/films/2/");
        let data = await response.json();
        const requests = data.characters.map(el => {
            return fetch(el).then(res => res.json());
        });
        return Promise.all(requests);
    }
    catch {
        if (!res.ok) {
            throw new Error('Oopsy!' + personList.status)
        }
    }
}
const renderCharacters = (characters) => {
    const container = document.querySelector(".people__block");
    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.innerHTML = `
        <h4>${character.name}</h4>
        <h5>${character.birth_year}</h5>
        <p>${character.gender}</p>`;
        container.append(characterDiv);
    });
}
let isVisible = true;
const hide = () => {
    document.querySelector(".people__block").innerHTML = "";
}
const getPplBtn = () => {
    isVisible ? hide() : getInformationAboutPerson().then(renderCharacters);
    isVisible = !isVisible;
}
class Paginator {
    page = 1;
    onChange = null;
    constructor(page = 1) {
        this.page = page;
    }
    nextPage() {
        page = this.page++
        this.pageChanged(page);
    }
    prevPage() {
        if (this.page > 1) {
            page = this.page--;
            this.pageChanged(page);
        }
    }
    pageChanged(page) {
        if (this.onChange) {
            return this.onChange(page);
        }
    }
}
const getNumberPage = new Paginator();
getNumberPage.onChange = (page) => {
  document.querySelector(".slides__planets").innerHTML = "";
  getInformationAboutPlanet(page).then(renderPlanet);
}
const btnPrev = () =>{
    getNumberPage.prevPage();
}
const btnNext = () =>{
    getNumberPage.nextPage();
}
async function getInformationAboutPlanet() {
    try {
        let response = await fetch(`https://swapi.co/api/planets/?page=${page}`);
        let data = await response.json();
        return data.results;
    }
    catch {
        if (!res.ok) {
            throw new Error('Oopsy!' + personList.status)
        }
    }
}
const renderPlanet = (planets) => {
    const container = document.querySelector(".slides__planets");
    planets.forEach(planets => {
        const planetsLi = document.createElement("div");
        planetsLi.innerHTML = `
        <p>Name: ${planets.name}<p>
        <p>Rotation period: ${planets.rotation_period}<p>
        <p>Orbital period: ${planets.orbital_period}<p>
        <p>Diameter: ${planets.diameter}<p>
        <p>Climate: ${planets.climate}<p>
        <p>Gravity: ${planets.gravity}<p>
        <p>Terrain: ${planets.terrain}<p>
        <p>Surface water:  ${planets.surface_water}<p>
        <p>Population: ${planets.population}<p>`;
        container.append(planetsLi);
    });
}
getInformationAboutPlanet().then(renderPlanet)
