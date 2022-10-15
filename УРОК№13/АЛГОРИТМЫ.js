///////////////////РЕКУРСИЯ////////////////////////////
//          ФАКТОРИАЛ (РЕКУРСИВНЫЙ)

function recursiveFn() {
    console.log("This is a recursive function");
    recursiveFn();
}
 
recursiveFn();
///////////////////////////////////////////
let factor = function(number) {
let result = 1;
let count;
 for (count = number; count > 1; count--) {
 result *= count;
 }
 return result;
};
console.log(factor(6));
////////////////////////////////////////////

function oddArray(arr) {
    let result = [];
    function helperRecursiveFn(arr) {
        if(arr.length === 0) {
            return; // 1
        } else if(arr[0] % 2 !== 0) {
            result.push(arr[0]); // 2
        }
        helperRecursiveFn(arr.slice(1)); // 3
    }
    helperRecursiveFn(arr);
    return result;
}
console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//////////////////////////////////////////////////////

// с остановкой
let count = 1;
function recursiveFn() {
    console.log(`Recursive ${count}`);
    if (count === 10) return;
    count++;
    recursiveFn();
}
 
recursiveFn();
///////////////////////ФИБОНАЧЧИ/////////////////////////////

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib(100))


///////////////////////ХЕШ-ТАБЛИЦЫ///////////////////////////
// КРАТКИЙ ПРИМЕР

let likes = {
  John: "Playing Football",
  Jane: "Watching Soap Operas"
}

// С ФУНКЦИЕЙ
class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hashFunction(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }

  // добавление элементов в хэш-таблицу
  set(key, value) {
    let memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) {
      this.table[memoryLocation] = [];
    }
    this.table[memoryLocation].push([key, value]);
    return this.table;
  }
}
const hashTable = new HashTable(4);
alert(hashTable.set('EVGENY', 43));

////////////////////////////////////////////
function hash(string) {
  let index = 0;
  for(let i = 0; i < string.length; i++) {
    index += string.charCodeAt(i) * i;
  }

  return index % _size;
}
console.log(hash());

//////////////////////ЛИНЕЙНЫЙ ПОИСК//////////////////////////

const array = [3, 8, 12, 6, 10, 2];
 
// НАЙДЕМ: 10
function checkForN(arr, n) {
    for(let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            return `${true} ${n} exists at index ${i}`;
        }
    }
 
  return `${false} ${n} does not exist in the given array.`;
}
 console.log(checkForN(array, 10));
 //////////////////ПУЗЫРЬКОВАЯ СОРТИРОВКА/////////////////////
 
 function bubbleSort(array) {
    let isSwapped;
 
    for(let i = array.length; i > 0; i--) {
        isSwapped = false;
 
        for(let j = 0; j < i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                isSwapped = true;
            }
        }
 
        if(!isSwapped) {
            break;
        }
    }
    return array;
}

//////////////////////БИНАРНЫЙ ПОИСК///////////////////////////

function binarySearch(sortedArray, key){
    const binarySearch = (array, item) => {
	let low = 0;
	let high = array.length - 1;
 
  while(low <= high) {
  	let middle = parseInt((high + low) / 2);
	let value = array[middle];
 
  	if (value === item) {
		return value;
    }
 
    if (value > item) {
    	high = middle - 1;
    } else {
    	low = middle + 1;
    }
  }
 
  return null;
};
 
const array = [1, 2, 3, 4, 5, 6];
const item = 4;
 
console.log(binarySearch(array, item));
