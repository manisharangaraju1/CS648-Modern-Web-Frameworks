var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Choose between Heads and Tails").toLowerCase();
var result = coinFlip < 5 ? 'heads' : 'tails';

if (choice === result) {
    window.alert("The flip was " + result + " and you chose " + choice + "...you win!");
} else {
    window.alert("The flip was " + result + " but you chose " + choice + "...you lose!");
}
