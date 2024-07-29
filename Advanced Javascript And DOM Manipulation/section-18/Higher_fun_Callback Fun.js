function Multiply(num1,num2){
    var c = num1+num2;
    console.log(c);
}
Multiply(4,5);

 // higher order function // Callback function

 function Calculator(num1,num2,callback){
    var d = callback(num1,num2);
    console.log(d);
 }
 Calculator(4,5,Multiply) 


 //or
 
 function Add(n1,n2){
    return n1 + n2;
 }
 console.log(Add(2,2));


 // Callback function and Higher order function

function AddNext(callback){
    var repeat = callback(2,2);
    console.log(repeat);
}
AddNext(Add)

