class Demo {
    constructor(n) {
        this.name = n;
    }
    set name(v) {
        if(typeof v=="string")
        this._name = v;
    else
    console.log("It shud not only be a number");
    }
    get name() {
        return this._name;
    }
}
d1 = new Demo("Rohit45");
console.log(d1.name);
