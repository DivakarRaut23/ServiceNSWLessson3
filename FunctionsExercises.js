const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){

    // 1
    
//    function addNumbers(num1, num2){
//        return num1 + num2;
//    }

//    let myAnswer = addNumbers(12, 19);
//    console.log(myAnswer);

// 2

// function getMaxNumber(num1, num2){
//     if (num1 > num2){
//         return num1;
//     }
//         return num2;

        


// }

// let biggestNumber = getMaxNumber(23,12);

// console.log(biggestNumber);

// Number 3

// function myArrayPrinter(myArray){
//     for (let i=0; i < myArray.length; i++){
//         let myItem = myArray[i];
//         console.log(myItem);
//     }
// }

// let names = [
//     "Vidic",
//     "Rooney",
//     "Beckham"
// ];

// myArrayPrinter(names);

// console.log(`===============================================`);

// let dogs = [
//     "Tommy",
//     "Seru",
//     "Hakuna"
// ];
// myArrayPrinter(dogs);

// No 4

function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

let divakar = createPerson("Divakar", 23);

console.log(divakar);

}

Program().then(() => {
    process.exit(0);
});