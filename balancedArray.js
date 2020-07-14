/*
Balanced Array
Emma has an array  of size  where  is an even number. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

To balance an array, Emma can add a non-negative integer  ( ) to any array element . Your task is to find the smallest value of  that makes the array balanced.

Input Format

The first line contains an even integer .

The second line contains the  integer elements of the array .

Constraints

 is an even number.
Output Format

Print the minimum value of  on a single line.

Sample Input 0

6
1 2 1 2 1 3
Sample Output 0

2
Explanation 0

image

The sum of first  elements is  and the sum of last  elements is . To make the array balanced you can add  to index  and make sum of both side equal to .

Sample Input 1

6
1 2 5 2 4 2
Sample Output 1

0
Explanation 1

The sum of both side is equal to , so the array is already balanced. Emma can add  to any index and keep it unchanged.

Sample Input 2

2
20 10
Sample Output 2

10
Explanation 2

Add  to index .
*/


function balancedArray(a){
    let length = a.length 
    let front = a.splice(0, Math.floor(length / 2))
    let back = a
    let total = front.reduce((a,b) => a+b) - back.reduce((a,b) => a+b)
    return Math.abs(total)
   
}