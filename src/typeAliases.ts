type Address = {
    city: string;
    state: string;
};

type Employee = {
    id: number;
    name: string;
    salary: number;
    address: Address;
};

const employee: Employee = {
    id: 101,
    name: "Shams",
    salary: 50000,
    address: {
        city: "Noida",
        state: "Uttar Pradesh"
    }
};
const e1:Employee={
    id:102,
    name:"pankaj",
    salary:'112345',
    address:{
        city:'fzbd',
        // state:'UP'
    }
}
console.log()
console.log(employee.name);
console.log(employee.address.city);


/// Normal union array
const arr :(string | number)[]=[
    'name',34
]
console.log(arr);

/// Type Union array 
type arr1=(string|arr)[]
const ar1:arr1=['shams alam ',654];
console.log(ar1)


///function 
function nonType(a:string,b:number){
    return a+b
}
console.log(nonType('shams',45));
type fn=(a:number,b:number)=>number;

const typeFun:fn=(a,b)=>{
    return a+b
}
console.log(typeFun(1,2));