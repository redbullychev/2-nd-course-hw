function words() {
    let arrWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrWords = arrWords.sort(() => Math.random() - 0.5);
    alert(arrWords);
    let answerFirst = prompt('Чему равняется первый элемент массива?');
    let answerSecond = prompt('Чему равняется последний элемент массива?');
    if (answerFirst.toLowerCase() === arrWords[0].toLowerCase() && answerSecond.toLowerCase() === arrWords[arrWords.length - 1].toLowerCase()) {
        alert('Поздравляю, Вы угадали!');
    } else if (answerFirst.toLowerCase() === arrWords[0].toLowerCase() || answerSecond.toLowerCase() === arrWords[arrWords.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Не верно!');
    }
}
