// ПЕРЕМЕННЫЕ
// Существуют ИМЕНОВАННЫЕ и УСЛОВНЫЕ:
let myName = 'Evgeny' / именованная
let a = 1 / условная
// КОНСТАНТНЫЕ mutable (ОДНОТИПНЫЕ)и МНОГОЗНАЧНЫЕ immutable (МНОГОТИПНЫЕ)
Способы наименования переменных:
camelCase, PascalCase, UPPER_CASE
const MY_NAME // заранее известная
const b;
b = 'name';
let d; 
d = 'name';
d = 0;
// 6 основных типов: number, string ,boolean , null, symbol, undefined

/* Число
let n = 123;
n = 12.345;
Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

Существует множество операций для чисел, например, умножение *, деление /, сложение +, вычитание - и так далее.

Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: Infinity, -Infinity и NaN.

Infinity представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа.

Мы можем получить его в результате деления на ноль: */

alert(1 / 0); // Infinity
//Или задать его явно:

alert(Infinity); // Infinity
//NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:

alert("не число" / 2); // NaN, такое деление является ошибкой
//Значение NaN «прилипчиво». Любая математическая операция с NaN возвращает NaN:

alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("не число" / 2 - 1); // NaN
//Если где-то в математическом выражении есть NaN, то оно распространяется на весь результат (есть только одно исключение: NaN ** 0 равно 1).

let a, b, c;
a = 1;
b = 2;
c = 3;
alert(a + b + c);

let j;

j = 134;
alert(j);

j = 254;
alert(j);

let d = 4 / 2;
alert(d);
// ВОЗВЕДЕНИЕ В СТЕПЕНЬ
let z = 10;
let f = 3;
alert(z ** f);

/* let str = "abc";
alert(str); */

let str = "xxx";
let txt = `aaa + ${str} + bbb`;
// const PI = 3.14;

let s = -"5" + -"2";
alert(s);

alert(Number("2") + Number("3"));

alert(+"2s");

let num1 = 1;
let num2 = 2;
// преобразование типа
alert(String(num1) + String(num2));

//Строка
//Строка (string) в JavaScript должна быть заключена в кавычки.
myName = "EVGENY";

alert(myName);

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
// В JavaScript существует три типа кавычек.

/* Двойные кавычки: "Привет".
Одинарные кавычки: 'Привет'.
Обратные кавычки: `Привет`.
Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.

Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например: */

let name = "Иван";

// Вставим переменную
alert(`Привет, ${name}!`); // Привет, Иван!

// Вставим выражение
alert(`результат: ${1 + 2}`); // результат: 3
/* Выражение внутри ${…} вычисляется, и его результат становится частью строки. Мы можем положить туда всё, что угодно: переменную name, или выражение 1 + 2, или что-то более сложное.

Обратите внимание, что это можно делать только в обратных кавычках. Другие кавычки не имеют такой функциональности встраивания!

alert( "результат: ${1 + 2}" ); // результат: ${1 + 2} 

/* Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).

Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».

Например: */

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
Булевые значения также могут быть результатом сравнений:

    let isGreater = 4 > 1;

alert(isGreater); // true 

let isGreater = 4 > 1;
alert(isGreater);

// свойства обьекта в переменной
const myPortfolio = {
    name: "Evgeny",
    age: 18,
    skills: true
};

console.log(myPortfolio);
console.log(myPortfolio.name);

let name = 'EVGENY'
alert(`hello ${name}`);
 
