console.log ("-------------------------- HW #1 -----------------------------------")
const smallSexToyPrice =  15.678;
const bigSexToyPrice = 90.2345;
const veryBigBlackSexToyPrice =  123.965;
 console.log( smallSexToyPrice + ' ' + bigSexToyPrice + " " + veryBigBlackSexToyPrice);
 const maxValue = (Math.max(smallSexToyPrice, bigSexToyPrice ,veryBigBlackSexToyPrice));
 console.log (maxValue + " Используя встроенный объект Math – выведите максимальное число");
 const minValue = (Math.min(smallSexToyPrice, bigSexToyPrice ,veryBigBlackSexToyPrice));
 console.log (minValue + " Используя встроенный объект Math – выведите минимальное число");
 const sausagesDisco = smallSexToyPrice + bigSexToyPrice + veryBigBlackSexToyPrice; 
 console.log (sausagesDisco + " Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму ");
 const naturalValuesofSum = (Math.floor(sausagesDisco));
 console.log (naturalValuesofSum + " Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить копейки в наших товарах) и выведите это значение. Округление использовать в МЕНЬШУЮ сторону.");
 const nearHundredValues = ((Math.round(sausagesDisco / 100) * 100));
 console.log (nearHundredValues + " Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300");
 const valuesWithZeroAfterDivisionOnTwo = ((Math.floor(sausagesDisco) % 2 === 0));
 console.log (valuesWithZeroAfterDivisionOnTwo + " Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?");
 const magicValue = 500;
 const remainderFrom500 = (magicValue - sausagesDisco);
 console.log (remainderFrom500 + " Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.");
 const averageValueWith2ValuesAfterPoint = ((sausagesDisco / 3).toFixed(2));
 console.log (averageValueWith2ValuesAfterPoint +" Выведите среднее значение цен, округленное до второго знака после запятой");
/*Создайте переменную, в которой сохраним случайную скидку (используйте функцию Math.random).
Сделайте клиенту случайную скидку и выведите сумму к оплате округленную до 2 знака после запятой.
Выведите упущенную выгоду, если клиент заплатил со скидкой, если себестоиомсть товаров ровно в два раза ниже их цены?
(Пример: цена была 260.66, скидка составила 10%, клиент заплатил на 26 меньше, себестоимость = 260 / 2 -> 130. Упущенная выгода 130 - 26 -> 104) */
const discount = Math.random();
const discountInPerpercent = (Math.floor(discount * 100));
 console.log ("Вітаємо, ваша знижка " + discountInPerpercent + " %");
 const sausagesDiscoWithDiscound = (((sausagesDisco-(sausagesDisco * discount))).toFixed(2));
 console.log (sausagesDiscoWithDiscound + " перший, другий і третій товар зі знижкою "  + (discountInPerpercent) + " %, економія -> " + ((sausagesDisco - sausagesDiscoWithDiscound).toFixed(2)));
 console.log ("--------------------------- Advanced -----------------------------");
 console.log (`
  ${(maxValue)} Используя встроенный объект Math – выведите максимальное число \n
  ${(minValue)} Используя встроенный объект Math – выведите минимальное число \n 
  ${sausagesDisco} Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму \n
  ${(naturalValuesofSum)} Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить копейки в наших товарах) и выведите это значение. Округление использовать в МЕНЬШУЮ сторону.  \n
  ${(nearHundredValues)} Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300) \n
  ${(valuesWithZeroAfterDivisionOnTwo)} Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом? \n
  ${(remainderFrom500)} Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн. \n
  ${(averageValueWith2ValuesAfterPoint)} Выведите среднее значение цен, округленное до второго знака после запятой \n
  "Вітаємо, ваша знижка ${(discountInPerpercent)} % \n             
  ${(sausagesDiscoWithDiscound)} перший, другий і третій товар зі знижкою ${(discountInPerpercent)} %, економія -> ${((sausagesDisco - sausagesDiscoWithDiscound).toFixed(2))}`);
