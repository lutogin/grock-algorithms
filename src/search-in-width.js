const Persons = {
  Alice: { name: 'Alice', flag: false },
  Bob: { name: 'Bob', flag: false },
  Clare: { name: 'Clare', flag: false },
  Anuj: { name: 'Anuj', flag: true },
  Peggy: { name: 'Peggy', flag: false },
  Thom: { name: 'Thom', flag: false },
  Jonny: { name: 'Jonny', flag: false },
};

const graphModel = {
  me: [Persons.Alice, Persons.Bob, Persons.Clare],
  [Persons.Alice.name]: [Persons.Peggy, Persons.Thom],
  [Persons.Bob.name]: [Persons.Peggy, Persons.Anuj],
  [Persons.Clare.name]: [Persons.Thom, Persons.Jonny],
  [Persons.Anuj.name]: [Persons.Jonny],
  [Persons.Peggy.name]: [Persons.Jonny],
  [Persons.Thom.name]: [Persons.Alice],
  [Persons.Jonny.name]: [],
}

function searchInWidth(graph, persons) {
  let queue = new Set(graph.me); // start point

  for (let person of queue) {
    if (person.flag) {
      return persons[person.name];
    }

    graph[person.name].forEach(queue.add, queue);
  }

  return null;
}

console.log(searchInWidth(graphModel, Persons));
