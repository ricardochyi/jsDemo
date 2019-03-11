//JS Object property attributes and object status.

//A property has 3 attributesL enumerable, writable, configurable
var alice = {
    "name": "Alice"
};
alice.age = 30; // all 3 attrubutes are true
console.log(Object.keys(alice));
alice.age = 40;

Object.defineProperty(alice, "salary", {value: 1000, enumerable:true})// all 3 attrubutes are false
//delete alice.name;
console.log(Object.keys(alice));
alice.salary = 2000;
console.log(alice.salary);

//Three status of an object: extensible, sealed, frozen
var obj = {
    x: "abc"
};
console.log('extensible: ', Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log('extensible: ', Object.isExtensible(obj));
obj.y = 100;
console.log(obj.y);

//seal cannot add / delete 
console.log('sealed', Object.isSealed(obj));
Object.seal(obj);
console.log('sealed', Object.isSealed(obj));
delete obj.x;
console.log(obj);

//frozen means we cannot update its property
console.log('frozen', Object.isFrozen(obj));
Object.freeze(obj);
console.log('frozen', Object.isFrozen(obj));
obj.x = "def";
delete obj.x;
console.log(obj);

//Note: all primitive types are frozen
var s = "abc";
console.log('frozen', Object.isFrozen(s));
