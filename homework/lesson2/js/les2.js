"use strict";

// Домашнее задание.
// 3. Задача на цикл while.
let tar = 30;
let sr = 6;
while (tar > 0 && sr > 0 ) {
  tar -= 1;
  sr -= 0.5;
  console.log(sr, tar);
}

// 4. Math.random
let userNum = 6;
let random = Math.floor(Math.random() * 10);
console.log(random);
if (userNum > random) {
  console.log("загаданное число больше")
} else if (userNum < random) {
  console.log("загаданное число меньше")
} else if ( userNum === random) {
  console.log("Вы угадали")
} else if ( userNum === 0) {
  console.log("выход из программы")
}

// 1. Задача на if.
let count = 50;
if (count <= 100 && count >= 90) {
  console.log ("Отлично");
} else if (count <= 89 && count >= 60) {
  console.log ("Хорошо");
} else if (count <= 59 && count >= 40) {
  console.log ("Удовлетворительно");
} else if (count <= 39 && count >= 0) {
  console.log ("Попробуйте еще раз");
}

// 2. Задача на switch.
let first = 12, second = 4, oper = "+" ;
switch (oper) {
  case "+":
  console.log (first + second)
  break;
  case "-":
  console.log (first - second)
  break;
  case "*":
  console.log (first * second)
  break;
  case "/":
  console.log (first / second)
  break;
}

// 5.  Задача на Math.random() и if.
let rand = Math.floor(Math.random(10) * 500);
if (rand >= 25 && rand <= 200) {
console.log("Число " + rand + " содержится в интервале (25;200)");
} else {
  console.log("Число " + rand + " не содержится в интервале (25;200)");
}
