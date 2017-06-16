/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var oneEditDist = function(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        var total = 0;
        for (var i = 0; i < a.length; i++) {
            if (a.charAt(i) !== b.charAt(i)) {
                total++;
                if (total > 1) {
                    return false;
                }
            }
        }
        return total === 1 ? true: false;  
}

var ladderLength = function(beginWord, endWord, wordList) {
    
   
    
    var queue = [];
    queue.push(beginWord);
    var steps = 1;
    var visited = new Set();
     while (queue.length !== 0) {
        var size = queue.length;
        console.log(queue);
        for (var i = 0; i < size; i++) {
          
            var curr = queue.shift();
            visited.add(curr);
            for (var j = 0; j < wordList.length; j++) {
                if (!visited.has(wordList[j]) && oneEditDist(curr, wordList[j])) {
                    if (wordList[j] === endWord) {
                        return steps + 1;
                    }
                    queue.push(wordList[j]);
                }
            }
        }
        steps++;
    }
    return 0;
    
};

console.log(oneEditDist('hot', 'hii'));

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));