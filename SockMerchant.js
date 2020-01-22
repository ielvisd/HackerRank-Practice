// Problem
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// Input Format
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Output Format
// Return the total number of matching pairs of socks that John can sell.

// Sample Input
// var n = 9;
// var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

var n = 10;
var ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

// Sample Output
// 3

function sockMerchant(n, ar) {
  // Initialze a return variable: numberOfPairs = 0
  let numberOfPairs = 0;

  // Initialize an object, sockColorCount, which will have key/value pairs of colors & the number of socks of that color
  let sockColorCount = {};

  // Loop through every color in the input array
  for (var i = 0; i < n; i++) {
    // If the color is not in sockColorCount
    if (!sockColorCount.hasOwnProperty(ar[i])) {
      // Add it as a key & set the value to 1
      sockColorCount[ar[i]] = 1;
    }
    // Otherwise it is in sockColorCount
    else {
      // Increase the value for this key by 1
      sockColorCount[ar[i]] += 1;
    }
  }

  // For every key in sockColorCount
  const colorCounts = Object.entries(sockColorCount);

  // Looping through arrays created from Object.entries
  for (const [color, count] of colorCounts) {
    // Divide by 2 and floor to round down and get # of pairs
    console.log(color);
    let colorPairs = Math.floor(count / 2);
    console.log(colorPairs);
    // Add the result to numberOfPairs
    numberOfPairs += colorPairs;
    console.log(`There are ${count} ${color}s`);
  }

  // return the total numberofPairs
  return numberOfPairs;
}

console.log(sockMerchant(n, ar));
