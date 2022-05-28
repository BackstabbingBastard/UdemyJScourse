"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

console.log('test', numberOfFilms);

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat : false
};

// вопросы в цикле + зависят от кол-ва фильмов + нельзя ввести пустую строку, отмену или фразу более 50 символов
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?');
    if (a === '' || a == null || a.length > 50) {
        i--;
        continue; }
    let b = prompt('На сколько вы оцените его?', '');
    if (b === '' || b == null || b.length > 50)
        i--;
        continue;
    personaMovieDB.movies[a] = b;
}

// проверка кол-ва фильмов и alert в диапазоне 
if (personaMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    alert('Classic');
} else if (personaMovieDB.count > 30) {
    alert('Киноман');
} else {
    console.log('Что-то пошло не так')
}  


console.log(personaMovieDB);
