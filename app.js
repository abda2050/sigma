function range(start, end) {
  var arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
function sum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(range(1, 20)));
