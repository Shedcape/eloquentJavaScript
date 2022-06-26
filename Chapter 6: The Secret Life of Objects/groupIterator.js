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
    get length(){
        return this.items.length;
    }
}
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}
class GroupIterator{
    constructor(group){
        this.x = 0
        this.group = group
    }
    next(){
        if (this.x >= this.group.length){
            return {done: true};
        }
        let value = {
            value: this.group.items[this.x],
            done: false};
        this.x++;
        return value;
    }
}
