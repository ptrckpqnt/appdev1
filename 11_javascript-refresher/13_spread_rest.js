const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5]
console.log(moreNumbers)

const user = { name: "Patrick", age: 21 }
const newUser = { ...user, course: "BSIS" }
console.log(newUser)

function sum(...args) {
    let total = 0
    for (let x of args) {
        total = total + x
    }
    return total
}

console.log(sum(...moreNumbers))
