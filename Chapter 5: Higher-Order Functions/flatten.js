function flatten(arrays){
    let arr = [];
    for (const el of arrays){
        console.log(el)
        arr = arr.concat(el);
    }
    return arr;
}
