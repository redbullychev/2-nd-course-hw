
// Задание 1
function min(a, b) {
 if (a <= b) {
    return a;
 } else  {
    return b;
 }
};
let num = min(Number(prompt("Введите 1-е число")), Number(prompt("Введите 2-е число")));
console.log(num);

// Задание 2
function even(a) {
    if (a%2 === 0) {
        return 'Число четное';
    } else {
        return 'Число не четное';
    }
};

let message = even(Number(prompt('Введите число')));
console.log(message);


// Задание 3.1
function square(a) {
    console.log(a*a);
};
square(Number(prompt('Введите число, которое хотите возвести в квадрат')));

// Задание 3.2
function square1(a) {
    return a*a;
};
let sq = square1(Number(prompt('Введите число, которое хотите возвести в квадрат')));
console.log(sq);

// Задание 4
function check() {
    let age = Number(prompt('Сколько Вам лет?'));
    if (age < 0) {
        alert('Вы ввели не верное число');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
};

check();

// Задание 5
function checkNan(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
};

let numCheckNaN = checkNan(prompt("Введите 1-е число"), prompt("Введите 2-е число"));
console.log(numCheckNaN);

// Задание 6
let coub = (a) => {
    if (isNaN(a)) {
        return 'Переданный параметр не является числом';
    } else {
        return `n в кубе равняется ${a ** 3}`;
    }
}

let numCoub = coub(prompt('Введите число, которое хотите возвести в куб'));
console.log(numCoub);

// Задание 7
function getArea() {
    let s = 3.14 * (this.radius ** 2);
    return s;
};
function getPerimeter() {
    let c = 2 * 3.14 * this.radius;
    return c;
};

const circle1 = {
    radius: '',
    area: getArea,
    perimeter: getPerimeter,
};

const circle2 = {
    radius: '',
    area: getArea,
    perimeter: getPerimeter,
};
circle1.radius = prompt('Введите радиус первого круга');
circle2.radius = prompt('Введите радиус второго круга');
console.log(`Площадь первого круга равна ${circle1.area()}`);
console.log(`Площадь второго круга равна ${circle2.area()}`);
console.log(`Длина окружности первого круга равна ${circle1.perimeter()}`);
console.log(`Длина окружности второго круга равна ${circle2.perimeter()}`);