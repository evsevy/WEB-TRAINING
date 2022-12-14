/* Многомерный массив — это массив, в котором содержится другой массив или другие массивы.  пример многомерного массива */

const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];


let studentsData = [['Андрей', 24], ['Настя', 23], ['Даня', 24]];
Пример 2
// одномерные массивы
let student1 = ['Андрей', 24];
let student2 = ['Настя', 23];
let student3 = ['Даня', 24];


/* Доступ к элементам многомерного массива
Получить элемент многомерного массива можно обратившись к нему по индексу или индексам. */

let x = [
['Андрей', 24],
['Настя', 23], 
['Даня', 24]
];

// получаем первый элемент — это массив
console.log(x[0]); // Вывод: ["Андрей", 24]

// получаем первый элемент первого «внутреннего» массива
console.log(x[0][0]); // Вывод: Андрей

// получаем второй элемент третьего «внутреннего» массива
console.log(x[2][1]); // Вывод: 24
Многомерный массив x из нашего примера можно представить как таблицу с 3 строками и 2 столбцами.

/* Добавление элементов в многомерный массив
Добавить элемент в многомерный массив можно с помощью метода push() или с помощью квадратных скобок [] и доступа по индексу. Еще вариант — использовать метод splice(), но он используется реже. */

// С помощью push()

let studentsData = [['Андрей', 24], ['Настя', 23],];
studentsData.push(['Даня', 24]);

console.log(studentsData); // Вывод: [["Андрей", 24], ["Настя", 23], ["Даня", 24]
// Теперь добавим элемент во «внутренний» массив.

let studentsData = [['Андрей, 24], ['Настя', 23],];
studentsData[1].push('привет');

console.log(studentsData); // Вывод: [['Андрей, 24], ['Настя', 23, "привет"]]
//С помощью квадратных скобок
// using index notation
let studentsData = [['Андрей', 24], ['Настя', 23],];
studentsData[1][2] = 'привет';

console.log(studentsData); // Вывод: [["Андрей", 24], ["Настя", 23, "привет"]]
//С помощью splice()
let studentsData = [['Андрей', 24], ['Настя', 23],];

// добавляем элемент на позицию с индексом 1
studentsData.splice(1, 0, ['Даня', 24]);

console.log(studentsData); // Вывод: [["Андрей", 24], ["Даня", 24], ["Настя", 23]]

/* Удаление элементов из многомерного массива
Удалить элемент в многомерный массив можно с помощью метода pop() или с помощью метода splice().*/

// С помощью pop()

let studentsData = [['Андрей', 24], ['Настя', 23],];
studentsData.pop();

console.log(studentsData); // Вывод: [["Евгений", 24]]
 // Удалим элемент из внутреннего массива с помощью pop().

let studentsData = [['Андрей', 24], ['Настя', 23]];
studentsData[1].pop();

console.log(studentsData); // Вывод: [["Евгений", 24], ["Настя"]]
/* Примечание. Минус метода pop() — он умеет удалять только последний элемент. Вот метод splice() позволяет удалять элемент по определенному индексу. */

let studentsData = [['Евгений', 24], ['Настя', 23],];

/* удаляем элемент «внешнего» массива с индексом 1 — «внутренний» массив */
studentsData.splice(1,1);
console.log(studentsData); // Вывод: [["Евгений", 24]]
/* Перебор элементов многомерного массива c помощью forEach()
*/

let studentsData = [['Евгений', 24], ['Настя', 23],];

// перебираем элементы массива studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

/* Первый метод forEach() используется для перебора элементов «внешнего» массива, а второй forEach() — для перебора элементов «внутреннего» массива. */

/* С помощью for...of
Еще вариант для перебора — использовать цикл for...of для прохода по многомерному массиву.  */

let studentsData = [['Евгений', 24], ['Настя', 23],];

for (let i of studentsData) {
  for (let j of i) {
    console.log(j);
  }
}
/* С помощью цикла for
Перебрать элемента многомерного массива можно и классическим способом — с помощью цикла for. */

let studentsData = [['Евгений', 24], ['Настя', 23],];

// проходим по элементам «внешнего» массива
for(let i = 0; i < studentsData.length; i++){

// вычисляем длину «внутреннег» массива
    let innerArrayLength = studentsData[i].length;
    
// проходим по элементам «внутреннего» массива
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}