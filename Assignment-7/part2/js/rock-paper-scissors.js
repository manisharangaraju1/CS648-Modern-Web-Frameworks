function rockPaperScissors() {
    "use strict";
    var compChosen = computerSelection();
    var choice = window.prompt("Choose of Rock, Paper or Scissors (r/p/s):");

    switch (choice) {
        case 'r':
            if(compChosen == 'paper') 
                window.alert('You chose rock and computer chose paper. Paper covers rock. So, computer wins');
            else if(compChosen == 'sicssors') 
                window.alert('You chose rock and computer chose sicssors. Rock destroys scissors. So, you win!');
            else if(compChosen == 'rock') 
                window.alert('You chose rock and computer chose rock. So, nobody wins');
            break;
        case 'p':
            if(compChosen == 'paper') 
                window.alert('You chose paper and computer chose paper.So, nobody wins!');
            else if(compChosen == 'sicssors') 
                window.alert('You chose paper and computer chose sicssors.Scissors cut paper. So, computer wins!');
            else if(compChosen == 'rock') 
                window.alert('You chose paper and computer chose rock. Paper covers rock. So, you win!');
            break;
        case 's':
            if(compChosen == 'paper') 
               window.alert('You chose sicssors and computer chose paper. Scissors cut paper. So, you win!');
            else if(compChosen == 'sicssors') 
                window.alert('You chose sicssors and computer chose sicssors. So, nobody wins!');
            else if(compChosen == 'rock') 
                window.alert('You chose sicssors and computer chose rock. Rock destroys scissors. So, computer wins!');
            break;
        default: 
            window.alert('Please enter a valid choice');
            break;
    }
}

function computerSelection() {
    "use strict";
    var computerChoice;
    
    var number =  Math.floor(Math.random() * Math.floor(3));
    switch (number) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'sicssors'; 
            break;
    }
    return computerChoice;
}

rockPaperScissors(); 

