//JS:this
var assert = require('assert');
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

function f2(){
    'use strict';
    return this;
}

assert.ok(f2()===undefined);

//apply call bind
console.log(myHello.apply(bob, [1,2]));
console.log(myHello.call(bob, 1, 2));
console.log(myHello.bind(bob)(1,2));

(function(){
    var order = {
        price: 100,
        calculate: function(){
            var that = this;
            return {
                name: "table",
                getTotalPrice: function(qty) {
                    return qty * that.price; //that -> order
                }
            };
        },
        calculate2: function(){
            return {
                name: "table",
                getTotalPrice: function(qty) {
                    return qty * this.price;
                }
            };
        }
    };

    var calc = order.calculate();
    console.log(calc);
    console.log(calc.name);
    console.log(calc.getTotalPrice(1));
    var calc2 = order.calculate2();
    console.log(calc2.getTotalPrice.call(order, 1));
    console.log(calc2.getTotalPrice.apply(order, [1]));
    console.log(calc2.getTotalPrice.bind(order)(1));
})();

//open-close principal: open for extension, close for modification
function checkout(price, qty, type){
    this[type] = this[type] || 1;
    return price * qty * this[type];
}

var member = {
    "VIP": 0.7,
    "Premium": 0.8,
    "Super VIP": 0.5
};

console.log(checkout.call(member, 100, 5, "VIP"));
