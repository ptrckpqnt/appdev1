let aboutMe = {
    name: "Patrick",
    age: 21,
    course: "BSIS"
}

function introduce() {
    console.log("Hi, my name is " + aboutMe.name + " and I am " + aboutMe.age + " years old.")
}

aboutMe.hobby = "Playing games"

introduce()
console.log(aboutMe)
