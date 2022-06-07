// The `movies` array from the file `src/data.js`.
//import movies from "src/movies.js";
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  return arr.map((elem) => { return elem.director })

}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  let res = arr.filter((elem) => {

    if (elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')) {
      //console.log("cine count",elem ) 
      return elem;
    }
  })
  return res.length;

};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//console.log(scoresAverage(movies));

//console.log(scoresAverage(movies));
function scoresAverage(arr) {
  if (arr.length == 0) { return 0 };

  let result = arr.reduce((accum, el) => {
    if (el.score) {
      accum = accum + parseFloat(el.score)
    }
    return accum;
  },
    0);

  result = result / arr.length;
  result = Math.round(result * 100) / 100

  return result;

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  if (arr.length == 0) { return 0 };
  var dim = 0
  let result = arr.reduce((accum, el) => {

    if (el.genre.includes("Drama")) {
      dim += 1;
      accum = accum + parseFloat(el.score)
    }
    return accum
  },
    0);
  //console.log(result); 
  if (result == 0) { return 0 }
  result = result / dim
  result = Math.round(result * 100) / 100

  return result;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  if (arr.length == 0) {
    return [];

  }
  let arr1 = arr.sort(function (a, b) {
    if (a.year == b.year) {

      return a.title - b.title

    }

    return a.year - b.year
  });

  let arr2 = arr1.sort(function (a, b) {
    if (a.year == b.year) {
      //console.log(a.title)
      return a.title.localeCompare(b.title);

    }
  })
  return arr2;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let arr2 = [...arr]
  arr2 = arr2.sort(function (a, b) {
    //console.log(a.title)
    if (a.title > b.title) { return 1 }
    if (b.title > a.title) { return -1 }
    return 0;
  })

  arr2 = arr2.filter((val, ind) => {
    if (ind < 20) {
      return val
    }
  });
  arr2 = arr2.map((val, ind) => { return val.title })

  //console.log(arr2)
  console.log(arr2);
  return arr2;

}
//orderAlphabetically(movies);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) { 
let arr1=[...arr];
arr1.map((val)=>{
 let timE=val.duracion;
 timE=timE.replace(/]/g, "");





})}
// BONUS - Iteration 8: BeBest yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests wo
/* Environment setup. Do not modify the below code. */
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
