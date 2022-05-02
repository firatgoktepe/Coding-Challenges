// Helper function to remove non alphabetic characters and transform string to lowercase
function normalizeString(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
  }
  
  function getMaxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''
  
    for (let char of normalizeString(str)) {
      if (charMap[char]) {
        charMap[char]++
      } else {
        charMap[char] = 1
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char]
        maxChar = char
      }
    }
  
    return maxChar
  }