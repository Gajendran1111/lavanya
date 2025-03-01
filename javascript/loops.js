// loops 

// for loop

// syntax 
// for (initilization;condition;increment,decrement);

for (let a=3;a<=8;a++){
    console.log("java")
};

// while loop

let b = 1;
while(b<=5){
    console.log("javascript");
    b++
};

// do while 

let d =5;
do{
    console.log(d);
    d++
}while (d<=10);

// for of 
let fruit =["apple","orange","mango","banana","graps"];
for(seprate of fruit){
    console.log(seprate.toUpperCase());
    
}

// for in 

let i ={
    name:"jaykumar",
    age:25,
    place:"chennai"
}
for(details in i){
    console.log(details+":"+i[details])
}