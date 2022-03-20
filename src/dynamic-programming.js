const PACK_SIZE = 4;

const items = [
  {
    title: 'notebook',
    cost: 2000,
    size: 3
  },
  {
    title: 'recorder',
    cost: 3000,
    size: 4
  },
  {
    title: 'guitar',
    cost: 1500,
    size: 1
  },
  {
    title: 'iphone',
    cost: 2000,
    size: 1
  }
];

function countTotalSomething(el, property, matrix = []) {
  return el.reduce((acc, item) => {
    return acc += item?.[property] || 0;
  }, 0);
}

function findOptimalLoad(items, size) {

  const itemsCopy = items.slice();

  // prepare matrix structure
  const matrix = new Array(itemsCopy.length);

  for (let x = 0; x < matrix.length; x++) {
    matrix[x] = new Array(size);
    for (let y = 0; y < size; y++) {
      matrix[x][y] = [];
    }
  }

  // sort items by size
  itemsCopy.sort((a, b) => a.size - b.size);

  for (let elCord = 0; elCord < itemsCopy.length; elCord++) {
    for (let sizeCord = 1; sizeCord <= size; sizeCord++) {
      const cSizeCord = sizeCord - 1;
      if (itemsCopy[elCord].size <= sizeCord) {
        if (
          elCord > 0
          && countTotalSomething(matrix[elCord - 1][cSizeCord], 'size') + itemsCopy[elCord].size <= sizeCord
          && countTotalSomething(matrix[elCord - 1][cSizeCord], 'cost') + itemsCopy[elCord].cost > matrix[elCord][cSizeCord]
        ) {
          matrix[elCord][cSizeCord] = [itemsCopy[elCord], ...matrix[elCord - 1][cSizeCord]];
        } else {
          matrix[elCord][cSizeCord] = [itemsCopy[elCord]];
        }
      } else {
        if (
          elCord > 0
        ) {
          if (countTotalSomething(matrix[elCord - 1][cSizeCord], 'cost', matrix) > itemsCopy[elCord].cost) {
            matrix[elCord][cSizeCord] = [itemsCopy[elCord]];
          } else {
            matrix[elCord][cSizeCord] = matrix[elCord - 1][cSizeCord];
          }
        } else {
          matrix[elCord][cSizeCord] = [];
        }
      }
    }
  }

  return matrix;
}

findOptimalLoad(items, PACK_SIZE);