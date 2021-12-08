class Tamagotchi {
  constructor() {
    this.age = 0
    this.ageText = document.getElementById('age')
    this.hunger = 0
    this.hungerText = document.getElementById('hunger')
    this.bordness = 0
    this.bordnessText = document.getElementById('bordness')
    this.sleepiness = 0
    this.sleepinessText = document.getElementById('sleepiness')
  }

  ageUp() {
    if (this.age <= 30) {
      this.age += 2
      this.ageText.innerText = this.age
      // console.log(age);
      setTimeout(() => this.ageUp(), 3000)
    }
  }
  bordnessUp() {
    if (this.bordness <= 10){
      this.bordness +=2
      this.bordnessText.innerText = this.bordness
      setTimeout(() => this.bordnessUp(), 2000)
    }
  }

  hungerUp() {
    if (this.hunger <= 9) {
      this.hunger++
      this.hungerText.innerText = this.hunger
      // console.log(age);
      setTimeout(() => this.hungerUp(), 2000)
    }
  }

  feed() {
    this.hunger--
    this.hungerText.innerText = this.hunger
    this.bordness-=2
    this.bordnessText.innerText = this.bordness
    this.sleepiness+=2
    this.sleepinessText.innerText = this.sleepiness
  }
}

let tamagotchi = new Tamagotchi()

function play() {
  tamagotchi.ageUp()
  tamagotchi.hungerUp()
  tamagotchi.bordnessUp()
  tamagotchi.sleep()
}
