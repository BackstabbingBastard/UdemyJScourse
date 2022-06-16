"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        let newString = 'Семья состоит из: ' + arr.join(' ') + ' ';
        return newString;
    } else {return 'Семья пуста';}
}


console.log(showFamily(family));





function standardizeStrings(arr) {
    let newString = arr.join('\n').toLowerCase();
    console.log(newString);
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];




console.log(standardizeStrings(favoriteCities));

