/**
* Data Structure : Array
* 
* @author Kshitij Baluni
* @since 06 May, 2021
**/
class Array {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const lastValue = this.data[this.length-1];
    delete this.data[this.length -1];
    this.length--;
    return lastValue;
  }

  delete(index) {
    const valueDelete = this.data[index];
    this.shift(index);
    delete this.data[this.length -1];
    return valueDelete;
  }

  shift(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const myArray = new Array();
myArray.push("hi");
myArray.push("how");
myArray.push("are");
myArray.push("you");
myArray.push("?");
myArray.pop();
myArray.delete(3);
console.log(myArray);