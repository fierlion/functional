// # Task
//
// Given an Array of strings, use Array#reduce to create an object that contains
// the number of times each string occured in the array. Return the object directly (no need to console.log).
//
// ## Example
//
//
//     console.log(countWords(inputWords))
//
//     // =>
//     // {
//     //   Apple: 2,
//     //   Banana: 1,
//     //   Durian: 3
//     // }
//
// ## Arguments
//
//   * inputWords: An array of random Strings.
//
// ## Boilerplate

    function countWords(inputWords) {
      return inputWords.reduce(function(memo, curr) {
        (curr in memo) ? memo[curr] += 1 : memo[curr] = 1;
        return memo;
      }, {});
    }

    module.exports = countWords
