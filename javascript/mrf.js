// map 
// syntax
// variablename.map((value,index,acctualarray))

let m =[10,20,30,40,50]
let add=m.map((v,ind,acc)=> v*2)
console.log(add)

// reduce
let a = [10,20,30,40];
let b =a.reduce((x,z)=>x+z)
console.log(b);

// filter

let mul =[11,66,82,97,354,662,2,368,256,];
let fil =mul.filter((i,o,p)=> o>5)
console.log(fil);
