class Stack {
    top = -1;
    arr = [];
    constructor(datalist) {
        this.arr = datalist;
        this.top = datalist.length -1;
    }

    push(item) {
        this.arr[++this.top] = item;
    }

    pop(item) {
        if(this.top === -1) {
            throw "Underflow Error";
        }
        this.top--;
        return this.arr.pop();

    }

    display() {
        for(let j = 0; j<=this.top; j++){
            console.log(this.arr[j]);
        }
    }

    isEmpty() {
        return (this.top === -1);
    }

    delete() {
        this.arr = [];
    }
}

module.exports = Stack;