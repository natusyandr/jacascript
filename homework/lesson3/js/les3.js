"use strict";


// Задание номер 1.
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
 ];
let summ = 0;
  for (let first of nums) {
   for (let twice of first)
     summ = summ + twice + 10;
   }
let zn = (summ / (nums.length + 1));
console.log(zn);

// Задание номер 2.
 let arr =[];
let rand = Math.floor(Math.random(5) * 300);
for (let i = 0; i < 7; i++) {
  arr[i]= rand;
}
console.log(arr);

// Задание номер 3.
let qwe = [1, 2, -3, -4, -5, 6, 7];
let zxc = [];
for (let asd of qwe) {
  if (asd < 0) {
    zxc.push(asd);
  }
}
console.log(zxc);

// Задание номер 4.
let log = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userLog = prompt("Введите логин");
if (userLog === "Xodahe") {
  console.log("Успешно");
} else if (userLog === "Gixath") {
  console.log("Успешно");
} else if (userLog === "Qexeme") {
  console.log("Успешно");
} else if (userLog === "Bolyky") {
  console.log("Успешно");
} else if (userLog === "Fifiwu") {
  console.log("Успешно");
} else if (userLog !== "Fifiwu" || userLog !== "Bolyky" || userLog !== "Qexeme"|| userLog !== "Gixath"|| userLog !== "Xodahe") {
  userLog = prompt("Введите логин");
}
