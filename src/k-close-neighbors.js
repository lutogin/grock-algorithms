const Persons = {
  John: 'john',
  Max: 'max',
  Tom: 'tom',
  Sara: 'sara',
}

const genre = [
  'action',
  'comedy',
  'drama',
  'horror',
  'detective',
];

const rates = {
  [Persons.John]: [3, 4, 4, 1, 4],
  [Persons.Max]: [4, 3, 5, 1, 5],
  [Persons.Tom]: [2, 5, 1, 3, 1],
  [Persons.Sara]: [2, 4, 4, 4, 2],
}

/**
 * @param cordsX {[]}
 * @param cordsY {[]}
 * @returns {number}
 */
function calculateDistance(cordsX, cordsY) {
  const sumOfPow = cordsX.reduce((accum, el, index) => {
    return accum += Math.pow(cordsX[index] - cordsY[index], 2);
  }, 0);

  return Math.round(Math.sqrt(sumOfPow));
}

/**
 * @param rates {Object}
 */
function calculateAppropriate(rates) {
  return Object.keys(rates).reduce((accum, item, i, p) => {
    if (i + 1 === p.length) {
      return accum;
    }

    accum[`${p[i]}:${p[i+1]}`] = calculateDistance(
      rates[p[i]],
      rates[p[i+1]],
    );

    return accum;
  }, {});
}

console.log(calculateAppropriate(rates));