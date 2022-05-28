"use strict";

function sayHello(helloname) {
    return `Привет, ${helloname}`;
}

function returnNeighboringNumbers(amount) {
    let arr = [amount-1, amount, amount+1];
    return arr; 
}

function getMathResult(a, b) {
    console.log(typeof(b));
    if (typeof(b) !== 'number' || b <= 0) {
        return a;
    } else {
        let arr = [a];
        for (let i = 1; i < b; i++) {
            arr.push(arr[arr.length - 1]+ a);
        }
    return arr.join('---');
    }
}


console.log('testStart');
console.log(sayHello('Иван'));
console.log(returnNeighboringNumbers(4));
console.log(getMathResult(5, 3));
console.log(getMathResult(6, 0));

console.log('testEnd');
