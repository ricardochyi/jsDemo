//JS prototype
function A() {
    this.value = 10;
    this.getValue = function() {
        return this.value;
    };
}
var a1 = new A();
var a2 = new A();
console.log(a1.getValue() == a2.getValue());
console.log(a1.getValue() === a2.getValue());
console.log(a1.getValue);
console.log(a2.getValue);
console.log(a1.getValue == a2.getValue);

function B() {
    this.value = 20;
}
B.prototype.getValue = function() {
    return this.value;
}
B.prototype.x = 20;
var b1 = new B();
var b2 = new B();
console.log(b1.getValue == b2.getValue);
b1.x = 30;
console.log(b1.x);
console.log(b2.x);
console.log(b2.value);

//B.prototype = new Object();
//B.prototype._proto = Object.prototype

//prototype chain: b1 -> B.prototype(Object) -> Object.prototype -> null
console.log(Object.getPrototypeOf(b1) === B.prototype);
console.log(Object.getPrototypeOf(B.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

//prototype chain: B -> function.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(B) === Function.prototype);

//new String()
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};
console.log("abc".reverse());


//Inheritance
function Parent() {
    this.name = "Parent";
}
Parent.prototype.sayHello = function(){
    return "Hello, " + this.name;
}

function Child(){

}

var p = new Parent();
Child.prototype = p;

var c = new Child();
console.log(c.name);
console.log(c.sayHello());

function Base() {
    this.name = "Base";
}
Base.prototype.value = 100;
function Sub(){
    Base.call(this);
}
Sub.prototype = Object.create(Base.prototype); //{}.__proto__ = Base.prototype;
Sub.prototype.constructor = Sub;

//sub(__proto__) -> Sub.prototype = {} -> Base.prototype
var sub = new Sub();
console.log(sub.name);
console.log(sub.value);
var sub1 = new Sub();

console.log(Base.prototype.isPrototypeOf(sub));
console.log(sub instanceof Base);
console.log(sub instanceof Sub);
