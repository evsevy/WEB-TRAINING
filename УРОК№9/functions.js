function showMessage() {
    let mySon = 'GERMAN'; // Локальная переменная
    console.log('My dear baby ' + mySon)   // Функциональное выражение
}

showMessage();
showMessage();
showMessage();

// Cтандартная функция:
let m;
function showMessage()  // инструкция и имя функции, без параметров
{						// тело функции
    m ='Warning!'
	console.log(m);
}
showMessage();
showMessage();
showMessage();
	
// Стрелочная функция:
let Message = (text, name) => text + ',' + name + '!';
console.log(Message('Hi', 'EVGENY'));

