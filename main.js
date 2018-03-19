var number = 23; // integer - vesels skaitlis
var decimal = 3.14; // float - decimāls skaitlis
var tex = "Some nice text"; // string - teksts
var bool = true; // boolian - true / fals
var nothing = null; // nav vērtības
var cars = [
    'zaz',
    'vaz',
    'gaz',
    3.14,
    false,
]; // array - masīvs / saraksts
var person = {
    name: 'John',
    surname: 'Doe',
    age: '60'
}; //object - objekts
var people = [
    {
    name: 'John',
    surname: 'Doe',
    age: '60',
    },
    {
    name: 'Land',
    surname: 'Doe',
    age: '30',
    },
    {
    name: 'Voly',
    surname: 'Doe',
    age: '40',
    },
];

// var name = 'Pēteris';
// console.log(name);
// name = 'Anniņa';
// console.log(name);

//console.log(12%3);

if (name == true) {
    console.log('yay');
}else {
    console.log('boo');
}


var number = 234523452345; // integer - vesels skaitls
var decimal = 3.14; // float - decimāls skaitlis
var text = 'some nice text'; // string - teksts
var bool = true; // boolian - true / false
var nothing = null; // nav vērtības
var cars = [
    'zaz',
    'vaz',
    'gaz',
    'uvaz',
    3.14,
    false,
    123,
]; // array - masīvs / saraksts
var person = {
    name: 'John',
    surname: 'Doe',
    age: '60'
}; // object - objekts

var people = [
    {
        name: 'John',
        surname: 'Doe',
        age: '60',
    },
    {
        name: 'Jane',
        surname: 'Doe',
        age: '40',
    },
    {
        name: 'Sam',
        surname: 'Doe',
        age: '20',
    }
];

// var name = 'Pēteris';
// console.log(name);
// name = 'Anniņa';
// console.log(name);
var number = 10
var number2 = 2
// +
// -
// /
// *
// %
// console.log(12 % 3);
var name = 'Johnny';
var otherName = 'Anny';
// ==
// !=
// <
// <=
// >
// >=
// ===
// !==

// if (number == 1) {
//     console.log('yay 1');
// } else if (number == 2) {
//     console.log('yay 2');
// } else if (number == 3) {
//     console.log('yay 3');
// } else {
//     console.log('boo');
// }
// var number = 2;

// switch (number) {
//     case 1:
//         console.log('yay 1');
//         break;
//     case 2:
//         console.log('yay 2');
//         break;
//     case 3:
//         console.log('yay 3');
//         break;
//     default:
//         console.log('boo');
//         break;
// }

// var number = 1;
// var otherNumber = 3;
// if (number == 1 || otherNumber == 2) {
//     console.log('yay');
// } else {
//     console.log('boo');
// }
// var number = 2;
// if (number == 1) {
//     console.log('foo')
//     console.log('foo2')
// }

// console.log(foo);
// var foo = 123;

// console.log(calculateVAT(3.14, 10));

// function calculateVAT(price, vat) {
//     var vatNumber = (vat / 100) + 1;
//     var priceWithVAT = price * vatNumber;
//     return priceWithVAT;
// }

// console.info(parseInt('123asd123'));
// var shouldRun = 0;
// do {
//     console.log('yay, we are in the loop ' + shouldRun);
//     shouldRun = shouldRun + 1;
// } while(shouldRun > 10);

// for (var index = 0; index < cars.length; index++) {
//     console.log('yay, we are in the loop, current car: ' + cars[index]);
// }

for (var index = 0; index < 50; index++) {
    if (index % 2 == 0) {
        console.log('foo');
    }
}

MD. Uzrakstīt ciklu, kurā mēs sakitam no 0 - 50 un:
1. Ja skaitlis dalās ar 2 (bez atlikuma), tad izvadam "foo"
2. Ja skaitlis dalās ar 3 (bez atlikuma), tad izvadam "bar"
3. Ja skaitlis dalās ar 5 (bez atlikuma), tad izvadam "baz"
3. Ja nav neviens no augšā minētajiem, tad izvadam iterācijas nummuru.

for