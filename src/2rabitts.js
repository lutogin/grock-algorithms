function rabbitJump(x1, v1, x2, v2) {
  if (
    (x1 >= x2 && v1 >= v2)
    || (x1 <= x2 && v1 <= v2)
  )  {
    return 'NO';
  }

  let cord1 = x1;
  let cord2 = x2;

  let current = cord1 > cord2;

  while(true) {
    cord1 += v1;
    cord2 += v2;

    if (cord1 === cord2) {
      return 'YES';
    }
    if (current !== cord1 > cord2) {
      return 'NO';
    }
  }
}
