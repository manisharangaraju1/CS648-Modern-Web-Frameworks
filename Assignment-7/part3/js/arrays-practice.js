/*jslint-env browser*/
//STEP 1
var movieArr1 = ["Harry Potter", "27 Dresses", "shawshank redemption", "Spiderman", "Sky is Pink"];
window.console.log(movieArr1[1]);



//STEP 2
var movies = new Array(5);

movies[0] = "Avengers";
movies[1] = "Transformers";
movies[2] = "Superman";
movies[3] = "Spiderman";
movies[4] = "Antman";

window.console.log(movies[0])



//STEP 3
var movies = new Array(5);

movies[0] = "Avengers";
movies[1] = "Transformers";
movies[2] = "Superman";
movies[3] = "Spiderman";
movies[4] = "Antman";

movies.splice(2,0,"Aquaman");
window.console.log(movies.length);



//STEP 4
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception"];

delete movies[0];
window.console.log(movies);



//STEP 5
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman", "Jumanji"];

for(var i=0;i<movies.length;i++) {
    window.console.log(movies[i]);
}



//STEP 6
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman", "Jumanji"];

for(index in movies ){
    window.console.log(movies[index]);
}



//STEP 7
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman", "Jumanji"];
movies.sort();
for(index in movies ){
    console.log(movies[index]);
}



//STEP 8
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman",  "Jumanji"];
var leastFavMovies = ["Rotten Tomatoes", "Highway", "Maniac"];
window.console.log('Movies I like \n\n');

for(var i=0;i<movies.length;i++) {
    window.console.log(movies[i]);
}
window.console.log('... \n');

window.console.log('Movies I regret watching \n\n');
for(var i=0;i<leastFavMovies.length;i++) {
    console.log(leastFavMovies[i]);
}
window.console.log('...\n');


//STEP 9
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman",  "Jumanji"];
var leastFavMovies = ["Rotten Tomatoes", "Highway", "Maniac"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log(movies);


//STEP 10
var movies = ["Avengers", "Transformers", "FastAndFurious", "BlackSwan", "Inception", "Antman",  "Jumanji"];
var leastFavMovies = ["Rotten Tomatoes", "Highway", "Maniac"];

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log(movies.pop());

