function  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function DoTheFirstThing(cb){
    await cb(2000)
    console.log("Task 1 completed")
}

async function DoTheSecondThing(cb){
    await cb(2000)
    console.log("Task 2 completed")
}

async function DoTheThirdThing(cb){
    await cb(2000)
    console.log("Task 3 completed")
}

function doAll(){
    DoTheFirstThing(sleep);
    DoTheSecondThing(sleep);
    DoTheThirdThing(sleep);
};

doAll()