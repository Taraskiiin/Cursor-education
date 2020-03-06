getRandomColore = () => {
    const randomColor = [];
    for (let i = 0; i < 3; i++) {
        randomColor.push(Math.floor(Math.random() * (255)));
    }
    return randomColor;
}
const color = `rgb(${getRandomColore()})`;
function generateBlocks() {
    const blocks = [];
    const container = document.getElementById("container__wrapper");
    for (let i = 0; i < 25; i++) {
        blocks.push(document.createElement('div'));
        container.appendChild(blocks[i]);
        blocks[i].style.backgroundColor = `rgb(${getRandomColore()})`;
    }
    return blocks;
}
//-----Advanced------
const getAnotherColor = (arr) => {
    setInterval(() => 
    arr.forEach(el => {
        el.style.backgroundColor = `rgb(${getRandomColore()})`;
    }), 1000)
}
getAnotherColor(generateBlocks());
