const people =[{
    name: 'Serhii',
    age: 45
}, {
    name: 'Piter',
    age: 22
},{
    name: 'Galina',
    age: 33
}]

const peopleUnder30 = people.filter((person) => person.age > 30) 
console.log(peopleUnder30)

const peopleOn33 = people.findIndex((person) => person.age === 33)
console.log(peopleOn33)