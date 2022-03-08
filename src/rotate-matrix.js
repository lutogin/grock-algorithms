const Input = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
const Output = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];

function rotate(matrix) {
  const result = [[], [], [], []];

  for (let i = matrix.length - 1; i >= 0; i--) {
    matrix[i].forEach((nestedEl, nestedIndex) => {
      result[nestedIndex].push(nestedEl);
    });
  }

  return result;

}

console.log(rotate(Input));
