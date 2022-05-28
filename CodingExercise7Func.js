"use strict";

function calculateVolumeAndArea(a) {
    if (Number.isInteger(a) === true && a > 0) {
        let V = a * a * a;
        let S = 6 * (a * a);
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}




console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

console.log('endBLock');



function getCoupeNumber(a) {
    if (typeof(a) != 'number' || Number.isInteger(a) != true || a < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (a == 0 || a > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
    return parseInt((4 + a -1) / 4);
    }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('hello'));