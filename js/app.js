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
    if (this.bordness <= 8){
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
  sleepUp() {
    if (this.sleepiness <=10) {
      this.bordness-1
      this.bordnessText.innerText = this.bordness
    }
  }

  feed() {
    this.hunger--
    if (this.hunger < 10)
    this.hungerText.innerText = this.hunger
    this.bordness-=2
    this.bordnessText.innerText = this.bordness
    if (this.sleepiness < 10) {
      this.sleepiness+=2
      this.sleepinessText.innerText = this.sleepiness
    }
  }

  sleep() {
    this.hunger = 0
    this.hungerText.innerText = this.hunger
    this.bordness = 0
    // if (this.bordness > 9) {
    //   alert("Mr G has died!")
    // }
    this.bordnessText.innerText = this.bordness
    this.sleepiness = 0
    this.sleepinessText.innerText = this.sleepiness
  }

}

let tamagotchi = new Tamagotchi()

function play() {
  tamagotchi.ageUp()
  tamagotchi.hungerUp()
  tamagotchi.bordnessUp()
  tamagotchi.feed()
  tamagotchi.sleep()

}



// function Sleep() {
//   // this.SleepText.inne = this.Sleep
// //   // tamagotchi.hungerUp()
//   this.hunger = 0
//
//   this.hungerText = document.getElementById('hunger')
// //   // tamagotchi.bordnessUp()
//   this.bordness = 0
//   // this.bordnessText = document.getElementById('bordness')
//   this.sleepiness = 0
// //   console.log(reset);
//   this.sleepinessText = document.getElementById('sleepiness')
// }
