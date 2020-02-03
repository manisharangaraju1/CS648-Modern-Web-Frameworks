var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip == 0 ? 'Heads' : 'Tails');
} while (coinFlip != 1)
