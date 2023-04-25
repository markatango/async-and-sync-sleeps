function sleep(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

async function DoTheFirstThing(cb){
    await cb(5000)
    console.log("Task 1 completed")
}

async function DoTheSecondThing(cb){
    await cb(5000)
    console.log("Task 2 completed")
}

async function DoTheThirdThing(cb){
    await cb(5000)
    console.log("Task 3 completed")
}

function doAll(){
    DoTheFirstThing(sleep);
    DoTheSecondThing(sleep);
    DoTheThirdThing(sleep);
};

doAll()