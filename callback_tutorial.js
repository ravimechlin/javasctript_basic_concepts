
// in javascript it is a function when other function is called on another function known as callback function
function sum(a,b){
    return a+b;
}

var sum_of_two_numbers=function result(fx,a,b){
      return fx(a,b);


}

console.log(sum_of_two_numbers(sum,4,5));


