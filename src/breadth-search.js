const graph = {
  name: 'you',
  edge: [
    {
      name: 'alice',
      edge: [
        {
          name: 'peggy',
          edge: [],
        },
      ]
    },
    {
      name: 'bob',
      edge: [
        {
          name: 'anuj',
          edge: [],
        },
        {
          name: 'anuj',
          edge: [],
        }
      ]
    },
    {
      name: 'claire',
      edge: [
        {
          name: 'jonny',
          edge: [
            {
              name: 'sally',
              edge: [],
            },
          ],
        },
        {
          name: 'thom',
          edge: [],
        }
      ]
    }
  ],
};

function makeQueue(data) {
  if (!!data.edge.length) {
    const result = [data.edge.map((el) => el.name)];

    const deepQueue = [];
    data.edge.forEach((el) => {
      if (!!el.edge.length) {
        deepQueue.push(...makeQueue(el));
      }
    });

    if (!!deepQueue.length) {
      result.push(deepQueue.flat(1));
    }

    return result;
  }
}

const queue = makeQueue(graph);

console.log('queue ---> ', queue);
