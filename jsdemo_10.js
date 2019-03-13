//JS Promise

function task1(){
    console.log("Executing task1");
}

function task2(){
    console.log("Executing task2");
}

function task3(){
    console.log("Executing task3");
}

function t1() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            task1();
            resolve("Task1 is finished")
        },500);
    })
}

function t2() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            task2();
            resolve("Task2 is finished");
        },1000)
    })
}

function t3() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            task3();
            resolve("Task3 is finished");
        })
    })
}

var promise = t1();
promise.then((res) => {
    console.log(res);
    return t2();
}, (err) => {

}).then(res => {
    console.log(res);
    return t3();
}).then(res => {
    console.log(res);
}, (err) => {
    
})