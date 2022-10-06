// объявление функции
function add(a, b) {
    return a + b;
}

// ввод чисел пользователем
let number1 = parseFloat(prompt("Введите первое число: "));
let number2 = parseFloat(prompt("Введите второе число: "));

//  вызов функции
let result = add(number1,number2);

// вывод результата на экран
console.log("Сумма введенных чисел: " + result);

function printText(name, age) 
{ console.log(" Hi! My name is "+name+", age: "+age")}
