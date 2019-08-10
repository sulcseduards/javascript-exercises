// import { fuelGauge, Odometer } = require("./fuel.js")


// class FuelGauge {
//     amount: number;
//     static minAmount: number;
//     static maxAmount: number;
//     constructor(amount) {
//         this.amount = amount;
//     }

//     decrease(amount) {
//         if (this.amount - amount > FuelGauge.minAmount) {
//             this.amount--
//             console.log(amount)
//         }
//     }

//     increase(amount) {
//         if (this.amount + amount <= FuelGauge.maxAmount) {
//             this.amount++
//             console.log(amount)
//         }
//     }

//     report() {
//         if (this.amount === 10) {
//             // alert(`Low Fuel!`)
//         }
//         console.log(`Fuel left: ` + this.amount + ` liters.`)
//     }
// }

// FuelGauge.minAmount = 0
// FuelGauge.maxAmount = 70

// class Odometer {
//     milage: string;
//     fuelGauge: string;
//     counter: number;
//     static maxMilage: string;
//     constructor(milage, fuelGauge) {
//         this.milage = milage;
//         this.fuelGauge = fuelGauge;
//         this.counter = 0;
//     }

//     report() {
//         console.log(`You have driven ` + this.milage + ` kilometers!`)
//     }

//     increase() {
//         if (this.milage + 1 <= Odometer.maxMilage)
//             this.milage++;
//         this.counter++;
//         if (this.milage === Odometer.maxMilage) {
//             this.milage = 0;
//         }

//         if (this.counter == 10) {
//             this.fuelGauge.decrease();
//             this.counter = 0;
//         }


//     }

// }


// Odometer.minMilage = 0
// Odometer.maxMilage = 999999


// const fuelGauge = new FuelGauge(10)
// const odometer = new Odometer(999998, fuelGauge)

// for (let i = 0; i < 10; i++) {
//     console.log('Filling up...')
//     fuelGauge.increase()
// }

// for (let i = 0; i < 100; i++) {
//     console.log('Driving..')
//     odometer.increase()
// }

// fuelGauge.report() //10L in the tank
// odometer.report() //100_000 milage
