// Solution #1: ES6 Set
// uses the elegance of Set just like other programming languages. A value in the Set may only occur once; it is unique in the Set's collection.

function removeDuplicates(array) {
  return [...new Set(array)]
}

// Solution #2: Object
// below will use a js plain object to store key value pairs. Value can be other values as well, i chose to increment it so we may use it for other purpose like get the total count for all characters, etc.

function removeDuplicates(array) {
  const map = {}

  for (const char of array) {
    if (map[char]) {
      map[char]++
    } else {
       map[char] = 1
    }
  }

  return Object.keys(map)
}