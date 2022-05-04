// Solution #1: JSON.stringify()

// This is an approach that looks very dirty/hacky but may still be useful if one is comparing smaller objects. It is easy and fast to write and do not need any libraries which adds overhead to the final js bundle. Since this is fast to write, it may also be useful for quick sanity check or verifying if two objects are equal.

const sortString = (str) =>  {
    return str.split("").sort().join('')
}

const isObjectsEqual = (obj1, obj2) => {
    const a = JSON.stringify(obj1)
    const b = JSON.stringify(obj2)

    // sort so it will handle object properties that are not in order
    return sortString(a) === sortString(b)
}


// Solution #2: Custom Approach to
// This is a more robust approach that is more readable and less hacky. It is also more efficient than the first approach.

const isDeepEqual = (obj1, obj2) => {
    // ensure that arguments are objects
    return obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object' 
        ?   // return false right away if objects properties length are not equal
            Object.keys(obj1).length === Object.keys(obj2).length && 
                // use reduce setting the initial value to equal which is true
                Object.keys(obj1).reduce((prev, curr) => {
                    // then recurse as deep as possible and keep recursing if values are objects
                    return prev && isDeepEqual(obj1[curr], obj2[curr])
                }, true)
        : // just do normal compare if not an object
            obj1 === obj2
}