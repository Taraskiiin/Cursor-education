function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const idGenerator = createIdGenerator();
const getJellyfish = () => {
    const container = document.querySelector(".return__result");
    container.innerHTML = "";
    const resDiv = document.createElement("div");
    resDiv.innerHTML = `
    <p>Отримано ${idGenerator.next().value} кілограмів гречки</p>`;
    container.append(resDiv);
}
const fontDefault = 24;
const max = 30;
const min = 24;
function* ChangeFS(fontSize){
    while(true){
        let size = yield fontSize;
        if (size === 'up'){
            fontSize += 3;
        }
        if (size === 'down'){
            fontSize -= 3;
        }
    }
}
const fontGenerator = ChangeFS(fontDefault);
const upFont = () => { 
    const result = fontGenerator.next('up').value;
    document.getElementById("text").style.fontSize = result + "px";
};
const downFont = () => { 
    const result = fontGenerator.next('down').value;
    document.getElementById("text").style.fontSize = result + "px";
};
