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
}  
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
//let firstMovie = allMovies.shift();
//console.log('\nFirst Movie in the Combined Array:', firstMovie);
//STEP 12
let indicesOfMoviesToRemove = ['Annabelle 2', 'The Pyramid', 'Zootopia'];
leastFavMovies.forEach(movie => {
    let index = movies.indexOf(movie);
    if (index !== -1) {
        indicesOfMoviesToRemove.push(index);
    }
});
console.log('\nIndices of Movies I Do Not Like:', indicesOfMoviesToRemove);

let moviesToAdd = ['Alien', 'Frankenweenie', 'Akira'];
indicesOfMoviesToRemove.forEach(index => {
    movies[index] = moviesToAdd.shift();
});
console.log('\nUpdated Movies Array:', movies);
//STEP 13 
const movies = [
    ["the warriors", 1],
    ["funny games", 2],
    ["deathproof", 3],
    ["donnie darko", 4],
    ["mad max", 5]
];
const movieNames = movies
  .filter(([name]) => typeof name === 'string')
  .map(([name]) => name);
  
  console.log(movieNames);

//STEP 14
const employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
const showEmployee = function (employeeArray) {
    console.log("Employees:");
  
    for (let i = 0; i < employeeArray.length; i++) {
      console.log(employeeArray[i]);
    }
  };
  
  showEmployee(employees);
//STEP 15
function filterValues(array) {
  return array.filter(value => {
    return value !== false && value !== null && value !== 0 && value !== '';
  });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
function getRandomNumber(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomItem = getRandomNumber(numericArray);
  
  console.log(randomItem);
  */
//STEP 17
function getLargestNumber(array) {
    return Math.max(...array);
  }
  const numericArray = [3, 16, 9, 33, 1];
  const largestNumber = getLargestNumber(numericArray);
  
  console.log(largestNumber);