// гава 5


// задание 1

const result = +prompt('Введите число')
if (typeof +result !== 'number') {
    console.log('Упс, кажется, вы ошиблись');
} else if (isNaN(result)) {
    console.log('Ошибка, введено НЕ ЧИСЛО');
} else if (+result % 2 === 0) {
    console.log('Число четное');
} else {
    console.log('число нечетное');
}



// задание 2

const a = 123;
if (typeof (a) === 'string') {
    console.log(a + ' - строка');
} else if (typeof (a) === 'boolean') {
    console.log(a + ' - логический тип');
} else if (typeof (a) === 'number') {
    console.log(a + ' - число');
} else {
    console.log('Тип x не определен');
}

// задание 3

let reverse = a => a.split('')
    .reverse()
    .join('');
console.log(reverse('hello'))

// pзадание 4

console.log(Math.floor(Math.random() * 100) + 1);

// задание 5
let arr = ["1", "два", "3", "4", "пять"];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//задание 6
function checkArrayType(arr) {
    let arr1 = arr.map(e => typeof e);
    return [...new Set(arr1)].length === 1;
}

function checkArrayType1(arr) {
    return arr.every((e, i, a) => typeof e === typeof a[0]);
}

console.log(checkArrayType([1, 2, 3, '4']));
console.log(checkArrayType1([5, 6, 7, 8]));

// задание 7
let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];


function countEvenOdd(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof (arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(arrN);

console.log("Even is " + rez[0]);
console.log("Odd is " + rez[1]);
console.log("Other is " + rez[2]);


//задание 8

let maMap = new Map();
maMap.set("1", "A");
maMap.set("2", "B");
maMap.set("3", "A");
maMap.set("4", "B");
maMap.set("5", "A");
maMap.set("6", "C");
maMap.set("7", "A");

for (let name of maMap.keys()) {
    console.log(name + "- ключ " + maMap.get(name) + " - значение");
}









