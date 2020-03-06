let startValue = Number(prompt(`Веддіть будь ласка стартове число N, для запуску алгоритму!`,10)); 
        while (!startValue){
            startValue = Number(prompt(`Oppps!I need only numbers, enter N for start plz`,10));
        }
let finishValue = Number(prompt(`Веддіть будь ласка фінальне число M, для запуску алгоритму! `,100)); 
        while (!finishValue){
           finishValue = Number(prompt(`Oppps!I need only numbers, enter M for end my work`,100));
        }
if (startValue <= finishValue) { 
    const oddmod = confirm("А давай я пропущу всі парні числа?");
    let sumodd = null;
    const n = startValue;
    const m = finishValue;
    if (oddmod) {
        if (startValue % 2 === 0){
            startValue = startValue + 1;
        }
        if (finishValue % 2 === 0){
            finishValue = finishValue - 1;
        }
        for (let start = startValue; start <= finishValue; start += 2){
            sumodd += start;
        }
    }
    else {
        for (let start = startValue; start <= finishValue; start++){
            sumodd += start;
        };
    };
    document.write ("Підрахунок відбувався з такого значення N : " + n + "<br>");
    document.write ("Підрахунок відбувся до такого значення М : " + m + "<br>" );
    document.write (sumodd + " - це наш розрахуночок ^_^");
}
else {
    alert ('і як мені це рахувати ? ти ку-ку ?!');
};
 