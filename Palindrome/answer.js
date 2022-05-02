// Solution #1: Array reverse and join and methods
//very straight forward solution using array methods.

function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('')
    return reverseStr === str
}

// Solution #2: Array every
// nice solution in case array methods are not permitted by the interviewer.

function isPalindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}
