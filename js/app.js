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

  moveUp() {
    console.log("moving");
    const character = document.querySelector(".character")

    setInterval(() => {
      character.classList.add("char-right");
      character.classList.remove("char-left");
      setTimeout(() => {
        character.classList.add("char-left");
        character.classList.remove("char-right");
      },3000)
    }, 1000)
    // character.classList.add("char-left");
    // setTimeout(() => {
    //   character.classList.remove("char-left");
    //   character.classList.add("char-right");
    // },3000)

  }

  ageUp() {
    if (this.age <= 30) {
      this.age += 2
      this.ageText.innerText = this.age
      // console.log(age);
      setTimeout(() => this.ageUp(), 3000)
    } else {
      if (this.age >= 30) {
      alert("Mr G was shot 9 times!!")
      }
    }

  }

  bordnessUp() {
    if (this.bordness <= 8) {
      this.bordness +=2
      this.bordnessText.innerText = this.bordness
      setTimeout(() => this.bordnessUp(), 2000)
    } else {
      if (this.bordness > 8) {
      alert("Mr G has died for not hustling")
      }
    }
  }

  hungerUp() {
    if (this.hunger <= 9) {
      this.hunger++
      this.hungerText.innerText = this.hunger
      // console.log(age);
      setTimeout(() => this.hungerUp(), 2000)
    } else {
      if (this.hunger > 9) {
      alert("Mr G has died from not being fed!")
      }
    }

  }
  sleepUp() {
    if (this.sleepiness <= 10) {
      this.bordness-1
      this.bordnessText.innerText = this.bordness
      // setTimeout(() => this.hungerUp(), 1000)
    }
    // else {
    //   if (this.sleepiness >= 10) {
    //     alert('Mr G has died because you did not let him rest from hustling and was caught lacking!');
    //   }
    // }
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
    } else {
      if (this.sleepiness >= 10) {
        alert('Mr G has died because you did not let him rest from hustling and was caught lacking!');
      }
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
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/790/309/70/street-home-art-los-angeles-gta-hd-wallpaper-preview.jpg')"
    document.body.style.backgroundSize = "120%"

  }

}

let tamagotchi = new Tamagotchi()

function play() {
  tamagotchi.ageUp()
  tamagotchi.hungerUp()
  tamagotchi.bordnessUp()
  tamagotchi.feed()
  // tamagotchi.sleep()
  tamagotchi.moveUp()

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
