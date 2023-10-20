const seasons = () => {
    let numberMonth = Number(prompt("Введите номер месяца"));
    if (numberMonth === 12 || (numberMonth < 3 && numberMonth > 0)) {
        console.log("Зима");
    } else if (numberMonth > 2 && numberMonth < 6) {
        console.log("Весна");
    } else if (numberMonth > 5 && numberMonth < 9) {
        console.log("Лето");
    } else if (numberMonth > 8 && numberMonth <12) {
        console.log("Осень"); 
    } else {
        console.log("Вы ввели не существующий месяц")
    }
}
