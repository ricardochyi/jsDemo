//JS:this

//constructor function
function Vehicle() {
    this.price = 1000; //price = 1000 => global.price = 1000;
}

var v = new Vehicle();
console.log(v.price);
console.log('after now ', global.price);

var u = Vehicle();//this bind to the global after invoking
console.log(u);
console.log('after functin invoke', global.price);

//safe constructor
function Person(name) {
    if(!(this instanceof Person)){
        return new Person(name);
    }
    this.name = name;
}
console.log(Person('bob'));

var bob = {
    name: "Bob",
    hello: function(a,b){
        return "Hello " + this.name;
    }
};

console.log(bob.hello());
var myHello = bob.hello;
console.log(myHello(1,2));
