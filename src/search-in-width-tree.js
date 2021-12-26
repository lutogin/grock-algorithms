const graph = [{
  name: 'you',
  flagged: false,
  edge: [
    {
      name: 'alice',
      flagged: false,
      edge: [
        {
          name: 'peggy',
          flagged: false,
          edge: [],
        },
      ]
    },
    {
      name: 'bob',
      flagged: false,
      edge: [
        {
          name: 'anuj',
          flagged: false,
          edge: [],
        },
        {
          name: 'anu2',
          flagged: true,
          edge: [],
        }
      ]
    },
    {
      name: 'claire',
      flagged: false,
      edge: [
        {
          name: 'jonny',
          flagged: false,
          edge: [
            {
              name: 'sally',
              flagged: false,
              edge: [],
            },
          ],
        },
        {
          name: 'thom',
          flagged: false,
          edge: [],
        }
      ]
    }
  ],
}];

function makeQueue(data) {
  if (data.edge.length) {
    const result = [data.edge.map((el) => el.name)];

    const deepQueue = [];
    data.edge.forEach((el) => {
      if (el.edge.length) {
        deepQueue.push(...makeQueue(el));
      }
    });

    if (deepQueue.length) {
      result.push(deepQueue.flat(1));
    }

    return result;
  }
}

/**
 * Make queue
 * @param data
 * @param levelCounter
 * @return {*}
 */
function makeQueue2(data, levelCounter = 0) {
  const mainQueue = data.map((person) => ({
    name: person.name,
    flagged: person.flagged,
    levelCounter,
  }));

  const dataToRecursionCall = [];
  data.forEach((person) => {
    if (person.edge.length) {
      dataToRecursionCall.push(person.edge);
    }
  });

  if (!dataToRecursionCall.length) {
    return mainQueue;
  }

  return mainQueue.concat(makeQueue2(
    dataToRecursionCall.flat(1),
    levelCounter + 1,
  ));
}

const queue = makeQueue2(graph);

console.log('queue ---> ', queue);

const foundFlaggedPerson = queue.find((el) => el.flagged);

console.log('Flagged person on', foundFlaggedPerson.levelCounter, 'position');

/**
 * Find person without creating queue
 * @param data
 * @param levelCounter
 * @return {{person: *, levelCounter: number}|*}
 */
function findFlaggedPerson(data, levelCounter = 0) {
  if (!data && !data.length) {
    return ;
  }

  const result = data.find((person) => person.flagged);

  return result
    ? { person: result, levelCounter }
    : findFlaggedPerson(data.map((person) => person.edge).flat(1), levelCounter + 1);

}


console.log(findFlaggedPerson(graph));
