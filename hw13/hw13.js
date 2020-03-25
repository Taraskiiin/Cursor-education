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
