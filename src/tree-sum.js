const tree = {
  name: 'root',
  value: 21,
  children: [
    {
      name: 'b1',
      value: 11,
      children: [
        {
          name: 'a',
          value: 8,
          children: [
            {
              name: 'a2',
              value: 1,
            },
          ],
        },
        {
          name: 'b',
          value: 6,
        },
      ],
    },
    {
      name: 'b2',
      value: 1,
      children: [
        {
          name: 'c',
          value: 12,
        },
        {
          name: 'd',
          value: 14,
        },
      ],
    },
  ],
};

function countSumInTree(tree) {
  if (!tree.children) {
    return tree.value || 0;
  }
  let values = tree.value;

  tree.children.forEach((el) => {
    values += countSumInTree(el);
  });

  return values;
}

function countSumInTree2(tree) {
  if (!tree.children) {
    return tree.value || 0;
  }

  return tree.children.reduce((acc, children) => {
    return (acc += countSumInTree2(children));
  }, tree.value);
}

function countSumInTree3(tree) {
  return tree.reduce((acc, item) => {
    if (!item.children) {
      return acc;
    }
    return acc + countSumInTree(item.children);
  }, 0);
}

console.log(countSumInTree2(tree));
