var i, output;

for (i = 1; i <=100; i++) {
    if (i % 15 == 0) {
        output = 'Marco! Polo!';
    } else if (i % 3 == 0) {
        output = 'Marco!';
    } else if (i % 5 == 0) {
        output = 'Polo!';
    } else {
        output = i;
    }

    document.write(output + '<br>');
}
