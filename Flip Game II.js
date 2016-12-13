
/*You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

For example, given s = "++++", return true. The starting player can guarantee a win by flipping the middle "++" to become "+--+".

Follow up:
Derive your algorithm's runtime complexity.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    for (let i = 0; i <= s.length - 2; i++) {
        if (s.charAt(i) === '+' && s.charAt(i+1) === '+') {
            let currStr = s.slice(0, i) + '--' + s.slice(i+2);
            //console.log(currStr);
            if (!canWin(currStr)) {
                return true;
            }
        }
    }
    return false;
};

/*
Template for Finding a Single Solution
boolean findSolutions(n, other params) {
	if (found a solution) {
		displaySolution();
		return true;
		}
	for (val = first to last) {
		if (isValid(val, n)) {
			applyValue(val, n);
			if (findSolutions(n + 1, other params))
				return true;
				removeValue(val, n);
		}
	}
	return false;
}
*/
