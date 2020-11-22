/*
54. Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/*
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = []
    while(matrix.length){
        let first = matrix.shift()
        result.push(...first)
        for(const arr of matrix){
            let val = arr.pop()
            if(val){
                result.push(val)
                arr.reverse()
            }
        }
        matrix.reverse()
    }
    return result
};


/*
Input:
[
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]

Output: [1,2,3,6,9,8,7,4,5]

So the question is asking us to manipulate our matrix in such a way that we return a result that is the 'spiraled' order of our original matrix. Let's try and see if there is a pattern we can pick up on to help us solve this. We know by looking at the output that the first thing we must do is take the top array in our matrix and add it to the results. We will need someway to keep moving through our matrix. A for loop doesn't really make sense because we will not want to move through the indices in a linear order. We can use a while loop that will run while our matrix has a length. 

    while(matrix.length){
        first = matrix.shift()
    }

matrix.shift() is the part of our function that will end the while loop. Eventually matrix.shift() will remove all of the subarrays from the matrix and our while loop will end. 

    result = []
    while(matrix.length){
        first = matrix.shift()
        result.push(...first)
    }

Here we push the subarray into our result and use the spread operator to add these value(s) into our result array. First time around we add 1,2,3 to our results. Now we are left with this matrix: 

    [
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
    ]

The easy part is done, now what? 

Now we need to access the 6 and the 9... 

To do this we can make a for loop and and take the last index of each subarray. 

    for(const arr of matrix){
        val = arr.pop()
    }

arr.pop() removes the last value from each array

    for(const arr of matrix){
        val = arr.pop()
        if(val){
            result.push(val)
            arr.reverse()
        }
    }

If the val exists then we want to add this value to our results array. We need to check if there is a value because there may be a situation where the subarray in the matrix is empty, but still exists and we do not want to add undefined to our result. 

Now our result is 1,2,3,6,9 

Now we need to access 8,7... we need to move backwards through the last array in the matrix...

Next we reverse the subarray in the matrix. 
    [4,5] -> [5,4]
    [7,8] -> [8,7] -> now its not backwards but it isn't on top of the matrix

After the for loop ends we reverse the matrix
    
    matrix.reverse()

[5,4] becomes [8,7] 
[8,7]         [5,4]

Now we have our matrix in the correct order to access the next numbers 8,7

The while loop continues to the second iteration

    while(matrix.length){
        first = matrix.shift()
        result.push(...first)
    }

The result becomes 1,2,3,6,9,8,7

and our matrix is: [5,4]

    for(const arr of matrix){
        val = arr.pop()
        if(val){
            result.push(val)
            arr.reverse()
        }
    }

The result becomes 1,2,3,6,9,8,7,4 

and our matrix is: [5]

One more time through our while loop, the 5 will be added by the matrix.shift(), the for loop will not run because the matrix is empty, the while loop will end and we are left with the spiral result.
*/