class Tamagotchi {
  constructor() {
    this.age = 0
    this.ageText = document.getElementById('age')
    this.hunger = 0
    this.hungerText = document.getElementById('hunger')
  }

  ageUp() {
    if (this.age <= 30) {
      this.age += 2
      this.ageText.innerText = this.age
      // console.log(age);
      setTimeout(() => this.ageUp(), 3000)
    }
  }

  hungerUp() {
    if (this.hunger <= 10) {
      this.hunger++
      this.hungerText.innerText = this.hunger
      // console.log(age);
      setTimeout(() => this.hungerUp(), 2000)
    }
  }

  feed() {
    this.hunger--
    this.hungerText.innerText = this.hunger
  }
}

let tamagotchi = new Tamagotchi()

function play() {
  tamagotchi.ageUp()
  tamagotchi.hungerUp()
}
