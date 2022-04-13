Write a function called diagonalDifference which has a parameter of number array and calculates the absolute difference between the sums of its diagonals.

For example, the square arr (2D array) is shown below:
    [ [1,2,3], [4,5,6], [9,8,9] ]

So it's like: " 1 2 3
                4 5 6
                9 8 9  " 

Calculation should take place:

    left-to-right diagonal, we get 1+5+9 = 15
    right-to-left diagonal, we get 3+5+9 = 17
    The absolute difference is |15-17| = 2