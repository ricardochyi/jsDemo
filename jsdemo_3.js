var assert = require("assert");

var alice = {
    name: "Alice",
    age: 20,
    hello: function(){
        return "Hello, " + this.name;
    }
};

var keys = Object.keys(alice);
console.log(keys);
keys.forEach(function(key, index){
    console.log(key);
    if(typeof alice[key] ==="function"){
        console.log(alice[key]());
    }else{
        console.log(alice[key]);
    }
});

var props = Object.getOwnPropertyNames(alice);
console.log(props);

var arr = [1, "a", 3, {"name": "bob"}, 5];
console.log("Keys", Object.keys(arr));
console.log("GotOwnPropertyName", Object.getOwnPropertyNames(arr));

//Accessor and Mutator
var bob = {
    _name: "bob",
    get name(){
        return this._name;
    },
    set name(str){
        this._name = str;
    }
}
console.log(bob._name);
bob.name = "Steve";
console.log(bob.name);
console.log(bob._name);
console.log(Object.getOwnPropertyDescriptors(bob));