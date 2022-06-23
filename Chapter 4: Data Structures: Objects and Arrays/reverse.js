function reverse(arr){
    const result = [];
    const arrCopy = arr.slice();
    for (let i = arrCopy.length-1; i>=0; i--){
        result.push(arrCopy.pop());
    }
    return result;
}
