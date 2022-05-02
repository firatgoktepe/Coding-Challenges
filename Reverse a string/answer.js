// Solution #1: Very simple solution that will utilize array methods to reverse the string 

const reverseString = (str) => {
    return str.split('').reverse().join(''); 
}

// Soiution #2: Array forEach
// will cycle through each characters and push it on the temp variable created one by one in reversed order.

function reverseString(str) {
    let reversedString = ''

    str.split('').forEach(char => {
        reversedString = char + reversedString
    })

    return reversedString
}

// Solution #3: Array reduce
// slightly better than second solution above. Will use reduce and add the result to the empty string in reverse.

function reverseString(str) {
    return str.split('')
        .reduce((prev, curr) => curr + prev, '')
}
