function divideAndRule(h, w) {
  const isHeightMoreThenWidth = h > w;

  const balance = isHeightMoreThenWidth
    ? h % w
    : w % h;

  if (balance === 0) {
    return Math.min(h, w);
  }


  return isHeightMoreThenWidth
    ? divideAndRule(balance, w)
    : divideAndRule(h, balance);
}

console.log('divideAndRule ---> ', divideAndRule(1680, 640));
