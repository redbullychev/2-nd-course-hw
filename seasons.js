const seasons = () => {
    let numberMonth = Number(prompt("Введите номер месяца"));
    if (numberMonth === 12 || (numberMonth < 3 && numberMonth > 0)) {
        alert("Зима");
    } else if (numberMonth > 2 && numberMonth < 6) {
        alert("Весна");
    } else if (numberMonth > 5 && numberMonth < 9) {
        alert("Лето");
    } else if (numberMonth > 8 && numberMonth <12) {
        alert("Осень"); 
    } else {
        alert("Вы ввели не существующий месяц")
    }
}
