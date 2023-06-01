let score1 = document.getElementById("score1");
let scoreOne = 0;
score1.innerText = scoreOne;

let score2 = document.getElementById("score2");
let scoreTwo = 0;
score2.innerText = scoreTwo;



function addOne() {
 scoreOne++;
 score1.innerText = scoreOne;

 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}
function addTwo() {
 scoreOne += 2;
 score1.innerText = scoreOne;
 
 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}
function addThree() {
 scoreOne += 3;
 score1.innerText = scoreOne;
 
 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}

function add1() {
 scoreTwo++;
 score2.innerText = scoreTwo;
 
 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}
function add2() {
 scoreTwo += 2;
 score2.innerText = scoreTwo;
 
 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}
function add3() {
 scoreTwo += 3;
 score2.innerText = scoreTwo;
 
 if (scoreOne > scoreTwo){
  score2.classList.remove("border");
  score1.classList.add("border");
 } else {
  score1.classList.remove("border");
  score2.classList.add("border");
 }
}

function reset() {
 scoreOne = 0;
 scoreTwo = 0;
 score1.innerText = scoreOne;
 score2.innerText = scoreTwo;

 score1.classList.remove("border");
 score2.classList.remove("border");
}

