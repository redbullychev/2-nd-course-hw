// Задание 1
let i = 0;
while (i<2) {
    console.log("Привет");
    i++;
}

// Задание 2
let number = 1;
while (number<6) {
    console.log(number);
    number++;
}

// Задание 3
for (let index = 7; index < 23; index++) {
    console.log(index);
}

// Задание 4
const obj = {
        200: "Коля",
        300: "Вася",
        400: "Петя"
}
for (let salary in obj){
    if (salary == 200) {
        console.log(`${obj[salary]} - зарплата ${salary} долларов.`);
        break;
    }
}

// Задание 5
let num = 0;
let n = 1000;
while (n>50) {
    n /=2;
    num++;
}
console.log(`Результатом будет число ${n}, полученное за ${num} итераций.`);

// Задание 6
let fr;
do {
    fr = Number(prompt("Введите число первой пятницы (от 1 до 7)"));
} while (fr>7);

for (let i = fr; i <= 31; i+=7) {
    console.log(`Сегодня пятница ${i}-е число, подготовьте отчет.`)
}
