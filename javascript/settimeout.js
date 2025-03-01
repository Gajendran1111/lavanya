// settimeout 
// asynchronous

function set (){
    setTimeout(() => {
        console.log("come back");
        
    },5000);
}
function out (){
    setTimeout(() => {
        console.log("quick");
        
        
    }, 2000);
}
function time() {
    setTimeout(() => {
        console.log("fast");
        
    }, 1000);
    
}
set();
out();
time();



