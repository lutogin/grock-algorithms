const Entity = {
  Start: 'start',
  A: 'a',
  B: 'b',
  Finish: 'finish',
}

// init graph
const graph = {};
graph[Entity.Start] = {};
graph[Entity.Start][Entity.A] = 6;
graph[Entity.Start][Entity.B] = 2;
graph[Entity.A] = null;
graph[Entity.A][Entity.Finish] = 1;
graph[Entity.B] = {};
graph[Entity.B][Entity.A] = 3;
graph[Entity.B][Entity.Finish] = 5;
graph[Entity.Finish] = null;

// init costs
const costs = {};
costs[Entity.A] = 6;
costs[Entity.B] = 2;
costs[Entity.Finish] = Infinity;

// init parents
const parents = {};
parents[Entity.A] = Entity.Start;
parents[Entity.B] = Entity.Start;
parents[Entity.Finish] = null;

function findLowerCostNode(costs, processed = []) {
  let lowerCostNode = null;
  let loverCostValue = Infinity;

  for (let node in costs) {
    if (
      costs[node] < loverCostValue
      && !processed.includes(node)
    ) {
      loverCostValue = costs[node]
      lowerCostNode = node;
    }
  }

  return lowerCostNode;
}

function dejkstra(graph, costs, parents) {
  const resultCosts = Object.assign({}, costs);
  const resultParents = Object.assign({}, parents);

  const processed = [];
  let node = findLowerCostNode(costs);

  while (node) {
    const cost = resultCosts[node];
    const neighbors = graph[node];

    for (let n in neighbors) {
      const newCost = cost + neighbors[n];
      if (resultCosts[n] > newCost) {
        resultCosts[n] = newCost;
        resultParents[n] = node;
      }
    }

    processed.push(node);
    node = findLowerCostNode(resultCosts, processed);
  }

  return {
    costs: resultCosts,
    parents: resultParents,
  }
}

console.log(dejkstra(graph, costs, parents));
