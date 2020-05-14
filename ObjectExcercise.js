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
    
    let me = {
        name: "Divakar",
        age: 31
    }
    console.log(me.age);
    me.age++;
    console.log(me.age);

    me.hobbies = [
        "Soccer",
        "Video Games",
        "Eating",
        "Coding"
    ];

    me.pets = [
        {
            name: "Seru",
            age: 3,
            species: "Dog"
        },
        {
            name: "Tommy",
            age: 7,
            species: "DogCat"
        },
        {
            name: "Jerry",
            age: 2,
            species: "Mouse"
        }
    ];

    for (let i=0; i <me.pets.length; i++){
        let pet = me.pets[i]
    }

    console.log(me.pets);



}

Program().then(() => {
    process.exit(0);
});