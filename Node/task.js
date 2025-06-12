class Person {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
    console.log(`name of the person is ${this.name} Designation is ${this.designation}`);
  }

  learn() {
    console.log(`Person ${this.name} learns coding`);
  }
  walk() {
    console.log(`Person ${this.name} walks`);
  }
  eats() {
    console.log(`Person ${this.name} eats`);
  }
}

class Programmer extends Person {
  constructor(name, designation, cname) {
    super(name, designation);  // ✅ call super once with all args
    this.cname = cname;
    console.log(`Programmer ${this.name}, ${this.designation}, works at ${this.cname}`);
  }

  learn() {
    console.log(`Programmer ${this.name} learns coding`);
  }
  walk() {
    console.log(`Programmer ${this.name} walks`);
  }
  eats() {
    console.log(`Programmer ${this.name} eats`);
  }
  code() {
    console.log(`Programmer ${this.name} codes`);
  }
}

class Dancer extends Person {
  constructor(name, designation, style) {
    super(name, designation);
    this.style = style;
    console.log(`Dancer ${this.name}, ${this.designation}, style: ${this.style}`);
  }

  learn() {
    console.log(`Dancer ${this.name} learns dance`);
  }
  walk() {
    console.log(`Dancer ${this.name} walks`);
  }
  eats() {
    console.log(`Dancer ${this.name} eats`);
  }
  dance() {
    console.log(`Dancer ${this.name} dances`);
  }
}

class Singer extends Person {
  constructor(name, designation, genre) {
    super(name, designation);
    this.genre = genre;
    console.log(`Singer ${this.name}, ${this.designation}, genre: ${this.genre}`);
  }

  learn() {
    console.log(`Singer ${this.name} learns singing`);
  }
  walk() {
    console.log(`Singer ${this.name} walks`);
  }
  eats() {
    console.log(`Singer ${this.name} eats`);
  }
  sing() {
    console.log(`Singer ${this.name} sings`);
  }
}

// Test these
let person1 = new Person("Syed", "Coder");
let programmer1 = new Programmer("Fawwaz", "SDE 3", "Virtusa");
let dancer1 = new Dancer("Abhinav", "Professional Dancer", "Mujra");
let singer1 = new Singer("Dopa", "Mass", "Paas");
