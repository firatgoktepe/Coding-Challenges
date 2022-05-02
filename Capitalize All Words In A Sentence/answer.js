// Solution #1: Array Map
// It pretty straight-forward approach and is legible. 

const capitalize  = (str) => {
    return str
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}


// Solution #2: Array Reduce (Recommended)
// Another solution that I like. Array reduce is used as intended where one value is returned as a result of every iteration. Pretty similar approach just like array map above.

function capitalize(str) {
    return str
        .split(' ')
        .reduce((prev, current) => `${prev} ${current[0].toUpperCase() + current.slice(1)}`, '')
}

// Solution #3: for-of loop
// Below is an alternative solution that can be used but it creates a variable to push results which array reduce solves easily. I see this as an OK option.

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}