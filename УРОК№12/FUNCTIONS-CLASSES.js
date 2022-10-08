/* Функции в JavaScript могут вести себя, будто строки или числа. В частности, можно сделать массив, состоящий из функций. */

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];
Давайте, например, выведем в консоль содержимое нулевого элемента массива:

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];
console.log(arr[0]); 
/*
Как вы видите, в примере выше мы получаем исходный код функции, а не результат. Чтобы происходил вызов функции, к ней нужно дописать круглые скобки. Так как наша функция хранится в arr[0], то круглые скобки нужно будет написать после квадратных, вот так: arr[0](). Проверим: */
let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

arr[0](); 

/* Можно также перебрать наш массив с функциями циклом и в этом цикле вызвать каждую из функций: */

let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];

for (let func of arr) {
	func(); // вызываем наши функции в цикле
}
let str = 'a aa aaa aaaa aaaa';
let res = str.search(/aaa/);
В результате в переменную запишется следующее: 5
/*
При работе с методом replace, если мы что-то положим в карман в регулярке, то в строке замены мы можем вставить содержимое этого кармана написав знак доллара $ и номер кармана. Например, $1 - первый карман, $2 - второй карман и так далее. Зачем это нужно и как этим пользоваться давайте посмотрим на примерах. Пример: 
Давайте найдем все числа и вместо них вставим эти же числа, но в круглых скобках. Для этого все найденные числа мы будем заменять на них самих же, но в скобках: */

let str = '1 23 456 xax';
let res = str.replace(/(\d+)/g, '($1)');
// В результате в переменную запишется следующее:
'(1) (23) (456) xax'

/* В следующем примере мы разобьем строку в массив по разделителю '-' или по разделителю '+': */

let str = 'a-b+c-d+e';
let res = str.split(/[-+]/);
// В результате в переменную запишется следующее:
['a', 'b', 'c', 'd', 'e']

/* Наследование классов в JS
В этой статье вы познакомитесь с наследованием классов в JavaScript. Наследование позволяет определить класс со всеми функциональными возможности родительского класса и добавить при этом новые возможности. С помощью наследования классы могут «наследовать» все свойства и методы другого класса. Чтобы использовать наследование классов, нужно использовать ключевое слово extends. Например: */

// родительский класс

class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Привет, ${this.name}`);
    }
}

// наследуем родительский класс

class Student extends Person {

}
let student1 = new Student('Евгений');
student1.greet(); 

/* Как вы видите, класс Student наследует все методы и свойства класса Person. Это значит, что у класса Student будет свойство name и метод greet() — как у класса Person.
В программе мы создали объект student1 класса Student и использовали его метод greet(). Ключевое слово super()
Ключевое слово super() используется внутри дочернего класса. Оно отсылает к родительскому класса. Например: */

// родительский класс
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Привет, ${this.name}`);
    }
}

// наследуем родительский класс
class Student extends Person {

    constructor(name) {
    
        console.log("Создаем класс Student");
        
        // вызываем конструктор класса super и передаем параметр name
        super(name);
    }

}
let student1 = new Student('Евгений');
student1.greet(); 
/*
Как вы видите, super() внутри класса Student относится к классу Person. Следовательно, когда вызывается конструктор класса Student, он также вызывает конструктор класса Person, который присваивает ему свойство name.

Переопределение методов и свойств
Если у дочернего класса есть метод или свойство с таким же именем, что и у родительского класса, использоваться будет метод или свойство дочернего класса. Такое использование наследования называется переопределением методов и свойств (overriding). Например: */

// родительский класс
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "skilled";
    }
    
    greet() {
        console.log(`Привет, ${this.name}.`);
    }
 
}

// наследуем родительский класс
class Student extends Person {

    constructor(name) {
        
// вызываем конструктор класса super и передаем параметр name
        super(name);
        
// переопределяем свойство occupation
        this.occupation = 'студент';
    }
    
// переопределяем метод класса Person
    greet() {
        console.log(`Привет, студент ${this.name}.`);
        console.log('Твой род деятельности: ' + this.occupation);
    }
}

let p = new Student('Евгений');
p.greet();