/**
* Solve Coding Problem
* 
* @author Kshitij Baluni aka KB
* @since 02 May, 2021
**/


// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

//O(n^2)
//This funtion is not working as expected
function containsCommonElementWithForEach(array1, array2) {
  array1.forEach(data1 => {
    array2.forEach(data2 => {
      if (data1 === data2)
        return true;
    })
  })
  return false;
}

//O(n^2)
function containsCommonElementWithoutForeach(array1, array2) {
  for(let i=0; i < array1.length; i++) {
    for(let j=0; j < array2.length; j++) {
      if(array1[i] === array2[j]) 
        return true;
    }
  } 
  return false;
}


//Testing
console.log("Output with foreach:" + containsCommonElementWithForEach(array1, array2));
console.log("output without foreach:" + containsCommonElementWithoutForeach(array1, array2));