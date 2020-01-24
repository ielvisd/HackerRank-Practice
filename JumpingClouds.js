// Problem
// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c=[0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 0 -> 2 ->4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4.

// Function Description
// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers

// Input Format
// The first line contains an integer n, the total number of clouds. The second line contains n space-separated binary integers describing clouds c[i] where 0 <= i < n.

// Output Format
// Print the minimum number of ju≈mps needed to win the game.

// Sample Input
var n0 = 7;
var c0 = [0, 0, 1, 0, 0, 1, 0];

// Expected Output
// 4

// Sample Input
var n1 = 6;
var c1 = [0, 0, 0, 0, 1, 0];

// Expected Output
// 3

function jumpingOnClouds(c) {
  // Initialize the return variable: numberOfJumps
  let numberOfJumps = 0;

  // Initialize current cloud id variable: currentCloud
  let currentCloud = 0;

  // Initialize current jump try number: jumpTry
  let jumpTry = currentCloud + 2;

  // Initialize number of clouds: numberOfClouds
  let numberOfClouds = c.length;

  // NOTE: jump helper function
  function jump(currentCloud, jumpTry) {
    currentCloud = currentCloud + jumpTry;
    return currentCloud;
  }

  // NOTE: lookAhead helper function
  function lookAhead(currentCloud, jumpTry) {
    if (c[currentCloud + jumpTry] === 0) {
      return jumpTry;
    } else {
      return false;
    }
  }

  while (jumpTry > 0) {
    // Try to furthest farthest possible cloud
    let jumpPossible = lookAhead(currentCloud, jumpTry);

    // If it is a cumulus cloud
    if (jumpPossible >= 1) {
      // Increase the jump counter & set new currentCloud.
      jumpTry = jumpPossible;
      currentCloud = jump(currentCloud, jumpTry);
      numberOfJumps += 1;
      jumpTry = 2;

      // Check if at the end:
      if (currentCloud === numberOfClouds - 1) {
        return numberOfJumps;
      }
    } else {
      // Lower the jumpTry number and try to jump again
      jumpTry -= 1;
    }
  }

  return numberOfJumps;
}

// 1, 2, 0, 2, 2

// console.log(jumpingOnClouds(c0));
// console.log(jumpingOnClouds(c1))
