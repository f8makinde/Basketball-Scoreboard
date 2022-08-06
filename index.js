let count = 0;
let firstScore = document.getElementById("first-num");
console.log(firstScore);
function btnOne(){
count += 1;
firstScore.innerHTML = count;
}
function btnTwo(){
    count += 2;
    firstScore.innerHTML = count;
}
function btnThree(){
    count += 3;
    firstScore.innerHTML = count;
}

let counter = 0;
let secondScore = document.getElementById("guest");
function btnScoreOne(){
    counter += 1;
    secondScore.innerHTML = counter;
}
function btnScoreTwo(){
    counter += 2;
    secondScore.innerHTML = counter;
}
function btnScoreThree(){
    counter += 3;
    secondScore.innerHTML = counter;
}
