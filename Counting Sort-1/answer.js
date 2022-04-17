function countingSort(arr) {
    let sorted = arr.sort((a,b) => a - b)
    
    let count = {}
    for (let i = 0; i < sorted.length; i++) {
        if (count[sorted[i]]) {
            count[sorted[i]]++
        } else {
            count[sorted[i]] = 1
        }
    }
    return Object.values(count)
    
}

countingSort([1,2,30,2,2,6,7,8,9,10])            