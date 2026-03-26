// Prototype in  JS
const employee = {
  calcTax(){
    console.log("Tax rate is 10%");
  },
};
const bhupendra = {
    name : "Bhupendra",
    salary : 50000,
}; 
bhupendra.__proto__ = employee;

// Class in JS
class Toyotacar{
    constructor (){
        console.log("Creating a car");
    }
    start(){
        console.log("car is starting");
    }
    stop(){
        console.log("car is stopping");
    }
    setBrand(brand){
        this.brand = brand;
    }
}
let fortuner = new Toyotacar();
console.log(fortuner);

let innova = new Toyotacar();
console.log(innova);


// Inheritence in JS
class Person{
    constructor(name){
        this.species = "Human";
        this.name = name;
    }
    sleep(){
        console.log("Person can sleep");
    }
    eat (){
        console.log("Person can eat");
    }
}
class Enginner extends Person{
    constructor(name){
        super(name);
    }
    work(){
        console.log("Enginner can build software");
    }
    
}
let obj = new Enginner("Bhupendra");