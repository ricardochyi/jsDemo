//js basic
var assert = require("assert");

assert.ok(true);
assert.equal(1,1);

//false value: undefined, null, false, 0, '', NaN
assert.ok(!false);
assert.ok(!undefined);
assert.ok(!0);
assert.ok(!null);
assert.ok(!'');
assert.ok(!NaN);
assert.ok(!(NaN == NaN));

assert.ok(isNaN(NaN));

//local vs global
function localTest() {
    var a = 1;
    b = 2;
}
localTest();
console.log(b);

//self-invoke
(function(e){
    console.log(e);
})(3);

function avg(a, b){
    return (a + b) / 2;
}
console.log(avg(1,2,3));

//anonymous recursive
var factorial = function(n) {
    if(n == 0) {
        return 1;
    }else {
        return n * arguments.callee(n-1);
    }
}
console.log(factorial(9));

//hoisting
(function(){
    hello();
    //hello1();
    console.log(i);
    console.log(j);
    for(var i = 0; i < 5; i++){}
    console.log(i);
    var j;
    function hello(){
        console.log('hello');
    }
    var hello1 = function(){
        console.log('hello1');
    }
})();