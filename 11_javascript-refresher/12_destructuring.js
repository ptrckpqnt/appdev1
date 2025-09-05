const person = {
    name: "Patrick",
    age: 21
}

const hobbies = ["watching movies", "volleyball"]

const { name, age } = person
console.log(name, age)

const [h1, h2] = hobbies
console.log(h1, h2)

function printName({ name }) {
    console.log(name)
}

printName(person)
