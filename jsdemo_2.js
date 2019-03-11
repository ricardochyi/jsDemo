var assert = require('assert');

var test = function(){
    console.log("test");
};
function testWrap(x) {
    if(typeof x === "function"){
        x();
    }
}

testWrap(test);

var x = Object(100);
assert.equal(x, 100);

function isObject(obj){
    return obj === Object(obj);
}
console.log(isObject(123));