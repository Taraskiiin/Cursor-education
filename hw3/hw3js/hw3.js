// TASK 1
function getMaxDigit() {
    const valueTask1 = prompt(`введіть будь ласка ну дуже велике число ? `);
    let maxValue = 0;
    for (let t = 0; t <= valueTask1.length; t++) {
        const currentValue = Number(valueTask1.charAt(t));
        if (maxValue < currentValue) {
            maxValue = currentValue;
        }
    }
    if (!Number(maxValue)) {
        throw new Error('Ви зробили фатальну помилку:с');
    }
    return maxValue;
};
//TASK 2
function exponentiationToUser() {
    let valueTask2 = Number(prompt(`Що мені підняти до степені ? `));
    const power = Number(prompt(`До якої степені мені це підняти?`));
    let task2result;
    const safe = valueTask2;
    if (isNaN(valueTask2)) {
        throw new Error('Ви зробили фатальну помилку:с');
    }
    else if (power === 0) {
        task2result = 1;
    }
    else if (valueTask2 === 0) {
        task2result = 0;
    }
    else if (isNaN(power)) {
        throw new Error('Ви зробили фатальну помилку:с');
    }
    else if (power < 0) {
        for (let j = -1; j !== power; j--) {
            valueTask2 = valueTask2 * safe;
        }
        task2result = 1 / valueTask2;
    }
    else {
        for (let i = 1; i !== power; i++) {
            valueTask2 = valueTask2 * safe;
        }
        task2result = valueTask2;
    }
    return task2result;
};
function nameWithUppercaseStart() {
    const name = prompt(`Введіть ваше ім*я `);
    let str = name.toString();
    const lengthTask3 = name.length;
    const firstSymbol = str.charAt(0);
    let nextStep = 1;
    let task3result = firstSymbol.toUpperCase();
    for (let n = 1; n <= lengthTask3; n++) {
        if (Number(str.charAt(nextStep))) {
            task3result = 'looool number in name, ARE U ROBOT TOO?'
            break
        };
        task3result = task3result + ((str.charAt(nextStep)).toLowerCase());
        nextStep++;
    }
    return task3result;
};
function salary() {
    const pers = 19.5;
    let task4result = parseInt(prompt(`Веддіть показники вашої ставки будь ласка `, 1000));
    if (Number(task4result)) {
        task4result = task4result - (task4result * (pers / 100));
    }
    else {
        throw new Error('Ви зробили фатальну помилку:с');
    }
    return task4result;
};
function getRandomNumber() {
    const min = Number(prompt(`Введіть будь ласка мінімальне значення N`, 1));
    const max = Number(prompt(`Введіть будь ласка мінімальне значення M`, 10));
    let task5result = Math.floor(Math.random() * (max - min + 1) + min);
    return task5result;
};
function forSearchSymbol() {
    let stringTask6 = prompt('Веддіть фразу!');
    const searchSymbol = prompt('Яку буквуви шукаєте ?');
    let task6result = 0;
    let nextStep = 0;
    while (nextStep !== stringTask6.length) {
        if (searchSymbol === stringTask6.charAt(nextStep)) {
            task6result++;
        };
        nextStep++;
    };
    return task6result;
};
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 49: // (key 1)
            document.write('Task#1: Я Знайшов найбільше значення у цьому числі, і це : ' + getMaxDigit() + "<br>");
            break;
        case 50: // (key 2)
            document.write('Task#2: Наш розрахунок такий :' + exponentiationToUser() + "<br>");
            break;
        case 51: // (key 3)
            document.write('Task#3: Вас звати: ' + nameWithUppercaseStart());
            break;
        case 52: // (key 4)
            document.write('Task#4: Оплата ваших старань: ' + salary());
            break;
        case 53: // (key 5)
            document.write('Task#5: Ваше рандомне число : ' + getRandomNumber());
            break;
        case 54: // (key 6)
            document.write('Task#6: Ми знайшли цей символ ' + forSearchSymbol() + ' разів');
            break;
    };
});


