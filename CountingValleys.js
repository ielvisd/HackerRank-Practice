// Problem
// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description
// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path

// Input Format
// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.

// Output Format
// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input
var n1 = 8;
var s1 = "UDDDUDUU";

// Expected Output
// 1

var n2 = 12;
var s2 = "DDUUDDUDUUUD";

// Expected Output
// 2

var n3 = 10;
var s3 = "UDUUUDUDDD";

// Example Output
// 0

var n4 = 10;
var s4 = "DUDDDUUDUU";

// Example Output
// 2

var n5 = 10;
var s5 =
  "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD";

// Example Output
// 2

function countingValleys(n, s) {
  // Initialize the return variable at 0: numberOfValleys
  let numberOfValleys = 0;
  // Initialize current elevation at 0: currentElevation
  let currentElevation = 0;
  // Initialize boolean for the beginning of a valley
  let startValley = false;

  for (var i = 0; i < n; i++) {
    // Change Elevation
    if (s[i] === "D") {
      currentElevation -= 1;
    } else {
      currentElevation += 1;
    }

    if (i === 0) {
      console.log(i);
      console.log(currentElevation);
      console.log(s[i]);
    }

    // Check if you came from the start of a valley
    // If current elevation is 0 and you are at the starting position or a previous one
    if (
      currentElevation === (-1 || 1) &&
      ((i === 0 && s[i] === "D") || (s[i - 1] && s[i + 1] && s[i + 1] === "D"))
    ) {
      console.log(i);
      console.log(currentElevation);
      startValley = true;
    }

    if (i === 2) {
      console.log(startValley);
    }

    if (i === 3) {
      console.log(startValley);
    }

    if (i === 9) {
      console.log(currentElevation);
    }

    // Check if you are at the end of a valley
    // If you coming from below sea level & are now at 0
    if (startValley === true && i !== 0 && currentElevation === 0) {
      console.log(currentElevation);
      // Increase numberOfValleys by 1
      console.log(s[i]);
      console.log(i);
      startValley = false;
      numberOfValleys += 1;
      console.log("End of Valley");
    }

    // If at end of list check one more time (edge case)
    // if (
    //   i === n - 1 &&
    //   this.startValley === true &&
    //   i !== 0 &&
    //   currentElevation >= 0
    // ) {
    //   console.log(i);
    //   startValley = false;
    //   numberOfValleys += 1;
    // }
  }

  console.log(numberOfValleys);
  return numberOfValleys;
}

// 1, 2, 0, 2

// console.log(countingValleys(n1, s1));
// console.log(countingValleys(n2, s2));
// console.log(countingValleys(n3, s3));
// console.log(countingValleys(n4, s4));
console.log(countingValleys(n5, s5));
