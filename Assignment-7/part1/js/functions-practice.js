/*jslint-env browser*/

//STEP 1
function halfNumber(number) {
    "use Strict";
    let halfNumber = number/2;
    console.log('Half of ' + number + ' is' + halfNumber+ '.');
    return halfNumber;
}
// halfNumber(6)

//STEP 2
function squareNumber(number) {
    "use Strict";
    let square = number^2;
    console.log('The result of squaring the number '+ number +' is '+ number +'.');
    return square;
} 
// squareNumber(6)


//STEP 3
function percentOf(numberOne, numberTwo) {
    "use Strict";
    let x = ( numberOne / numberTwo ) * 100 ;
    console.log(numberOne +' is ' + x+'% of ' + numberTwo);
    return x;
}

// percentOf(2,4)

//STEP 4
function findModulus(numberOne, numberTwo) {
    "use Strict";
    let modulus = ( numberTwo % numberOne);
    console.log(modulus +' is the modulus of ' +numberOne + ' and ' + numberTwo);
    return modulus;
}
// findModulus(10,4)

//STEP 5
function sumOfNumbes() {
    "use Strict";
    var inputString = window.prompt('Enter your list of numbers');
    let numberArray = inputString.split(',');
    let totalSum = sum(numberArray);
    return totalSum;
}


function sum() {
    "use Strict";
    let sum = 0;
    for (var i of arguments[0]) {
        sum += parseInt(i,0);
    }
    return sum;
}
// sumOfNumbes()