const testArr = Array.from(Array(1024).keys());

function binarySearch(arr, search) {
  let indexMin = 0;
  let indexMax = arr.length-1;

  while (indexMin <= indexMax) {
    const indexMid = Math.floor((indexMin + indexMax) / 2);
    const currentValue = arr[indexMid];

    if (currentValue === search) {
      return indexMid;
    } else if (currentValue > search) {
      indexMax = indexMid - 1;
    } else if (currentValue < search) {
      indexMin = indexMid + 1;
    }
  }

  return null;
}

console.log('binarySearch result---> ', binarySearch(testArr, 100));
