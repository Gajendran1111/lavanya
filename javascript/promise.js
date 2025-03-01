// // promise 

// function dog (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogwalk =true
//             if (dogwalk){
//                 resolve ("you walk the dog")
//             }
//             else{
//                 reject("you did not walk the dog")
//             }
           
//         }, 5000);
      
//     })
// }
// function clean() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const cleankit= true
//             if (cleankit){
//                 resolve("you clean the kitchen")
//             }
//             else{
//                 reject("you dit't clean the kitchen")
//             }
            
//         },3000);
      
//     })
// }
// function trash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashout = false
//             if (trashout){
//                 resolve("put the trash out")
//             }
//            else {
//             reject("you did't put the trash out")
//            }
//         }, 1000);
        
//     })
// }
// // dog()
// // .then(value => {console.log(value);return clean ()})
// // .catch(value => {console.log(value);return trash ()})
// // .catch(value => {console.log(value);console.log("work completed");})

// async function asy() {
//     try {
//         const a = await dog ();
//         console.log(a);
//         const b =await clean ();
//         console.log(b);
//         const c = await trash ();
//         console.log(c);  
//     } catch (error) {
//         console.log(error);
        
//     }

// }
// asy ();



// promise 

function dog() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const dogwalk = true
    if (dogwalk){
    resolve("you walk the dog");
    }
    else {
    reject("you did not walk the dog")
    }
    }, 5000);
})
    
}
function clean() {
return new Promise((resolve, reject)=>{
     setTimeout(() => {
     const cleankit = true
     if (cleankit){
     resolve("you clean the kitchan");
     }
      else{
      reject("you did not clean the kitchan")
      }
        
    }, 3000);
})
     
}
function trash() {
return new Promise((resolve, reject) => {
    const trashout = false
    if (trashout){
    resolve("you put the trash out");
    }
    else{
    reject("you did not put the trash out")
    }
    setTimeout(() => {
      
    }, 1000);
})
    
    
}

// dog ()
// .then(value => {console.log(value); return clean()})
// .catch(value => {console.log(value); return trash()})
// .then(value => {console.log(value);console.log("done all the works")})

async function aa() {
try {
const a = await dog ()
console.log(a);
const b = await clean()
console.log(b);
const c = await trash ()
console.log(c);
} catch (er) {
    console.log(er);    
}
}
aa();




































