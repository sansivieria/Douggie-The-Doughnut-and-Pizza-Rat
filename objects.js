// ze hamster class and ze methods

class Hamster {
  constructor(owner, name){
    this.owner = owner
    this.name = name
    this.price = 15
  }
  wheelRun() {
    console.log('squeak squeak')
  }
  eatFood() {
    console.log('nibble nibble')
  }
  getPrice() {
    return this.price
  }
}


// ze person and ze methods
// edited code for creating a story for Timmy

class Person {
  constructor(name, age, height, weight, mood) {
    this.name = name;
    this.age = 0 || age;
    this.height = 0 || height;
    this.weight = 0 || weight;
    this.mood = 0 || mood;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log('hello, ' + this.name);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount+=10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood+=10;
    this.bankAccount-=hamster.getPrice();
  }
}

// story time with mr Timmy

let timmy = new Person('Timmy', 5, 4, 80, 30);

const ageFive = (name) => {
  for (let w = 1; w < 6; w++) {
    console.log(name.ageUp());
  }
}

const eatFive = (name) => {
  for (let c = 1; c < 6; c++) {
    console.log(name.eat());
  }
}

const workout = (name) => {
  for (let v = 1; v < 6; v++) {
    console.log(name.exercise());
  }
}

const nineLives = (name) => {
  for (let b = 1; b < 10; b++) {
    console.log(name.ageUp());
  }
}

const teenAngst = (name) => {
  for (let n = 1; n < 16; n++) {
    console.log(name.ageUp());
  }
}

// timmy's journey

console.log(timmy);
ageFive(timmy);
console.log("Timmy is 5 years old");
console.log(timmy);
eatFive(timmy);
console.log("Timmy ate 5 times");
console.log(timmy);
workout(timmy);
console.log("Timmy worked out");
console.log(timmy);
nineLives(timmy);
console.log("Timmy starts freshman year");
console.log(timmy);

let gus = new Hamster("Timmy", "Gus");
timmy.buyHamster(gus);
console.log("Timmy got a new friend");
console.log(timmy);
teenAngst(timmy);
console.log("Timmy is wishing he did not think about growing up now");
console.log(timmy);
timmy.eat();
timmy.eat();
console.log("Timmy ate today")
console.log(timmy);
timmy.exercise();
timmy.exercise();
console.log("Timmy worked out today")
console.log(timmy);
