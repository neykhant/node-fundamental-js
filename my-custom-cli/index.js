#!usr/bin/env node
// console.log("Pokenman")

const printFiveMovies =async  (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokeman = await response.json();
    const movies = pokeman.movies.map(({movie}) => movie.name);
    console.log(movies.slice(0,5))
}
printFiveMovies('charmander')

