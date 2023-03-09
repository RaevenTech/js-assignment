//  a. Write a JavaScript program to find the diagonal of a square where the length of each side is 9.
const sideLength = 9
function squareDiagonal(side){
    return Math.sqrt(2) * side;
}
 const answer = squareDiagonal(sideLength)
 console.log(`Answer to A: ${answer.toPrecision(3)}`)
//  b. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.
const sideA = 5
const sideB = 6 
const sideC = 7 
const sides = (sideA + sideB + sideC)/2
const area =  Math.sqrt(sides*((sides-sideA)*(sides-sideB)*(sides-sideC)))
const areaFloor =  Math.floor(Math.sqrt(sides*((sides-sideA)*(sides-sideB)*(sides-sideC))))
console.log(`Answer to B-i: ${area.toFixed(2)}`)
console.log(`Answer to B-i: ${areaFloor}`) 

//  c. Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
const areaCircle = (4 * 4 * Math.PI) 
console.log(`Answer to C-i: ${parseFloat(areaCircle).toFixed(3)}`)
const radius = (4 * 2 * Math.PI)
console.log(`Answer to C-ii: ${parseInt(radius)}`)
//     i. When trying to find these values, you will need to use PI. Remember constants?

