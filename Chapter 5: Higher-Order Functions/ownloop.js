function ownLoop(v, tf, uf, bf){
    for (v; tf(v); v = uf(v)){
        bf(v);
    }
}
ownLoop(10, n => n > 0, n => n-1, console.log);
function secondLoop(i, f, u){
    for(i; i > 0; i -= u){
        if(f(i)){
            console.log(i);
        }
    }
}
secondLoop(20, n => n % 2 === 0, 2);
