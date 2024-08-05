const app = require('./app')

console.log(app);

var arr = [2,3,4,5,8,3,10,7];

var result = arr.filter((item)=>{
    return item === 3;
})
console.log(result);