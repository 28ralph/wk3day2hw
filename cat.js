class Cat {
    constructor(ears, limbs, eyes){
        this.ears = ears
        this.limbs = limbs
        this.eyes = eyes
    }

    eat(){
        console.log("chew chew")
    }
    walk() {
        console.log("step step step")
    }
    chaseMouse(){
        console.log("You can't get away from me")
    }
}

const cat1 = new Cat("ears1","limbs1","eyes1")

console.log(cat1.ears)
console.log(cat1.limbs)
console.log(cat1.eyes)

cat1.eat()
cat1.walk()
cat1.chaseMouse()

const cat2 = new Cat("ears2","limbs2","eyes2")

console.log(cat2.ears)
console.log(cat2.limbs)
console.log(cat2.eyes)

cat2.eat()
cat2.walk()
cat2.chaseMouse()

// Assignment 2

class Pirate {
    constructor(hook, beard, sword) {
        this.hook = hook
        this.beard = beard
        this.sword = sword
    }

    swordFight() {
        console.log("advance sword")
    }
    walkThePlank() {
        console.log("Jump from ship")
    }
    findTreasureChest() {
        console.log("Found gold!")
    }

}

let jollyRoger = [3]

jollyRoger[0] = new Pirate("hook1", "beard1", "sword1")
jollyRoger[1] = new Pirate("hook2", "beard2", "sword2")
jollyRoger[2] = new Pirate("hook3", "beard3", "sword3")

for (let i = 0; i < jollyRoger.length; i++) {
    console.log(jollyRoger[i].hook)
    console.log(jollyRoger[i].beard)
    console.log(jollyRoger[i].sword)
}

let blackPearl = [3]

blackPearl[0] = new Pirate("hook4", "beard4", "sword4")
blackPearl[1] = new Pirate("hook5", "beard5", "sword5")
blackPearl[2] = new Pirate("hook6", "beard6", "sword6")

for (let i = 0; i < blackPearl.length; i++) {
    console.log(blackPearl[i].hook)
    console.log(blackPearl[i].beard)
    console.log(blackPearl[i].sword)
}