class Governor {
    // constructor(){
    static power = true
    static popularity = true
    // }

    static makeLaw() { console.log("Make law") }

    static makeDecisions() { console.log("I want this to happen") }




};

console.log("Power: " + Governor.power)
console.log("Popularity: " + Governor.popularity)
Governor.makeLaw()
Governor.makeDecisions()
console.log()

class Person {
    constructor(height, weight, haircolor) {
        this.height = height
        this.weight = weight
        this.haircolor = haircolor
    }

    walk() {
        console.log("step step step")
    }
    eat() {
        console.log("Chew Chew Chew")
    }
    takeShower() {
        console.log("Scrub Scrub Scrub")
    }

};

class PostalWorker extends Person {
    constructor(height, weight, haircolor) {
        super(height, weight, haircolor)
    }

    deliverMail() {
        console.log("Here is your mail")
    }

    walkHouseToHouse() {
        console.log("Walk to my house")
    }

};

class Chef extends Person {
    constructor(height, weight, haircolor) {
        super(height, weight, haircolor)
    }
    cook() { console.log("Bake a cake") }
    slice() { console.log("Cut Cut Cut") }
}

const postal1 = new PostalWorker("6 feet", 110, "Black" )
console.log(postal1.height)
console.log(postal1.weight)
console.log(postal1.haircolor)
postal1.deliverMail()
postal1.walkHouseToHouse()
postal1.walk()
postal1.eat()
postal1.takeShower()

console.log()
const postal2 = new PostalWorker("5 feet", 120, "Brown")
console.log(postal2.height)
console.log(postal2.weight)
console.log(postal2.haircolor)
postal2.deliverMail()
postal2.walkHouseToHouse()
postal2.walk()
postal2.eat()
postal2.takeShower()
console.log()
const chef1 = new Chef("6 feet", 200, "Blonde")
console.log(chef1.height)
console.log(chef1.weight)
console.log(chef1.haircolor)
chef1.cook()
chef1.slice()
chef1.walk()
chef1.eat()
chef1.takeShower()
console.log()
const chef2 = new Chef("4 feet", 150, "Brown")
console.log(chef2.height)
console.log(chef2.weight)
console.log(chef2.haircolor)
chef2.cook()
chef2.slice()
chef2.walk()
chef2.eat()
chef2.takeShower()