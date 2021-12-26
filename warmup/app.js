/*
var user = { name: "Dev Mathias" }

//for(let i = 0; i < 10; i++)
for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`This is i ${i}`)


function sayHello() {
    var name = 'Mathias';
    console.log(name)
}

sayHello();
*/

//const name = 'Mathias';
let name = 'Mathias';

name = 'Maria';

console.log(name);


const users = ['Mathias', 'Maria', 'Lauren', 'Jimmyboy'];

users.push('Magnus')

console.log(users);

const mathias = 100;

const you = mathias;

const howmuchyouhave = mathias + 50;

console.log(howmuchyouhave)


const initialuseres = ['John', 'traversy', 'Mathias']

//const currentusers = initialuseres; //Dette kopierer ikke, altså currentusers og initialuseres er det samme

const currentusers = [...initialuseres];
currentusers.push('Florin pop', "Net ninja");

console.log(initialuseres)

console.log(currentusers)


//function sayHello(name) {
//    console.log(`hey ${name}`);
//}

const sayHello = (name) => {
    return `Hello there ${name}`;
}

//const sayHello = (name) => `Hello there ${name}`;


const greeting = sayHello("Mathias");

console.log(greeting)


const user = {
    name1: 'Mathias',
    lastName: 'Ellingsen',
    age: 20
}

const {name1, lastName, age} = user;

console.log(name1)
console.log(user.age)


const numbers = [1,2,3,4,5];
const [one, two] = numbers;

console.log(one)


const users2 = [
    { name: 'Mathias', age: 25 },
    { name: 'Zed', age: 30},
    { name: 'Zeds Dead', age: 30}
];

console.log(users2)

const modifiedUser = users2.map((user) => user.age)
const filterUser = users2.filter((user) => user.age === 30)

console.log(modifiedUser)
console.log(filterUser)




//5