history= [
    {squares: Array(9).fill(null)},
    {squares: Array(9).fill(1)},
    {squares: Array(9).fill(2)}
]

squaresNew = [null, null, null, null, "O", null, "X", null, null];


const result = history.concat([{squares:squaresNew}]);
const res = [...history, {squares: squaresNew}];


locations = [
    {location:{}},
    {location:{row:1,col:2}},
    {location:{row:1,col:2}}
]

console.log(locations[1].location)