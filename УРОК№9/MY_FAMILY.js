

// ОБЪЕКТЫ


const KEY_PERSON = 'LUDMILA';

let key = 'son';

let myFamily = {     // внутри обьекта имена свойств могут начинаться с цифр и быть системными.
   
 daughter1: 'NASTYA',
 
   daughter2: 'ANNA',
 
   son: 'GERMAN',
  
   age: 2,
   
   [KEY_PERSON]: true,
// вложенная в обьект функция-метод
showInfo() {
	console.log(`${this.son}, ${this.daughter1}, ${this.daughter2}`)
}

myFamily.showInfo(); // функция вызова по ссылке

console.log(myFamily[KEY_PERSON]);

console.log(myFamily[key]);


// Копирование обьекта, ссылочным методом.
let newObject = Object.assign({}, myFamily);
console.log(newObject);

// оператор if  in для свойств обьекта
if ('son' in myFamily) {
	console.log(myFamily.name);
}

// Объект как конструктор:
const myFamily = new Object();
myFamily.children = 4;
myFamily.parents = 2;
myFamily.year = 1979;

let myFamily = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myFamily.type              = "FAMILY";
myFamily["date created"]   = 2017;
myFamily[str]              = "childrens together";
myFamily[rand]             = "Random Number";
myFamily[obj]              = "Object";
myFamily[""]               = "Even an empty string";

console.log(myFamily);

// КЛАССЫ

const Main = class Person{} // константной переменной Main присваивается значение именованного или анонимного класса
const Object = new Main () // создание объекта класса с использованием имени переменной класса
console.log(Main)

class Person {
	name; // можно присвоить начальные значения: name = ...;
	age;
	skills;
} // поля (публичные свойства) хранения данных
// Создаем объект с присваиванием значений полям
const Object = new Person ();
Object.name = 'EVGENY';
Object.age = 18;
Object.skills = true;
console.log(Object.name);

/* Классы могут содержать функциональные методы объектов
По умолчанию используется конструктор без параметров, который можно вызвать */

constructor (personName, personAge, personSkills){
	this.name = personName;
	this.age = personAge;
	this.skills = personSkills;
}
print() {
	console.log(` Name: ${this.name} Age: ${this.age} Skills: ${this.skills}`);
}
}

// Объявление КЛАССА: конструктор, свойства, методы
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area); 

// ФУНКЦИИ
function sum(a, b) {
	a = 2,
	b = 4,
  return a + b;
}
let result = sum(1, 2);
alert( result );

function showMyFamily(name, age, skills) {
	return {
		name, // name: name,
		age,
		skills,
	};
}

let person = showMyFamily('GERMAN', 2, 'mischief');
console.log(person);

// Создание объекта через функцию-конструктор
function PortfolioInfo(name) {
	this.name = name;
	this.age = 18;
	this.skills = 'highest';
}

console.log(new PortfolioInfo('EVGENY'));