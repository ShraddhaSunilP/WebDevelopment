  
  // Create functions for all (Add, Sub, Mul, Div)

  function Add(num1,num2){
    console.log(num1 + num2);
  }
  function Sub(num1,num2){
    console.log(num1 - num2);
  }
  function Mul(num1,num2){
    console.log(num1 * num2);
  }
  function div(num1,num2){
    console.log(num1 / num2);
  }

  function Calculator(val1, val2, callback){
    console.log(callback(val1, val2))
  }
    //call calculator function with callback function 
  var result = Calculator(6,5, Mul); 

  console.log(result);
