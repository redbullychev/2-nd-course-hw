/*
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
*/

function words(params) {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);

    let question1 = prompt('Чему равняется первый эллемент массива?');
    let question2 = prompt('Чему равняется последний эллемент массива?');

    if (arr[0].toLowerCase() === question1.toLowerCase() && arr[arr.length-1].toLowerCase() === question2.toLowerCase()) {
      alert('Молодец,вы угадали, запомнили все слова!');
      return gameStop();
    }
    else if (arr[0].toLowerCase() === question1.toLowerCase() || question2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
      alert ('Вы были близки к победе!');
      return gameStop();
    }

    else {
      alert ('Вы не угадали!');
      return gameStop();
    }
  }

  function gameStop() {
    let a = confirm('Хочешь продолжить игру?');
    if (a === true) {
      return (words());
    }
    else {
      alert('Спасибо за внимание');
    }
  }
