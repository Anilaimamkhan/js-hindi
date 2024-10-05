// ******* array *********

// function calculateCart(val1,val2, ...num1){
// console.log(val1,val2,num1)
// }
// calculateCart(200, 400, null,800)

// *********** obj ************
let user = {
    id:1,
    name:"anila",
    age:20
}

function objFun(num){
 return `${num.id}, lena hai or ${num.age}`
}
// console.log(objFun(user))
// OBJECT KO AESE BHI PASS KR SKTE HAI
let a = objFun({
 id:1,
 name:"anila",
 age:20
})
console.log(a)
