// Задание 1
let str = prompt("Введите слово");
console.log(str.toUpperCase());

// Задание 2
function searchStart (array, str) {
        array.forEach(element => {
            if (element.toLowerCase().startsWith(str.toLowerCase())) {
                console.log(element);
            }
        });
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
function randomizer() {
    return Math.random() * 10;
}
console.log(randomizer());

// Задание 6
 function getRandomArrNumbers(num) {
    let arr = []
    for (let i = 0; i < num/2; i++) {
        arr[i] = Math.random() * num;
        
    }
    return arr;
 }
console.log(getRandomArrNumbers(20));

// Задание 7
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}
console.log(getRandomInt(1,5));

// Задание 8
let dateNow = new Date();
console.log(dateNow);

// Задание 9 
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
function dateRus(date) {
    let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] +
    " " + date.getFullYear() + " - это " + days[date.getDay()];
    let fullTime = "Время: " + date.toLocaleTimeString('ru-RU');
    console.log(fullDate);
    console.log(fullTime);
}

let date1 = new Date();
dateRus(date1);

