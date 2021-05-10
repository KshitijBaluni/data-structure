/**
* Data Structure : Array
* 
* @author Kshitij Baluni
* @since 08 May, 2021
**/

function reverseString(str) {
  console.log("String reversed:: ");
  let revStr = [];
  let j=0;
  for(let i = str.length -1; i >= 0; i--) {
    revStr[j++] = str[i];
  }
  console.log(revStr.join(''));
}

//Test data
reverseString("string");