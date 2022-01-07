const arr = Array.from(new Array(100).keys());

const sought = 67;

let iterations1 = 0;
let iterations2 = 0;

function binaryFinderRecursion(arr, sought) {
  iterations1 += 1;
  const middleIndex = Math.floor(arr.length / 2);

  if (arr[middleIndex] === sought) {
    return middleIndex;
  }

  if (arr[middleIndex] < sought) {
    return binaryFinderRecursion(arr.slice(middleIndex), sought);
  } else {
    return binaryFinderRecursion(arr.slice(0, middleIndex), sought);
  }
}

function binaryFinder(arr, sought) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    iterations2 += 1;

    mid = Math.floor(low + high / 2);
    if (arr[mid] === sought) {
      return mid;
    }

    if (arr[mid] > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

console.log('---> ', {
  index: binaryFinderRecursion(arr, sought),
  index: binaryFinder(arr, sought),
  iterations1,
  iterations2,
});
