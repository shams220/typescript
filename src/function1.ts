function introduce(name: string, age: number): string {
    return `My name is ${name} and I am ${age} years old.`;
}

const message = introduce("Shams", 25);

console.log(message);

function calculateArea(length: number, width: number): number {
    return length * width;
}

console.log(calculateArea(10, 5));

const square = (num: number): number => {
    return num * num;
};

console.log(square(8));