let foods = ["Spaghetti", "Burger", "Icecream"]
foods.push("Cake")
foods.shift()

for (let f of foods) {
    console.log(f)
}

let likeFoods = foods.map(function(f) {
    return "I like " + f
})
console.log(likeFoods)
