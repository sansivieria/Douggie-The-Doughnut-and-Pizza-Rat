// hero class

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
  fightAgain() {
    console.log(this.name + "used Sugar Shock for 10HP");
    console.log(target.name + " was hit! his HP is now " + target.health--10);
  }
}

let doug = new Hero("Dougie the Donut");

// enemy class

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
  }
  talkSmack() {
    let quote = this.catchPhrases[Math.floor(Math.random()*2)];
    console.log(quote);
  }
  announceHealth() {
    console.log(this.name + " HP: " + this.health);
  }
  fight() {
    console.log("i\'m gonna flatten you like a slice of pepperoni!");
  }
  fightAgain() {
    console.log(this.name + "used Cheese Grease for 10HP")
    console.log(target.name + " was hit! his HP is now " + target.health--10);
  }
}

let rat = new Enemy("Pizza Rat")

// walking down the street

console.log("Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!")
doug.talkSass();
rat.talkSmack();
doug.announceHealth();
rat.announceHealth();

// fight begins

console.log("Dougie and Pizza rat start fighting!");
doug.fightAgain(rat);
rat.announceHealth();
rat.fightAgain(doug);
doug.announceHealth();
