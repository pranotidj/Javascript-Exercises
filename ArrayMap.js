// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr = start.map(x => Math.abs(x-11));
console.log(arr);

// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

const reverse_arr = shipMates.map(name => { return name.reverse() });
console.log(reverse_arr);

// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]
const res = awayTeam.map((name,i) => `${name} : ${(i%2===0) ? 'even' : 'odd' }`);
console.log(res);
// expected output: Array: ["Picard: even", "Riker: odd", etc...]


// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

const new_array = sci_fi_shows.map((name,i) => new Array(name,i));
console.log(new_array);
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]
const result_array = numbers.map((x,i,org) => org);
console.log(result_array);
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array? 
// Take a closer look at the last two arguments of map, one of them might be able to help


// 1. TODO
//["1", "2", "3"].map(parseInt)
["1", "2", "3"].map(x => parseInt(x))
// ----------------------------------------------------------
// REAL LIFE EXERCISES
// ----------------------------------------------------------
// One common thing we use map for in real life is to reformat objects to have a shape that is 
// better for our purposes. For instance, we only care about the value and first three characters 
// of the id for the races below. Use map to grab those values and create a new array with them.

var index = [
    {key: 1, sector: 10, t_score: 18, id: '1236n7e8', value: 'Klingon'},
    {key: 4, sector: 145, t_score: 12, id: '293847hs8', value: 'Minbari'},
    {key: 8, sector: 214, t_score: 5, id: '283hy8347', value: 'Cylon'},
    {key: 3, sector: 8346, t_score: 10, id: 'n9837ks857', value: 'Jawa'},
]

const new_array = index.map(x => {
  		return { id : (x.id).substr(0,3) , value : x.value}});
console.log(new_array);
// Expected Output:
// [
//     {id: '123', value: 'Klingon'},
//     {id: '293', value: 'Minbari'},
//     {id: '283', value: 'Cylon'},
//     {id: 'n98', value: 'Jawa'},
// ]