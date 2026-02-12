function filterRangeInPlace(arr, a, b) {
  
  for (let i = arr.length - 1; i >= 0; i--) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
    }
  }
}