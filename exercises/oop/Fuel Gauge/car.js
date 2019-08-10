class FuelGauge {
  constructor(amount) {
    this.amount = amount;
  }

  decrease(number) {
    if (this.amount <= FuelGauge.minAmount) {
      throw new Error("Fuel tank is Empty!");
    } else {
      this.amount -= number;
    }
  }

  increase(number) {
    if (this.amount >= FuelGauge.maxAmount) {
      throw new Error("Fuel Tank is Full!");
    } else {
      this.amount += number;
    }
  }

  report() {
    console.log(`There are ${this.amount}L of fuel in the tank`);
  }
}

FuelGauge.minAmount = 0;
FuelGauge.maxAmount = 70;

class Odometer {
  constructor(mileage, fuelGauge) {
    this.mileage = mileage;
    this.fuelGauge = fuelGauge;
    this.counter = 0;
  }

  report() {
    // if (this.counter >= 10) {
    console.log(`Current mileage is ${this.mileage}km`);
  }

  increase() {
    if (this.mileage + 1 < Odometer.maxMileage) {
      this.mileage = this.mileage + 1;
      this.counter += 1;
    } else {
      this.mileage = 0;
    }

    if (this.counter == 10) {
      this.fuelGauge.decrease(1);
      this.counter = 0;
    }
  }
}

Odometer.minMileage = 0;
Odometer.maxMileage = 999999;

const fuelGauge = new FuelGauge(10);
const odometer = new Odometer(999999, fuelGauge);

for (let i = 0; i <= 10; i++) {
  // console.log('Filling up...')
  fuelGauge.increase();
}

for (let i = 0; i < 100; i++) {
  // console.log('Driving..')
  odometer.increase();
}

fuelGauge.report(); //10L in the tank
odometer.report(); //100_000 milage

module.exports = { Odometer, FuelGauge };

// module.exports = FuelGauge
// module.exports = Odometer
