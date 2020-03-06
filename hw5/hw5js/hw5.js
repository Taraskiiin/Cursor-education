//Task 1 
/*Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел.
 В функции есть параметры: length - длина массива,
 min – минимальное значение целого числа, max – максимальное значение целого числа.
 Пример: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/
 const length = Number(prompt(`Введіть будь ласка велечину масиву`, 5));
 const min = Number(prompt(`іііі найменшим елементом буде ...`, 1));
 const max = Number(prompt(`а найбільшим елементом буде ...?`, 9))
 getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randomArray;
}
const task1Result = getRandomArray(length, min, max);
console.log(task1Result);
//НАШ ФІЛЬТР НАТУРАЛЬНИХ ГРУ... ой
function getNaturalNumbers(numbers) {
    return numbers.filter(natural => natural/Math.trunc(natural) === 1);
}
//Task 2
/*Создайте функцию getModa(...numbers) – которая вычисляет моду всех 
переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 */
const task2Result = getModa(...task1Result);
function getModa(...numbers) {
    numbers = getNaturalNumbers(numbers);
    const modeMap = {};
    numbers.forEach(current => {
        const count = numbers.filter(n => n === current).length
        modeMap[current] = count;
    });
    let max = 0;
    let mode = 0;
    Object.keys(modeMap).forEach(key => {
      if(max < modeMap[key]) {
        max = modeMap[key]
       mode = key
      }
    });    
    return mode;
};
console.log(task2Result); //я хз як це було зробити - тут Юра все показував напальцях
//Task 3
/*Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех
переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */
const task3Result = getAverage(...task1Result);
function getAverage(...numbers) {
    numbers = getNaturalNumbers(numbers);
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
};
console.log(task3Result);
//Task 4
/*Создайте функцию getMedian(...numbers) – 
которая считает медиану всех переданных в неё аргументов.
 НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
Пример: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Пример: getMedian(1, 2, 3, 4) –> 2.5 Пример: getMedian(1, 2, 3, 4, 5) –> 3 */
const task4Result = getMedian(...task1Result);
function getMedian(...numbers) {
    numbers = getNaturalNumbers(numbers);
    let median;
    numbers.sort();
    if (numbers.length % 2 === 1) {
        median = numbers[Math.floor(numbers.length / 2)];
    }
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2] + (numbers[(numbers.length / 2) + 1])) / 2;
    }
    return median;
}
console.log(task4Result);
//Task 5
/*Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа
 переданные как аргументы функции
Пример: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */
const task5Result = filterEvenNumbers(...task1Result);
function filterEvenNumbers(...numbers) {
    return evenNumbers = numbers.filter(evenNumber => evenNumber % 2 === 1);
}
console.log(task5Result);
//Task 6
/*Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел
больших 0
Пример: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */
const task6Result = countPositiveNumbers(...task1Result);
function countPositiveNumbers(...numbers) {
    return countPositive = (numbers.filter(positive => positive > 0)).length;
}
console.log(task6Result);
//Task 7
/*Создайте функцию getDividedByFive(...numbers) – которая отфильтрует
все элементы в массиве и оставит только те, которые делятся нацело на 5
Пример: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
 -> [55, 55] */
const task7Result = getDividedByFive(...task1Result);
function getDividedByFive(...numbers) {
    return dividedByFive = numbers.filter(byFive => byFive % 5 === 0);
}
console.log(task7Result);
//Task 9
/*Создайте функцию divideByThree(word),
которая разбивает каждое слово на условные слоги по 3 буквы.
Если букв меньше трёх – не разбиваем. Пробелы всегда удаляются.
Строка приводится к нижнему регистру. Пример: divideByThree("Commander) ->
["com", "man", "der"] Пример: divideByThree("live") -> ["liv", "e"] */
const enterTask9string = (prompt('Веддіть фразу!')).toLowerCase();
const task9result = divideByThree(enterTask9string);
function divideByThree(word) {
    let strTask9 = [];
    const size = 3;
    for (i = 0; i < word.length; i++) {
        strTask9.push(word[i]);
        strTask9 = strTask9.filter(s => s !== ' '); 
    }
    for (i = 0; i < strTask9.length; i++){
        strTask9[i] = (strTask9.slice((i * size), ((i * size) + size), (((i * size) + size) + size))).join('');
    }
    strTask9.length = Math.ceil(strTask9.length/size);
    return strTask9;
}
console.log(task9result);
document.write(`Наш маСиФффФ4ик: ${task1Result} ^-^ \<br>
Мода,яку написав не я - бо особисто я взагалі як це зробити норм: ${task2Result} \<br>
Середнє арифметичне аргументів масиву: ${task3Result} \<br>
Медіана нашого масиву: ${task4Result} \<br>
Я тут подумав що парні елементи нам не потрібні: ${task5Result} \<br>
Ми тут знайшли кількість елементів більших 0 - тому ось: ${task6Result} \<br>
Елементи, які націло діляться на 5: ${task7Result} \<br>
9-та вправа: ${task9result}`);