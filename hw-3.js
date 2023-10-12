// Задание 1
let password = 'пароль';
let input = prompt('Введите пароль');
(password === input) ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

// Задание 2

let c = Number(prompt("Введите число"));
(c>0 && c<=10) ? alert("Верно") : alert("Неверно");

// Задание 3
let d = prompt('Введите 1-е число');
let e = prompt('Введите 2-е число');
(d>100 || e>100) ? alert('Верно') : alert('Неверно');

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12:
        alert('Зима')
        break;
    case 1:
        alert('Зима')
        break;
    case 2:
        alert('Зима')
        break;
    case 3:
        alert('Весна')
        break;
    case 4:
        alert('Весна')
        break;
    case 5:
        alert('Весна')
        break;
    case 6:
        alert('Лето')
        break;
    case 7:
        alert('Лето')
        break;
    case 8:
        alert('Лето')
        break;
    case 9:
        alert('Осень')
        break;
    case 10:
        alert('Осень')
        break;
    case 11:
        alert('Осень')
        break;

    default:
        alert("Такой месяц не существует!!!")
        break;
}
