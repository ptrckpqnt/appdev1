console.log("5" == 5)
console.log("5" === 5)

let a
let b = null
console.log(a)
console.log(b)

let person = {
    name: "Patrick",
    regular: function() {
        console.log("Regular", this.name)
    },
    arrow: () => {
        console.log("Arrow", this.name)
    }
}

person.regular()
person.arrow()

let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log(arr1)
console.log(arr2)

let arr3 = [1, 2, 3]
let arr4 = [...arr3]
arr4.push(4)
console.log(arr3)
console.log(arr4)
