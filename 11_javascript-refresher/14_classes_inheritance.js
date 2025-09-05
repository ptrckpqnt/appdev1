class Person {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log("Hi, I am " + this.name)
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying")
    }
}

let p = new Person("Patrick")
p.sayHello()

let s = new Student("Patrick")
s.sayHello()
s.study()
