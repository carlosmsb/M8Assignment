/*
//STEP 1
const favoriteMovies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope'];
console.log(favoriteMovies[1]);
//STEP 2
const movies = new Array(5);
movies[0] = 'Alien';
movies[1] = 'Frankenweenie';
movies[2] = 'Akira';
movies[3] = 'Funny Games';
movies[4] = 'Rosemarys Baby';
console.log(movies[0]);
//STEP 3
//const movies = new Array();
movies[0] = 'Alien';
movies[1] = 'Frankenweenie';
movies[2] = 'Akira';
movies[3] = 'Funny Games';
movies[4] = 'Rosemarys Baby';
movies[2] = 'Shrek'
console.log(movies.length); 
//STEP 4
let movies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope'];
delete movies[0];
console.log(movies); 
//STEP 5
let movies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope', 'Alien', 'Shrek'];
for (let index in movies) {
    console.log(movies[index]);
} 
//STEP 6
let movies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope', 'Alien', 'Shrek'];
for (let movie of movies) {
    console.log(movie);
} 
//STEP 7
let movies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope', 'Alien', 'Shrek'];
movies.sort();
for (let movie of movies) {
    console.log(movie);
}  */
//STEP 8
let movies = ['Evil Dead', 'Hereditary', 'The Witch', 'La Belle Verte', 'Nope', 'Alien', 'Shrek'];
let leastFavMovies = ['Annabelle 2', 'The Pyramid', 'Zootopia'];
console.log('Movies I like:');
for (let movie of movies) {
  console.log(movie);
}

console.log('\nMovies I regret watching:');
for (let regretMovie of leastFavMovies) {
  console.log(regretMovie);
}
//STEP 9
let allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
console.log('\nCombined Movies (Reverse Sorted):');
for (let movie of allMovies) {
    console.log(movie);
}
//STEP 10
//let lastMovie = allMovies[allMovies.length - 1];
//console.log('\nLast Movie in the Combined Array:', lastMovie);
//STEP 11
let firstMovie = allMovies.shift();
console.log('\nFirst Movie in the Combined Array:', firstMovie);
//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17