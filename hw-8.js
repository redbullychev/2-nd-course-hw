// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort(function(a,b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
 }));

// Задание 2
function isPositive(el) {
    if (el > 0) {
        return true;
    } else {
        return false;
    }
    }
function isMale(el) {
    if (el.gender === 'male') {
        return true;
    } else {
        return false;
    }
    }
function filter(arr, ruleFunction) {
        const output = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
                output.push(arr[i]);
            }
            
        }
        return output;
    }
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3
let timerId = setInterval(() => console.log(Date()), 2000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задагние 4
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000 * 2);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));