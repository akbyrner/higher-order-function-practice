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
Use the native filter method to return a new array of the film
objects that were directed by Alfred Hitchcock.
*/

let hitchcock = films.filter(function(film){
  return film.director === 'Alfred Hitchcock';
});
// console.log(hitchcock);
/*
Prompt #2
Use the native filter method to return a new array of the film objects
that were made in the 1980s.
*/

let eighties = films.filter(function(film){
  return film.year >= 1980 && film.year <= 1989;
});
// console.log(eighties);
/*
Prompt #3
Use the map method to return a new array of strings of each film's title
and year like so...

example output:
// ['Rear Window (1954)', 'The Thing (1982)', 'Vertigo (1958)', 'Fright Night (1985)']
*/

let mappedStrings = films.map(function(film){
  return film.title  + " (" + film.year + ")";
});
// console.log(mappedStrings);
/*
Prompt #4
Use the native filter method to return a new array of the film objects that have a physicalMedia quantity
of 2.
*/

let quantityTwo = films.filter(function(film){
  return film.physicalMedia.quantity === 2;
});
// console.log(quantityTwo);
/*
Prompt #5
Use the native filter method to return a new array of the film objects who have Kurt Russell in the cast.
*/

let kurtRussell = films.filter(function(film){
  var cast = film['cast']
  return cast[0] === 'Kurt Russell'
});
console.log(kurtRussell);
/*
Prompt #6
Use the native map method to return a new array of strings of each film's title and the top-billed
cast member (top billed cast member will be the first cast member in the cast array).
*/

let mappedWithCastMember;