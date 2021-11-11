"use strict";
// TODO: Задача 5.3
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
// some every filter map foreach
// Увеличить каждый элемент массива на 10
// foreach ((element, index, arr) => {})
numsArr.forEach(innerArr => innerArr.forEach( (num, ind, arr) => arr[ind] += 10 ));
console.log(numsArr);

// Создать массив, в который войдут положительные элементы numsArr
let newArr = numsArr.map( innerArr => innerArr.filter( num => num > 0));
console.log(newArr);

// Задачи на выходные:
// TODO: Задача 1. Создать функцию, которая принимает на вход число от 1(понедельник) до 7(воскресенье),
//  а возвращает день недели на русском языке
// 1 Понедельник
// 2 Вторник
// 3 Среда
// 4 Четверг
// 5 Пятница
// 6 Суббота
// 7 Воскресенье

function getDay(num) {
    if (num > 7 || num < 1) return;
    const DAYS_RU = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return DAYS_RU[num - 1];
}
console.log(getDay(4));

// TODO: Задача 2. Написать функцию, котора добавляет в массив значение, только, если его не существует
function addToArr(arr, value){
    if (!arr.includes(value)) arr.push(value);
}

let days = ["Понедельник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
addToArr(days, "Вторник");
addToArr(days, "Четверг");
console.log(days);

// TODO: Задача 3. Написать функцию, которая возвращает не более 3 случайных элементов из переданного в нее массива.
function getRandomElems(arr){
    if (arr.length < 4) return arr.slice(0); // возвращает копию массива

    arr.sort((elem1, elem2) => 0.5 - Math.random());
    return arr.slice(0, 3);
}

let randomElems = getRandomElems(days);
console.log(randomElems);


// TODO: Задача 4. Написать функцию, которая вернет самое длинное слово в предложении

function getLongestWord(text){
    let longest = "";
    let arrFromText = text.split(" ");
    for (let word of arrFromText){
        if (word.length > longest.length) longest = word;
    }
    return longest;
}

let text = "самое длинное слово в предложении";
console.log(getLongestWord(text));

// TODO: Задача 5. Создать массив из пересечений использовать методы filter + includes
let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];

let getCommonElems = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
};

console.log(getCommonElems(first, second));

// TODO: Задача 6. Проверить, есть ли в массиве temps температура больше 500, вывести информацию об этом в консоль.
let temps = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 56666],
];

if (temps.some(innerArr => innerArr.some( tempValue => tempValue > 500))) {
    console.log("Температура поднималась выше 500");
} else {
    console.log("Температура не поднималась выше 500");
}

// TODO: Задача 7. Написать функцию, которая принимает на вход строку и возвращает новую,
//  в которой все буквы строчные, а первая буква заглавная.

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let someStr = "вСЕ буквы СТроЧныЕ, а ПерВая БУКвА заГЛавНая.";
someStr = capitalizeFirstLetter(someStr);
console.log(someStr);
