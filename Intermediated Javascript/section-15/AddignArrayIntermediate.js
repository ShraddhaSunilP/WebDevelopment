function FizzBuzz(n){
    var output = [];
    for (var count = 1; count <= n; count++) {
        if(count % 3 == 0 && count % 5 == 0){
            output.push("FizzBuzz");
        }
        else if(count % 3 == 0){
            output.push("Fizz");
        }
        else if(count % 5 == 0){
            output.push("Buzz");
        }
        else{
            output.push(count);
        }
    }
    return output;
}

console.log(FizzBuzz(50));
