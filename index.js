
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

//Updated for loop to for each
function useTwoInputsV2(a, b) {
  console.log("Two Inputs function Version 2 -> ");
  a.forEach({ data =>
    console.log(data)
  })

  b.forEach({data =>
    console.log(data)
  })
}

//O(n)
function useOneInputs(n) {
    console.log("One Inputs function -> ");
  for(let i = 0 ;i < n.length; i++) {
    console.log(n[i]);
  }
}

// Updated for loop to for each loop
function useOneInputsV2(n) {
  console.log("One Inputs function Version 2 -> ");
  n.forEach(data => {
    console.log(data);
  })
}

useOneInputs([1,2,3,4,6,4,7,3,6])
useTwoInputs([1,2,3,4,6,4,7,3,6], [23,42,52,])

useOneInputsV2([1,2,3,4,6,4,7,3,6])