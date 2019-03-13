//JS Clourse

function outer(){
    var m = 10;
    return function(x){
        return x * m;
    }
}

var inner = outer();
console.log(inner(2));

function getCounter() {
    var count = 0;
    function x(){

    }
    return {
        getCount: function(){
            return count;
        },
        setCount: function(c){
            count = c;
        },
        increase: function(){
            count++;
        },
        xxxx: x
    };
}

var myCounter = getCounter();
console.log(myCounter.getCount());
myCounter.setCount(1);
console.log(myCounter.getCount());

var myCounter1 = (function() {
    var count = 0;
    function x(){

    }
    return {
        getCount: function(){
            return count;
        },
        setCount: function(c){
            count = c;
        },
        increase: function(){
            count++;
        },
        xxxx: x
    };
})();

function MyClass() {
    this.x = 100;
    var y = "abc";
    var getX = () => {
        console.log(this.x);
        console.log(y);
    }
        console.log(this.x);
        console.log(y);
    getX();
    this.getY = function(){
        console.log(this.x);
        console.log(y);
    }
}

var myClass = new MyClass();
myClass.getY();

//Singleton
var MySingle = (function(){
    var instance;
    return {
        getInstance: function(){
            if(!instance) {
                instance = new Object();
            }
            return instance;
        }
    }
})()

var ms1 = MySingle.getInstance();
var ms2 = MySingle.getInstance();
console.log(ms1 === ms2);

//set timeout
var myTimeout = setTimeout(function(){
    console.log('Timeout ended');
}, 2000);
clearTimeout(myTimeout);

console.log("after setTimeout");

setInterval(function(){
    console.log("every 2 seconds")
}, 2000);

for(var i = 1; i <= 5; i++){
    setTimeout(handle(i), 0);
}

function handle(index){
    return function(){
        console.log(index);
    }
}