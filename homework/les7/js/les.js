"use strict";

let goods = {
     piano: {
        title: "Пианино",
        price: 3000,
        count: 25
     },
     guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
     },
     drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
     },
     flute: {
        title: "Флейта",
        price: 900,
        count: 50 },
     harp: {
        title: "Арфа",
        price: 3400,
        count: 5
     }
  };
// Домашняя работа
/*1. Написать функцию, которая принимает на вход объект obj
(например, goods), число from и число to. Если значение
from и to не числа, а obj не объект, функция прерывает
свою работу и возвращает false. Если данные валидны,
функция формирует и возвращает новый ОБЪЕКТ с объектами,
значения свойств price которых лежат в диапазоне от значения
from до значения to, не включая to. */
  let instrument = {};
function newObj(obj, from, to) {
if (typeof obj !== 'object' || typeof from !== "number" || typeof to !== "number")/* || obj === null)*/ return false;
  instrument = obj;
  for (let objc in instrument) {
   if (objc.price >= from || objc.price < to) instrument[title] = obj[objc];
 }
}
console.log(newObj(goods, 2000, 3000));

/* 2.Написать функцию, которая принимает на вход объект obj
(например, goods), название (title) и количество (countToCart).
Если значение title не строка, obj не объект, а count не число,
функция прерывает свою работу и возвращает false. Функция должна
найти товар с указанным названием (title): если количество позволяет,
 то уменьшить значение свойства count в переданном объекте на countToCart
  вернуть true, если не позволяет, то вывести информацию об этом в
  консоль и вернуть false. */
function buy(obj, title, countToCart) {
if (typeof obj !== 'object' || typeof title !== "string" || typeof countToCart !== "number") return false;
for (let some in obj) {
  some.title === title;
  if(countToCart <= some.count) {some.count - countToCart} return true;
  return false;
}
}
console.log(buy(goods, "Арфа", 6));
