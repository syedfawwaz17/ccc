
class ElectronicItem {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
class Phone extends ElectronicItem {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    getType() {
        return this.type;
    }
}
class SoundSystem extends ElectronicItem {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    getType() {
        return this.type;
    }
}
class MobilePhone extends Phone {
    constructor(name, type, brand) {
        super(name, type);
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}
class CordPhone extends Phone {
    constructor(name, type, brand) {
        super(name, type);
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}
class EarPlugs extends SoundSystem {
    constructor(name, type, brand) {
        super(name, type);
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}
class Stereo extends SoundSystem {
    constructor(name, type, brand) {
        super(name, type);
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }
}

const mobile = new MobilePhone("iPhone 14", "Smartphone", "Apple");
const cordPhone = new CordPhone("Landline Phone", "Corded", "Panasonic");
const earPlugs = new EarPlugs("Noise Cancelling Earplugs", "In-ear", "Sony");
const stereo = new Stereo("Home Theater System", "Surround Sound", "Bose");
console.log(`Mobile Phone: ${mobile.getName()}, Type: ${mobile.getType()}, Brand: ${mobile.getBrand()}`);
console.log(`Cord Phone: ${cordPhone.getName()}, Type: ${cordPhone.getType()}, Brand: ${cordPhone.getBrand()}`);
console.log(`Ear Plugs: ${earPlugs.getName()}, Type: ${earPlugs.getType()}, Brand: ${earPlugs.getBrand()}`);
console.log(`Stereo: ${stereo.getName()}, Type: ${stereo.getType()}, Brand: ${stereo.getBrand()}`);
