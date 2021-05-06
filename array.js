class Array {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index];
  }
}

const myArray = new Array();
console.log(myArray.get(0));