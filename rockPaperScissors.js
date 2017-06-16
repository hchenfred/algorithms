/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//          rock
// rock  -    paper      - scissors
// rock-paper-scissors


var rockPaperScissors = function(n) {
  var result = [];

  var sequence = ['rock', 'paper', 'scissors'];
  var dfs = function(pos, curr) {
    if (pos === n) {
      result.push(curr.slice());
      return;
    }

    for (var i = 0; i < sequence.length; i++) {
      curr.push(sequence[i]);
      dfs(pos + 1, curr);
      curr.pop();
    }

  }

  dfs(0, []);
  return result;
}

console.log(rockPaperScissors(3));