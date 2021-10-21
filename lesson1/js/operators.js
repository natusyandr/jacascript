"use strict";

/*
операнд1 оператор операнд2 - бинарный
оператор операнд 1 - унарный
*/
let numInStr = "12";
let num = +numInStr;

let width = "45px";
let doubledWidth = parseInt(width) * 2;// вытащит из строки только число
// до первого "не числа"
console.log(doubledWidth); // 90

let htmlFont ="2.5rem";
let miniFont = parseFloat(htmlFont) - 1;
console.log(miniFont); // 1.5

// конкатенация строк
let fontInfo = "Размер шрифта -" + miniFont;
console.log(fontInfo); // "Размер шрифта - 1.5"

// взятие остатка от деления %
let a = 9;
let b = 2;
let result = a % b;
// 4.5 4.5 -> 0.5 + 0.5 ->  1
a = 14;
b = 4;
result = a % b; // 2
// 3.5 3.5 3.5 3.5 -> 0.5 + 0.5 + 0.5 + 0.5 -> 2

// операторы присваивания
let n = 10;
n += 10 ; // n = n + 10;  20
n -= 10 ; // n = n - 10;  10
n *= 10 ; // n = n * 10;  100
n /= 10 ; // n = n / 10;  10
n %= 10 ; // n = n % 10;  0
console.log(n);

// операторы сравнения возвращают логический типы (boolean)
const MIN_LENGTH = 10;
const MAX_LENGTH = 30;
let str = 14;

console.log(MAX_LENGTH > str);  // 30 > 14 true
console.log(MIN_LENGTH > MAX_LENGTH);  // 10 > 30 false
console.log(str >= str);  // 14 >= 14 true

let firstPrice = "1200" ;
let secondPrice = 1200;
console.log(firstPrice == secondPrice); // true
console.log(firstPrice === secondPrice); // false

// домашняя работа
// 1. площадь параллелипипеда
let z = 5;
let x = 6;
let c = 7;
let zxc = 2 * (z*x + z*c + x*c);
console.log(zxc);

// 2. Сумма цифр двузначного числа
let p = 78;
let firstStep = p % 10; // 8
let secondStep = (p - firstStep) / 10;
console.log(firstStep + secondStep);

// 3. поменять значения двух переменных
let l = 7;
let u = 8;
l = l + u;
u = l - u;
l = l - u;
console.log(l , u);
