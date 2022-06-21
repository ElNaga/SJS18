class Car {
    model
    color
    yearOfMan
    maxSpeed
    currentSpeed

    constructor(model, color, yearOfMan, maxSpeed, currentSpeed) {
        this.model = model
        this.color =     color
        this.yearOfMan =     yearOfMan
        this.maxSpeed =     maxSpeed
        this.currentSpeed =     currentSpeed
    }

    accelerate(step) {
        let newSpeed = this.currentSpeed + step
        if (newSpeed >= this.maxSpeed){
            this.currentSpeed = this.maxSpeed
            console.log('Alert! Maximum speed reached!')
        }else {
            this.currentSpeed = this.currentSpeed + step
        }
    }

    decelerate(decel) {
        let newSpeed = this.currentSpeed - decel
        if (newSpeed <= 0) {
            this.currentSpeed = 0
            console.log('Vihicle is stoped.')
        } else {
            this.currentSpeed = newSpeed
        }
    }
    //if max speed - accelerate - warning: cant go past this
    //accelerate
    //decelerate metod
    //if speed=0 - car is stoped
}

const Jeep = new Car('jeep','white',2020,200,0)
setInterval(() => {
    Jeep.accelerate(30)
    console.log(Jeep.currentSpeed)
},3000)