// console.log("This is my first node demo");
let s1={
    name:"Fawwaz",
    gender:"M",
  //Above are state of my object
  exam:function(){
    console.log("You are passed");
  }
};
console.log(s1);
console.log(s1.exam());

let b1={
    item:"samosa",
    price:25,
    bill:()=>{
        console.log("Your bill generated");
    }
}

s1.__proto__=b1;
