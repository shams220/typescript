// function name(a:number,b:number){
//     return a+b;
// }
// console.log(name(2,3))
// function stringNum(a,b){
//     return a+b
// }
// console.log(stringNum('shams',3));
const arr: (number | string | boolean)[] = [23, "shams", true];
console.log(arr);
const tupleArr: [number, string, boolean] = [
  // 'shams',23,true
  23,
  "shams",
  true,
];
console.log(tupleArr);
const obj = {
  name: "shams",
  age: 24,
};
console.log(obj);
obj.name = "shams alam";
console.log(obj);
// obj.name= 24
console.log(obj);
const typeObj: {
  name: string;
  age: number;
} = {
  name: "shams",
  age: 24,
};
console.log(typeObj);

type car = {
  name: string;
  price: string;
};
const car1: car = {
  name: "BMW",
  price: "new",
};
console.log(car1);
// let arrObj: {
//   name1: string;
//   age: number;
// }[] = [
//   {
//     name1 = "shams",
//     age: 24,
//   },
//   {
//     name1 = "shams",
//     age: 24,
//   },
// ];

// console.log(arrObj)

let student:{class:number;roll:number}[]=[{class:12,roll:22},{class:12,roll:21}]
console.log(student)
type obj={
    name:string;
    age:number;

}
const ob1 : obj={
    name:'shams'
}
console.log(ob1)