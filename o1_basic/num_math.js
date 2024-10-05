const score = "400";
// let scoreNum = Number(score)
// console.log(typeof (scoreNum))

let scoreNum = new Number(100);
let convertString = scoreNum.toFixed(3)
// let convertString = scoreNum.toLocaleString();
// let convertString = scoreNum.toString();

// console.log( convertString);
// console.log(scoreNum); //datatype object

// let precious = 123.8966;
// console.log(precious.toPrecision(2))

let hundred = 1000000
// console.log(hundred.toLocaleString("pak"))


// ************** MATH *****************
// console.log(Math)
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.1));
// console.log(Math.floor(4.1));
// console.log(Math.floor(Math.random()*2+1));

const min= 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min) +1) + min)



