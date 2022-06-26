class Group {
    constructor(arr = []){
        this.items = arr;
    }
    add(x){
        if(!this.items.includes(x)){
            this.items.push(x);
        }
    }
    has(x){
        return this.items.includes(x);
    }
    delete(x){
        if (this.items.includes(x)){
            this.items = this.items.filter(y => y !== x);
        }
    }
    static from(arr){
        return new Group(arr);
    }
}
