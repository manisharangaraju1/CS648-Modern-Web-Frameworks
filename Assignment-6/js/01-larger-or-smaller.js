var firstNumber = parseInt(window.prompt("Enter first interger"));
var secondNumber = parseInt(window.prompt("Enter second interger"));

if (firstNumber === secondNumber) {
    document.write("Both are equal");
} else {
    var larger = Math.max(firstNumber, secondNumber);
    document.write("The larger integer is " + larger);
}




