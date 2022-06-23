function fizzBuzz(nr){
    let fizz = 1;
    while(fizz < nr){
        if (fizz % 3 === 0 && fizz % 5 === 0){
            console.log("FizzBuzz");
        } else if (fizz % 3 === 0){
            console.log("Fizz");
        } else if (fizz % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(fizz);
        }
        fizz++;
    }
}
