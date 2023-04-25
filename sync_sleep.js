const co = require('co');

function * sleep(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
    return  "Task completed"
}

function DoTheFirstThing(cb) {
    let res =  co.wrap(function * my_sleep() {
        yield sleep(2000)
    })
    res().then(()=>console.log("First")) 
}

function DoTheSecondThing(cb){
    let res =  co.wrap(function * my_sleep() {
        yield sleep(2000)
    })
    res().then(()=>console.log("Second")) 
}

function DoTheThirdThing(cb){
    let res =  co.wrap(function * my_sleep() {
        yield sleep(2000)
    })
    res().then(()=>console.log("Third")) 
}

function doAll(){
    DoTheFirstThing(2000);
    DoTheSecondThing(2000);
    DoTheThirdThing(2000);
};


doAll()