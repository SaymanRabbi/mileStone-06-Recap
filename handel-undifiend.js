// const family = {
//     father: { names: "Abbu", Age: 52, id: 01, Behave: "hot" },
//     mother: { name: "Ammu", age: 42, id: 02, Behave: "cool" },
//     member: 7,
//     son: 4,
//     sister:"none"
// }
// console.log(family.father?.sayman?.rabbi);
// map on array ======
const array = [2, 4, 5, 6, 66, 88, 99];
const dubbedArray = array.map(x => x * x);
// console.log(dubbedArray);
// =======filter on array======
const filter = array.filter(x => x > 20);
// console.log(filter)
// find on array===
const find = array.find(x => x > 20);
// console.log(find);
const maxNumber = Math.max(...array);
// console.log(maxNumber);
const minNumber = Math.min(...array, 1, 0);
// console.log(minNumber);
const sliceNumber = array.slice(0, 2);
// console.log(sliceNumber);
// array splice
// const arraySplices = array.splice(0, 3,...[2,3,90,78,69]);
// console.log(arraySplices,array);
// const arraySplice = array.splice(0,3);
// console.log(arraySplice,array);
const family = {
    father: { names: "Abbu", Age: 52, id: 01, Behave: "hot" },
    mother: { name: "Ammu", age: 42, id: 02, Behave: "cool" },
    member: 7,
    son: 4,
    sister:"none"
}
// console.log(family.father.rabbi?.we);
