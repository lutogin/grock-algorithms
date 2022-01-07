let counter = 0;

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0]; // default use 1st el
  const lower = [];
  const bigger = [];

  for (let i = 1; i < arr.length; i++) {
    counter += 1;
    if (arr[i] < pivot) {
      // Because we are take 1st element as a pivot.
      lower.push(arr[i]);
    } else {
      bigger.push(arr[i]);
    }
  }

  return quickSort(lower).concat(pivot, quickSort(bigger));
}

console.log(quickSort([21, 333, 4, 76, 3, 12, 677, 2, 1]));
console.log('speed ---> ', counter);
