class State {
  constructor(seconds, minutes, hours) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  static now() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;
    return new State(seconds, minutes, hours);
  }
}

class Clock {
  constructor(state) {
    this.state = state;
    this.tick = this.tick.bind(this);
    requestAnimationFrame(this.tick);
  }

  tick() {
    this.setState(State.now());
    requestAnimationFrame(this.tick);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    const { seconds, minutes, hours } = this.state;

    // Render second hand
    document.querySelector(".second-hand").style.transform
      = `rotate(${Math.floor(seconds) / 60 * 360}deg)`;

    // Render minute hand
    document.querySelector(".minute-hand").style.transform
      = `rotate(${minutes / 60 * 360}deg)`;

    // Render hour hand
    document.querySelector(".hour-hand").style.transform
      = `rotate(${hours / 12 * 360}deg)`;
  }
}

const CLOCK = new Clock();
