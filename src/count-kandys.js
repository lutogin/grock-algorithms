function distributeCandies(candyType) {
  const set = new Set(candyType);

  return Math.min(set.size, candyType.length / 2);
};

// console.log(' ---> ', distributeCandies([1,1,2,2,3,3]));
// console.log(' ---> ', distributeCandies([1,1,2,3]));
// console.log(' ---> ', distributeCandies([6,6,6,6]));
console.log(' ---> ', distributeCandies([1,1,1,1,2,2,2,3,3,3]));

