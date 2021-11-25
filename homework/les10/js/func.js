"use strict";
/* Написать функцию generateField(n) по генерации поля размером n x n.
Значение n не может быть меньше 3. Для 3х ячеек поля (для выбора ячейки
использовать random) добавить атрибут prise. Значение атрибута prise -
 значение из объекта prises.*/

  let prises = {
     headphones: "Наушники",
     book: "Книга",
     postcard: "Открытка"
  };
function generateField(n){
  if (n<3) return;
  let a = n*n;
  let q = Math.floor(Math.random()*a);
  let w = Math.floor(Math.random()*a);
  let e = Math.floor(Math.random()*a);
  let arr = [q,w,e];
  let table = document.createElement('table');
  table.classList.add('table');
  let j = 0;
  for (let i=0; i<n; i++){
   let tr = document.createElement('tr');
   for (let i=0; i<n; i++) {
     let td = document.createElement('td');
     td.id = j;
     if (arr.includes(j)) {
       td.setAttribute('data-prise','true');
     }
     j++;
  /*   for (let key of arr) {
       if ( j = key) td.innerText = 'Prise';
      else {td.innerText = "Пусто"};
    } */
       tr.append(td);
   }
      table.append(tr);
 }
  document.body.append(table);
  console.log(arr);
}
generateField(4);
// console.log(generateField(3));
