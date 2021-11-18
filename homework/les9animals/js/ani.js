"use  strict";
let animals = [
     {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
     },
     {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
     },
     {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "additional_info": {"vaccinations": false, "passport": true}
     },
     {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
     }
  ];
  /* Вывести в html информацию о животных.
  В html вместо значений true / false выводить: Есть / Нет*/
let container = document.createElement('div');
container.classList.add('container');
function infoCard(arr) {
  for (let obj of arr) {
  let card = document.createElement('div');
  card.innerHTML = `
<p>${obj.name}</p>
<p>${obj.age}</p>
<p>${obj.color}</p>
  `
  /*if (obj.additional_info.vaccinations === 'true')
    card.innerText = "Прививка есть";
   else (obj.additional_info.vaccinations === 'false')
    card.innerText = "Прививки нет"; */
  container.append(card);
}
}
document.body.append(container);
infoCard(animals);
