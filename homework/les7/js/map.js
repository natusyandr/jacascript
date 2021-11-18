"use strict";
/* Создать Map
Добавить в Map несколько пар, где ключ - логин пользователя,
значение - название города, в котором живет пользователь
Написать функцию, которая принимает на вход Map и название
 города. Функция должна создать и вернуть массив логинов,
 которые соответствуют переданному городу */
let igor = {
  name: "Игорь",
  local: "Москва",
  age: 32,
}
let yuriy = {
  name: "Юрий",
  local: "Сочи",
  age: 31,
}
let ivan = {
  name: "Иван",
  local: "Ростов",
  age: 26,
}
let darya = {
  name: "Дарья",
  local: "Москва",
  age: 25,
}
let alina = {
  name: "Алина",
  local: "Оренбург",
  age: 26,
}
let userInfo = new Map();
userInfo.set(igor, "Москва").set(yuriy, "Сочи").set(ivan, "Ростов").set(darya, "Москва").set(alina, "Оренбург");
console.log(userInfo);

/* Написать функцию, которая принимает на вход Map и название
 города. Функция должна создать и вернуть массив логинов,
 которые соответствуют переданному городу */
 function search(map, local) {
   let localInfo =[];
   if (local === userInfo.local) {localInfo.push(userInfo.name) } return localInfo;
   return;
   console.log(localInfo);
 }
console.log(search(userInfo, "Сочи"));
