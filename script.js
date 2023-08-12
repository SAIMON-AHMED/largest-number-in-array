function largestOfFour(arr) {
  let bigArray = [];  // creating an empty array
  for (let i = 0; i < arr.length; i++) {
    bigArray.push(Math.max(...arr[i]));  // adding the biggest number in a subarray with Math.max() using spread operator
  }
  return bigArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
