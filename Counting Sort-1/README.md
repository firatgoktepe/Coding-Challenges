Alternative Sorting

Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

Example 

    arr = [1, 1, 3, 2, 1]

How many times for each element in the array?

    count = [3, 1, 1]

So 1 occurs <b>3</b> times and 3 occurs <b>1</b>, 2 occurs <b>1</b> time in the array.

So purpose is to find how many times for each element occuring in the array. This approach is using an alternative sorting method, first you sort the elements in the array, then you count the number of times each element occurs.

