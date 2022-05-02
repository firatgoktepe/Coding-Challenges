// Solution #1: Array Sort
// This solution will utilize a helper function to remove all unwanted punctuation and symbols, basically non-alphabetic characters. Then, will sort the string. Once both strings are sorted, compare if they are equal

function IsAnagram(stringA, stringB){
    const normalize = (str) => {
        return str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }

    return normalize(stringA) === normalize(stringB);
}


// Solution #2: Object/Hash Map
// This solution is what I prefer although more steps are needed than the first solution.
// Create a helper function to build a hash map for the string counting each and every characters. Once map is built, iterate and compare the count of first map against the second map.

function createCharMap (str) {
    const map = {}
    const normalizedString = str.replace(/[^\w]/g, '').toLowerCase()

    for (let char of normalizedString) {
        map[char] = map[char] + 1 || 1
    }

    return map
}

function isAnagram(stringA, stringB) {
  const charMapA = createCharMap(stringA)
  const charMapB = createCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

