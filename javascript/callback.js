// callback 

function sync (callback){
    console.log("task 1");
    callback();
}
function async(callback) {
    console.log("task 2");
    
}
sync(async)

// callback hell

function dog(callback) {
    setTimeout(() => {
        console.log("you walk the dog");
        callback();
    }, 5000);
  
}
function clean(callback) {
    setTimeout(() => {
        console.log("you clean the kitchan");
        callback();
    }, 3000);
   
}
function trash(callback) {
    setTimeout(() => {
        console.log("you put the trash out");
    callback()
    }, 1000);
    
}
dog(()=>{
    clean(()=>{
        trash(()=>{console.log("work completed");
        })
    })
})



