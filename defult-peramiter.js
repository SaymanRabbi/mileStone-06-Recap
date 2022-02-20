// ======Default Pera Miter======
function defaultPeraMiter(num1, num2 = 0) {
    const sum = num1 + num2;
    return sum;
}
const setValue = defaultPeraMiter(15,20,10);
// console.log(setValue);
// argument=====
function sayman(num1, num2, num3) {
    let sum = 0;
    for (const argument of arguments) {
        sum = sum + argument; 
       
    }
    return sum;
}
// const getValue = sayman(10, 20, 30, 40, 25, 60);
// console.log(getValue);

// spread operator------
const array = [10, 40, 30, 770, 66, 0890, 234, 123];
const arraySort = array.sort(function (a,b) {
    return a - b;
});
console.log(arraySort);
let bigNumber = Math.max(...array);
// console.log(bigNumber);
let minNumber = Math.min(...array);
// console.log(minNumber);
// make a speared array
const speared = [10,...array,50];
speared.push(23)
// console.log(speared,array);
// arrow function--
let totalValue = (num1, num2) => num1 + num2;
const inputValue = totalValue(10, 20)
// console.log(inputValue);
const funC = (num1,num2) => {
    let total = num1 + num2;
    let distraction = total - num1;
    let multiply = distraction * 10;
    return multiply;
}
const multiply = funC(10, 20);
// console.log(multiply);
// -----Object DesTrucTuring

const family = {
    father: { names: "Abbu", Age: 52, id: 01, Behave: "hot" },
    mother: { name: "Ammu", age: 42, id: 02, Behave: "cool" },
    member: 7,
    son: 4,
    sister:"none"
}

// const { name, age, id, Behave } = family.mother;
// console.log(name, age, id, Behave);
// Control undefined error

// const { names, Age, id, Behave, sayman, rabbi } = family.father;
// console.log(family.father)
const nums = [1,2,3,4,5];
let output = nums.filter(n => n % 2);
// console.log(output);
// ====objest destructuring====
let movie = {
    name: "Titanic",
    rating: 4.5,
    quality: "Good",
    director: "james Kamerun",
}
const {  name, rating, quality, director } = movie;
// console.log(name, rating, quality, director);

const [a, b, c, d] = [10, 23, 12, 50];
// console.log(a, b, c, d);




