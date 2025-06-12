class Dog {
    constructor(name, breed, price) {
        this.name = name;
        this.breed = breed;
        this.price = price;
    }

    bark() {
        console.log("Barking dogs never bite", this.name, this.breed, this.price);
    };
    bite() {
        console.log("Bite.......");
    }

}

d1 = new Dog("Rocky", "German shephard", 1000);
d2 = new Dog();

d1.bark()

class Bike {
    constructor(brand, cc, abs, gears, maxSpeed) {
        this.brand = brand;
        this.cc = cc;
        this.abs = abs;
        this.gears = gears;
        this.maxSpeed = maxSpeed;

    }

    topspeed() {
        console.log("Top speed of bike is ", this.maxSpeed);
    }
}

b1 = new Bike("Suzuki", 1000, true, 6, 350);
console.log(b1.topspeed());