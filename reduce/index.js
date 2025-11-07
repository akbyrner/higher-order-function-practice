const films = [
  {
    title: 'Rear Window',
    director: 'Alfred Hitchcock',
    year: 1954,
    genreTags: ['Suspense', 'Murder Myster'],
    physicalMedia: {
      type: 'Bluray',
      quantity: 2,
    },
    cast: [
      {
        name: 'Jimmy Stewart'
      },
      {
        name: 'Grace Kelly'
      },
      {
        name: 'Thelma Ritter'
      }
    ]
  },
  {
    title: 'The Thing',
    director: 'John Carpenter',
    year: 1982,
    genreTags: ['Horror', 'Creature Feature'],
    physicalMedia: {
      type: '4k',
      quantity: 1,
    },
    cast: [
      {
        name: 'Kurt Russell',
      },
      {
        name: 'Keith David'
      },
      {
        name: 'Wilford Brimley'
      }
    ]
  },
  {
    title: 'Vertigo',
    director: 'Alfred Hitchcock',
    year: 1958,
    genreTags: ['Suspense'],
    physicalMedia: {
      type: 'Bluray',
      quantity: 1,
    },
    cast: [
      {
        name: 'Jimmy Stewart'
      },
      {
        name: 'Kim Novak'
      }
    ]
  },
  {
    title: 'Fright Night',
    director: 'Tom Holland',
    year: 1985,
    genreTags: ['Horror', 'Vampire'],
    physicalMedia: {
      type: '4k',
      quantity: 2,
    },
    cast: [
      {
        name: 'William Ragsdale'
      },
      {
        name: 'Chris Surandon'
      },
      {
        name: 'Amanda Bearse'
      }
    ]
  }
];

/*
Prompt #1
Use the native reduce method to return the number of films that were made 
in the 1950s.
*/

let numFifties = films.reduce(function(acc, film){
  if (film.year >= 1950 && film.year <= 1959){
    acc += 1
  }
  return acc;
}, 0);
console.log(numFifties);
/*
Prompt #2
Use the native reduce method to return a new array of the films whose physicalMedia
type is "Bluray".
*/

let blurays = films.reduce(function(acc, film){
  if (film.physicalMedia['type'] === 'Bluray'){
    acc.push(film);
  }
  return acc;
}, []);
console.log(blurays);
/*
Prompt #3
Use the native reduce method to return a new array of the film titles whose genreTags
array includes 'Horror'
*/

let horror = films.reduce(function(acc, film){
  if (film.genreTags.includes('Horror')){
    acc.push(film.title);
  }
  return acc;
}, []);
console.log(horror);
/*
Prompt #4
Use the native reduce method to return a string of each title's first letter.

example output:
// 'RTVF'
*/

let firstLetters = films.reduce(function(acc, film){
  acc += film.title[0];
  return acc;
}, "");

console.log(firstLetters);