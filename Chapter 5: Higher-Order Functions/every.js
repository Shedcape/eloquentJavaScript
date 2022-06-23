function every(arr, test){
    for(const el of arr){
        if(!test(el)){
            return false;
        }
    }
    return true;
}
