// Write a function that counts vowels in a given string.

// Solution #1: For loop

function findVowelsCount(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
        result.push(str[i]);
        }
    }
    return result.length;
}

// Solution #2: String match method
// String.match method retrieves the result of matching a string against a regular expression.

function getVowelsCount(sentence) {
    return sentence.match(/[aeuio]/gi) ? sentence.match(/[aeuio]/gi).length : 0;
  }