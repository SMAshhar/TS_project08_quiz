/*
# Quiz System

The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.

Create a GitHub repository for the project and submit its URL in the project submission form. 
*/

function quiz() {
    let a = 0;
    let q1 = prompt("What is the name of a 3 dimensional triangle?\na) Hectagone\nb) Oxygon\nc) Pyramid\nd) Cuboid\n : ")
    q1 === "c" ? a += 1 : a -= 0.5
    let q2 = prompt("What is the name of the largest ocean?\na) Indian\nb) Pecefic\nc) Arctic\nd) Antarctic\n : ")
    q2 === "b" ? a += 1 : a -= 0.5
    let q3 = prompt("Where to buy names?\na) NADRA\nb) Capital City\nc) State Registory\nd) Can never do that\n : ")
    q3 === "a" ? a += 1 : a -= 0.5
    return a
}

let marks = quiz()
console.log(`Your quiz score is : ${marks}`)