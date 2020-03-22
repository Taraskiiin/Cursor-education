async function getInformationAboutPerson() {
    try {
        let result = await fetch("https://swapi.co/api/films/2/");
        let data = await result.json();
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
async function getInformationAboutPlanet() {
    try {
        let result = await fetch("https://swapi.co/api/planets");
        let data = await result.json();
        return data.plane;
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
const show = () => {
    getInformationAboutPerson().than(renderCharacters());
}
const hide = () => {
    document.querySelector(".people__block").innerHTML = "";
}
const getPplBtn = () => {
    isVisible ? hide() : show();
    isVisible = !isVisible;
}
