"use strict";


function fib(n) {
    if (n <= 0 || typeof(n) != 'number' || Number.isInteger(n) == false) {
        return '';

    }
    let arr = [];
    let notlast;
    let last;
    for (let i = 0; i < n; i++) {
        if (i == 1 || i == 0) {
            arr.push(i);
        } else if(i >= 1) {
            notlast = Number(arr[arr.length -2]);
            last = Number(arr[arr.length -1]);
            // console.log('пред:', notlast, 'последний', last);
            arr.push(notlast + last);
        }
}
    return arr.join(' ');
}

console.log(fib(4.2));
console.log(fib('0'));
console.log(fib(7));




// let arr = [1,2,3];

// let test = arr.slice(-1);

// console.log(arr);

// console.log(test);