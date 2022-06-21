class CofeeMachine {

    coffee
    water
    milk
    coffeeCounter

    constructor(coffee, water, milk, counter) {
        this.coffee = coffee
        this.water = water
        this.milk = milk
        this.coffeeCounter = counter
    }

    makeCoffee() {
        if (this.coffee >= 7 && this.water >= 100 && this.milk >= 20) {
            this.coffee -= 7
            this.water -= 100
            this.milk -= 20
            this.coffeeCounter++
            console.log('Coffee ready!')
        } else {
            if (this.coffee < 7) {
                console.log('Not enough coffee. Required ' + (7 - this.coffee) + 'grams')

            }
            if (this.water < 100) {
                console.log('Not enough water. Required ' + (100 - this.water) + 'ml')

            }
            if (this.milk < 20) {
                console.log('Not enough milk. Required ' + (20 - this.milk) + 'grams')
            }
        }

    }

    showStatus() {
        console.log('Water leve: ' + this.water)
        console.log('Coffee amount: ' + this.coffee)
        console.log('Milk level: ' + this.milk)
        console.log('Coffees made: ' + this.coffeeCounter)
    }

    refillCoffee() {
        this.coffee = document.getElementById('RefilCoffeeId').value
    }
    refillMilk() {
        this.milk = document.getElementById('RefilMilkId').value
    }

}



let CoffeMachineLeptokarija = new CofeeMachine(100, 1000, 100, 0)
//operacijata e od html fajlot