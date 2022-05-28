"use strict";
function getTimeFromMinutes(minIn) {
   let hTime = parseInt(minIn / 60);
   let minOut = minIn - hTime * 60;
   let tWord = 'час';
   if ((minIn >= 0) && typeof(minIn) == 'number' && Number.isInteger(minIn) ) {
    if ( (hTime % 10 == 0) && (4 < (hTime % 10) < 10) && (10 < (hTime % 100) < 15)) {
        tWord = 'часов';
    } else if (1 < (hTime % 10) && hTime % 10 < 5 ) {
        tWord = 'часа';
    } else {
        tWord = 'час';
    }
    return `Это ${hTime} ${tWord} и ${minOut} минут`;
   } else {
       return 'Ошибка, проверьте данные';
   }
}


// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    let arr = [a,b,c,d];
    if (typeof(a) == 'number' && typeof(b) == 'number' && typeof(c) == 'number' && typeof(d) == 'number') {
        for (let i = 0; i < 3; i++) {
            if (typeof(arr[i]) != 'number') {
                return 0;
            }
        }
        return Math.max(a,b,c,d);
    } else {
        return 0;
    }
}



console.log(findMaxNumber(1,2));
console.log(findMaxNumber(1,2,3));
console.log(findMaxNumber(1,2,3,4));
console.log(findMaxNumber('2',3,3,4));

console.log(findMaxNumber(1, 5, 6.6, 11));



// console.log('startTestgetTimeFromMinutes');
// console.log(getTimeFromMinutes(60));
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(220));
// console.log(getTimeFromMinutes(600));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(2));
// console.log(getTimeFromMinutes(-2));
// console.log(getTimeFromMinutes('2'));

// console.log('endTestgetTimeFromMinutes');



