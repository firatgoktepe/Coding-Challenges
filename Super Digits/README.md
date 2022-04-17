 We define super digit of an integer  using the following rules:

 Given an integer, we need to find the super digit of the integer.

    If k=1
    If x has only k=1 digit, then its super digit is x.
    Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

    * Example of super digit of an integer x:  x = 5, super digit = 5
  
    * Example of super digit of an integer x:  x = 19, super digit = 1 + 9 = 10
    
    * Example of super digit of an integer x:  x = 987654321, super digit = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45 and super digit = 4 + 5 = 9

    If k > 1 
    * Example of super digit of an integer x:  x = 945,  and k = 3, So you should calculate it for 945945945

    result is 9+4+5+9+4+5+9+4+5 = 54  => 5 + 4 = 9 so return 9 