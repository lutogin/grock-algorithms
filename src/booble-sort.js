const testArr = [1, 3, 27, 0, 1001, 7, 5];

let count = 0;

function simpleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j< arr.length - 1 - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(' ---> ', simpleSort(testArr));
console.log(' ---> ', count);
