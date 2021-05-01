
//O(a + b)
function useTwoInputs(a, b) {
  console.log("Two Inputs function -> ");
  for(let i = 0;i < a.length; i++) {
    console.log(a[i]);
  }

  for(let i = 0;i < b.length; i++) {
    console.log(b[i]);
  }
}

//O(n)
function useOneInputs(n) {
    console.log("One Inputs function -> ");
  for(let i = 0 ;i < n.length; i++) {
    console.log(n[i]);
  }
}

useOneInputs([1,2,3,4,6,4,7,3,6])
useTwoInputs([1,2,3,4,6,4,7,3,6], [23,42,52,])