const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null,
    },
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null,
        },
        {
          valueNode: 5,
          next: null,
        },
      ],
    },
  ],
};

function sumOfTree(t) {
  return (
    t.valueNode +
    t.next.reduce((sum, v) => {
      if (v.next) {
        return (sum += sumOfTree(v));
      } else {
        return (sum += v.valueNode);
      }
    }, 0)
  );
}
