function range(x, y, step=1){
    let array = [];
    for(x; step > 0 ? x <= y : x >= y; x+=step){
        array.push(x);
    }
    return array;
}
function sum(arr){
    let total = 0;
    for(const i of arr){
        total += i;
    }
    return total;
}
