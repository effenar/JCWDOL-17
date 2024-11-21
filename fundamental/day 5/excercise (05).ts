const arr:number [] = [12,5,23,18,4,45,32]
const tertinggi:number = Math.max.apply (Math, arr)
const terendah:number = Math.min.apply (Math, arr)

console.log(tertinggi);
console.log(terendah);
