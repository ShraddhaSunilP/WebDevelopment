var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const mapNumbers = numbers.map((num)=>{
    return num*2
});
console.log(mapNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterNumbers = numbers.filter((num)=>{
    return num>10;
});
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.
const findNumbers = numbers.find((num)=>{
    return num > 10;
});
console.log(findNumbers);   

//FindIndex - find the index of the first item that matches.
const findIndexNumbers = numbers.findIndex((num)=>{
    return num > 48;
});
console.log(findIndexNumbers);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
