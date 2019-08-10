import { ModuleMap } from "jest-haste-map";
import { isModuleSpecifier } from "@babel/types";

/**
 * Clock
 * Implement a clock that handles times without dates.
 *
 * You should be able to add and subtract minutes to it.
 *
 * Two clocks that represent the same time should be equal to each other.
 */
class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = 0;
    this.minutes = 0;
    this.time = hours * 60 + minutes;
  }

  set time(mins) {
    const { hours, minutes } = this;

    this.hours = (24 + ((hours + Math.floor((minutes + mins) / 60)) % 24)) % 24;
    this.minutes = (60 + ((minutes + mins) % 60)) % 60;
  }

  get time() {
    return this.hours * 60 + this.minutes;
  }

  toString() {
    const hours = this.hours < 10 ? `0${this.hours}` : this.hours;
    const minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;

    return `${hours}:${minutes}`;
  }

  plus(mins) {
    this.time = mins;
    return this;
  }

  minus(mins) {
    this.time = -mins;
    return this;
  }

  equals(clock) {
    return this.time === clock.time;
  }
}

module.exports = Clock;
