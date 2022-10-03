// Функции с параметрами

let a = 22
b = 2
function calcSides(side1, side2) {
    side1 = a;
    side2 = b;
    alert(side1 * side2); 
}
calcSides();

function f1(x, y) {
console.log(x + y);
}
f1(4, 5);
f1 (5, 67);

// RETURN
function calc(a) {
  return a * a;
}
 
var x = calc(5);
alert(x);   // 25

function f1(x, y) {
return x + y;
} console.log(f1(6, 8) + f1(20 +10));

// IF ELSE

if(5<7) {
console.log("Истина");
}
else {
console.log("Ложь");
}

var prava = "получу";
  // если это истина
if(prava == "получу")
  {
document.write("Мы поедем в гости на машине");
}
// в противном случае ложь
  else
  {
document.write( "то пойдем в гости пешком");
}

// if (condition1) {
  //  блок кода, который должен быть выполнен, если условие1 истинно
} else if (condition2) {
  //  блок кода, который должен быть выполнен, если условие1 ложно, а условие2 истинно
} else {
  //  блок кода для выполняться, если условие1 ложно, а условие2 ложно
}

if(7<7) {
console.log("Истина");
}
else if(7==7) {
console.log("Истина");
}
else {
console.log("Ложь");
}
function check(a, b) {
  if(a > b) return a;
  else return b;
} 
alert(check(3, 5));   // 5

Есть также сокращенная форма записи условного оператора в Javascript и выглядит это следующим образом:

(9<5) ? console.log("Истина") : console.log("Ложь");

// ДЛЯ ТЕРНАРНЫХ ОПЕРАТОРОВ
alert(true ? 5 : 10);    // 5
alert(false ? 5 : 10);   // 10

// swith
switch (new Date().getDay()) {
  case 0:
    day = "Воскресенье";
    break;
  case 1:
    day = "Понедельник";
    break;
  case 2:
     day = "Вторник";
    break;
  case 3:
    day = "Среда";
    break;
  case 4:
    day = "Четверг";
    break;
  case 5:
    day = "Пятница";
    break;
  case 6:
    day = "Суббота";
}