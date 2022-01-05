function validParentheses(string) {
  let counter = 0;
  for (let sym of string) {
    if (sym === '(') {
      counter += 1;
    } else if (sym === ')') {
      counter -= 1;
    } else if (sym < 0) {
      return false;
    }
  }

  return counter === 0;
}

console.log(validParentheses('(())((()())())'));
console.log(validParentheses(')(()))'));
