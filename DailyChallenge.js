
let people = [
    {
        name: "Beckham",
        age: 45
    },
    {
        name: "Pogba",
        age: 25
    },
    {
        name: "Greenwood",
        age: 19
    },
    {
        name: "Martial",
        age: 24
    },
    {
        name: "Ibrahimovic",
        age: 35
    }
];

function searchByChar(array, searchTerm) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        let found = false;
        for(let i = 0; i < element.name.length; i++){
            let letter = element.name[i];
            if(letter.toLowerCase() == searchTerm.toLowerCase()){
                found = true;
            }
        }

        if(found) {
            resultArr.push(element);
        }
    }
    return resultArr;
}

console.log(searchByChar(people, "E"));
