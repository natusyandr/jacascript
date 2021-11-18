"use strict";
//Массивы для проверки:
 let articles = [
     {
         id: 1,
         title: "JS",
         text: "About JS",
         author: "Max"
     },
     {
         id: 2,
         title: "PHP",
         text: "About PHP",
         author: "Ivan"
     },
     {
         id: 3,
         title: "DataBase",
         text: "About DB",
         author: "Paul"
     },
     {
         id: 4,
         title: "HTML",
         text: "About HTML",
         author: "Paul"
     }
 ];

 let goods = [
     {
         title: "Piano",
         price: 3000,
         count: 25
     },
     {
         title: "Guitar",
         price: 1200,
         count: 40
     },
     {
         title: "Drum",
         price: 2700,
         count: 12
     },
     {
         title: "Flute",
         price: 900,
         count: 50
     },
     {
         title: "Harp",
         price: 3400,
         count: 5
     }
 ];
 /*Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
  Функция не должна быть привязана к конкретным названиям свойств. Заголовки ячеек - названия
  свойств в верхнем регистре. Пример того, что должно получиться на изображении tables.png
  Примеры вызова функции:
 generateTable(articles); - генерация таблицы со статьями
 generateTable(goods); - генерация таблицы с товарами */

 function generateTable(arr){
     let table = document.createElement('table');
     let tr = document.createElement('tr');
     let th = document.createElement('th');
     let td = document.createElement('tb');
     table.append(tr, th, td);
     for (let key in arr[0]) {
       let trRow = tr.insertRow();
       let cell = trRow.insertCell();
       cell.innerText = key.toUpperCase;
         // в переменной key - названия свойств
         // первый ряд таблицы (заголовки)
     }
     // генерация рядов (один объект - один ряд)
     for (let obj of arr) {
       let row = tr.insertRow();
         // создание ряда
         for (let key in obj) {
           let tdKey = td.insertCell();
           tdKey.ineerText = key;
             // создание ячейки
             // текст ячейки: obj[key]
         }
     }
     document.body.append(table);
     // добавить таблицу в html
 }


generateTable(articles);
generateTable(goods);
