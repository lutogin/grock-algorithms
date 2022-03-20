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

function countTotalSomething(el, property) {
  return el.reduce((acc, item) => {
    return acc += item?.[property] || 0;
  }, 0);
}

function findOptimalLoad(inputItems, size) {
  // sort items by size
  const items = inputItems.slice().sort((a, b) => a.size - b.size);

  // prepare matrix structure
  const matrix = new Array(items.length);

  for (let x = 0; x < matrix.length; x++) {
    matrix[x] = new Array(size);
    for (let y = 0; y < size; y++) {
      matrix[x][y] = [];
    }
  }

  for (let elCord = 0; elCord < items.length; elCord++) {
    for (let outsideSizeCord = 1; outsideSizeCord <= size; outsideSizeCord++) {
      const sizeCord = outsideSizeCord - 1;

      if (elCord === 0) {
        if (items[elCord].size <= outsideSizeCord) {
          matrix[elCord][sizeCord] = [items[elCord]];
        } else {
          matrix[elCord][sizeCord] = [];
        }
        continue;
      }


      if (items[elCord].size <= outsideSizeCord) {
        console.log({
          1: countTotalSomething(matrix[elCord - 1][sizeCord], 'size') + items[elCord].size <= outsideSizeCord,
          2: countTotalSomething(matrix[elCord - 1][sizeCord], 'cost') > countTotalSomething(matrix[elCord][sizeCord], 'cost'),
          cost: countTotalSomething(matrix[elCord - 1][sizeCord], 'cost'),
          size: countTotalSomething(matrix[elCord - 1][sizeCord], 'size'),
          cost2: countTotalSomething(matrix[elCord][sizeCord], 'cost')
      });
        if (
          countTotalSomething(matrix[elCord - 1][sizeCord], 'cost') > items[elCord].cost
        ) {
          matrix[elCord][sizeCord].push(...matrix[elCord - 1][sizeCord]);
        } else {
          matrix[elCord][sizeCord].push(items[elCord]);
        }
      } else {
        matrix[elCord][sizeCord] = matrix[elCord - 1][sizeCord]
      }
    }
  }

  return matrix;
}

findOptimalLoad(items, PACK_SIZE);