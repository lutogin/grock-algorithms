function ipsBetween(start, end) {
  const num = (data) =>
    data
      .split('.')
      .map((item) => Number.parseInt(item))
      .reduce((acc, e) => acc * 256 + e);

  return num(end) - num(start);
}

console.log('50  ---> ', ipsBetween('10.0.0.0', '10.0.0.50'));
console.log('50  ---> ', ipsBetween('10.0.0.0', '10.0.1.0'));
console.log('50  ---> ', ipsBetween('20.0.0.10', '20.0.1.0'));
