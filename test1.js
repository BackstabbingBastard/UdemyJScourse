"use strict";





















// let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

// let personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat : false
// };

// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = prompt('На сколько вы оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?'),
//       d = prompt('На сколько вы оцените его?', '');

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

// console.log(personaMovieDB);


// моя рекурсия с выводом последовательности натуральных чисел
// function my_function(x) {
//     if (x >= 2) {
//         return my_function(x-1) + ' ' + x;
//     } else {
//         return 1;
//     }
// }


// рецензия 1 (оценка 2/2)
// function my_function(n) {
//     // как только доходит до 1, прерываем рекурсию
//     if (n === 1) return 1
//     return my_function(n-1) + " " + n
// }


// рецензия 2 (оценка 2/2)
// function my_function(n) {
//     if (n <= 1) return 1;       
//     return my_function(n-1) + ' ' + n;
//   }


// рецензия 3 (оценка 2/2)
// function my_function(n) {
//     return n == 1 ? n.toString() : my_function(n - 1) + ' ' + n;
// }



// рецензия 4 (оценка 2/2 - формальные требования соблюдены, но подробней расписать в рецензии)
// var step = 1;
// var sum = '';
// function my_function(n) {
//     if (step >= n+1) return sum;
//     sum += step + " "; 
//     step++;
//     return my_function(n);
// }


// рецензия 5 (2/2)
// function my_function(n) {
//     if (n==1) {
//         return 1;
//         }
//         else {
//             return my_function(n-1)+" "+n;
//         }
//     }


// рецензия 6 (2/2)
// function my_function(n) {
//     if (n==1) return n.toString();
//     else return my_function(n - 1) + " " + n;// Тут нужно написать решение
// }


// рецензия 7 (2/2) пришлось ставить ноду чтобы проверить
// var i = 1;
// function my_function(n) {
// if(n<=1) {return i++;}
//       process.stdout.write(i+" ");
//       i++;
//     return my_function(n-1);
// }


// рецензия 8 (2/2)
// function my_function(n) {
//     if ( n == 1){
//         return 1;
//     } else {
//         return my_function(n - 1) + " " + n;
//     }
// }


// рецензия 9 (2/2)
// function my_function(n) {
//     return n==1? n : my_function(n-1)+" "+n
//     }

// alert(my_function(9));










