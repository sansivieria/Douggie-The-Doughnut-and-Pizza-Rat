// hero

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
  }
  talkSass() {
    let quote = this.catchPhrases[Math.floor(Math.random()*2)];
    console.log(quote);
  }
  announceHealth() {
    console.log(this.name + " HP: " + this.health);
  }
  fight() {
    console.log("i\'m ready to rumble");
  }
}

let doug = new Hero("Dougie the Donut");

// enemy
