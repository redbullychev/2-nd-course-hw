// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10)  break;
    console.log(numbs[i]);
}

// Задание 2
console.log(numbs.indexOf(4));

// Задание 3
let numbs1 = [1, 3, 5, 10, 20];
numbs1 = numbs1.join(' ');
console.log(numbs1); // Через пробел 
numbs1 = [1, 3, 5, 10, 20];
numbs1 = numbs1.join(''); // Через пустую строку (слитно)
console.log(numbs1);

// Задание 4
const numbs2 = [];
for (let i = 0; i < 3; i++) {
	numbs2[i] = [];
	
	for (let j = 0; j < 3; j++) {
		numbs2[i].push(1);
	}
}
console.log(numbs2);

// Задание 5

const numbs3 = [1, 1, 1];
numbs3.push(2);
numbs3.push(2);
numbs3.push(2);
console.log(numbs3);

// Задание 6
const numbs4 = [9, 8, 7, 'a', 6, 5]; 
numbs4.sort();
numbs4.pop();
console.log(numbs4);

// Задание 7
const numbs5 = [9, 8, 7, 6, 5];
let search = numbs5.includes(Number(prompt('Введите число')));
if (search) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8 
let str = 'abcdef';
str = str.split('').reverse().join('');
console.log(str);

// Задание 9
 const numbs6 = [[1, 2, 3,],[4, 5, 6]];
let result = [].concat(...numbs6);
console.log(result);

// Задание 10
const numbs7 = [1, 2, 3, 4, 5, 8, 7];
for (let i = 0; i < numbs7.length; i++) {
        if ( i === numbs7.length - 1) {
            console.log(numbs7[i]); // Сделал вывод последнего элемента в конце, потому что следующего эллемента не существует и его можно принять за 0.
            break;
        }
        console.log(numbs7[i]+numbs7[i+1]);
}

// Задание 11
function funcSquare(...arrSquare) {
    let square = arrSquare.map(item => (item**2));
    return square;
}

console.log(funcSquare(6,3,8));

// Задание 12
const getLengthWords = source => source.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 13
function filterPositive(array) {
    let arr = array.filter(item => item < 0);
    return arr;
  }
  console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]





