let planetPage = 1;
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
    constructor(page) {
        this.page = page;
    }
    nextPage() {
        this.page++;
        if (this.onChange) {
            this.pageChanged();
        }
    }
    prevPage() {
        if (this.page > 1) {
            this.page--;
            this.pageChanged();
        }
    }
    pageChanged() {
        if (this.onChange) {
            return this.onChange(this.page);
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
        let response = await fetch(`https://swapi.co/api/planets/?page=${planetPage}`);
        let data = await response.json();
        return data.results;
    }
    catch {
        if (!res.ok) {
            throw new Error('Oopsy!' + personList.status)
        }
    }
}
console.log(getInformationAboutPlanet());
const renderPlanet = (planets) => {
    const container = document.querySelector(".slides__planets");
    planets.forEach(planets => {
        const planetsLi = document.createElement("div");
        planetsLi.innerHTML = `
        <p>${planets.name}<p>
        <p>${planets.rotation__period}<p>
        <p>${planets.orbital_diameter}<p>
        <p>${planets.climate}<p>
        <p>${planets.gravity}<p>
        <p>${planets.terrain}<p>
        <p>${planets.surface_water}<p>
        <p>${planets.population}<p>
        <p>${planets.created}<p>`;
        container.append(planetsLi);
    });
}
