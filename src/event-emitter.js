const fn1 = (str) => str.toUpperCase();
const fn2 = (str) => (str += 'aaaaaa!');

function compose(...fn) {
  return function (someData) {
    return fn.reverse().reduce(function (acc, func) {
      return (acc = func(acc));
    }, someData);
  };
}

const result = compose(fn1, fn2)('tEsT');
