const length = Number(prompt('введіть будь ласка довжину', 4));
const min = 5;
let interation = null;
function randomSymbol(min) {
  let numberGenerator = ((Date.now()).toString()).split([]).reverse();
  let last5 = [];
  for (let j = 0; j < min; j++) {
    last5.push(numberGenerator[j]);
  }
  return String.fromCharCode(Number(last5.join('')));
}
const generatePromise = () => {
	return new Promise(function (resolve) {
		return setTimeout(() => resolve(randomSymbol(min)), 50);
	  });
}
async function getRandomChinese(length){
  const randomChinese = [];
  for (let i = 0; i < length; i++) {
    randomChinese.push(await generatePromise());
  };
  console.log(randomChinese.join());
}
getRandomChinese(length);


