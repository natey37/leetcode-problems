/*
Quick Sort
*/

//Time Complexity average O(nlogn), worst O(n^2), best O(nlogn)

//

//Space Complexity O(1)

function swap(arr, leftIndex, rightIndex){
    let temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
}

function partition(arr, left, right){
    let pivot = arr[Math.floor((left + right) / 2)]
    
    while(left <= right){
        while(arr[left] < pivot) left++
        while(arr[right] > pivot) right--

        if(left <= right){
            swap(arr, left, right)
            left++
            right--
        }
    }
    return left 
}

function quickSort(arr, left, right){
    if(arr.length > 1){
        let index = partition(arr, left, right)

        if(left < index - 1){
            quickSort(arr, left, index - 1)
        }

        if(index < right){
            quickSort(arr, index, right)
        }
    }
    return arr
}

//example, arr = [5,3,7,6,2]

//Step 1.

//quickSort(arr, 0, arr.length-1)
    //if(5 > 1)
        //index = partition([5,3,7,6,2], 0, 4)
        //index = 4
            //MOVE TO STEP 2.

//Step 1b.

        //if(0 < 4 - 1)
            //quickSort([5,3,2,6,7], 0, 3)
                //MOVE TO STEP 3.

//Step 1c.
            //arr = [2,3,5,6,7]

        //if(4 < 4) -> false 

            //return arr -> [2,3,5,6,7]

//Step 2.

//partition([5,3,7,6,2], 0, 4)
    //pivot = arr[Math.floor(0 + 4) / 2] -> 7

    //while(0 <= 4)
        //while(5 < 7) left++ -> left = 1 
        //while(3 < 7) left++ -> left = 2
        //while(7 < 7) -> false, left = 2          
        //while(2 > 7) -> false, right = 4

        //if(2 <= 4)
            //swap([5,3,7,6,2], 2, 4)
                //temp = 7
                //arr[2] = 2
                //arr[4] = 7

                //arr = [5,3,2,6,7]

        //left++ -> 3
        //right-- -> 3

        //if(3<=3)
            //swap([5,3,2,6,7], 3, 3)
                //temp = 6
                //arr[3] = 6
                //arr[3] = 6

                //arr = [5,3,2,6,7]

        //left++ -> 4
        //right-- -> 2

    //while(4 <= 2) -> false 

    //return left -> 4

    //MOVE BACK TO 1b.

//Step 3a.
    //quickSort([5,3,2,6,7], 0, 3)
        //if(5 > 1)
            //index = partition([5,3,2,6,7], 0, 3)
            //index = 2
                //MOVE TO STEP 4

//Step 3b.
            //if(0 < 2 - 1)
                //quickSort([2,3,5,6,7], 0, 1)
                    //if(5 > 1)
                        //index = partition([2,3,5,6,7], 0, 1)
                        //index = 1
                            //MOVE TO STEP 5

//Step 3c.
                        //if(0 < 1 - 0) -> false 
                        //if(1 < 1) -> false 

                        //return arr -> [2,3,5,6,7]
                            //MOVE BACK TO STEP 1c.


//Step 4.
    //partition([5,3,2,6,7], 0, 3)
        //pivot = arr[Math.floor(0 + 3) / 2] -> 3 

        //while(0 <= 3)

            //while(5 < 3) -> false, left = 0

            //while(3 < 6) right-- -> right = 2
            //while(3 < 2) -> false, right = 2

            //if(0 <= 2)
                //swap([5,3,2,6,7], 0, 2)
                    //temp = 5
                    //arr[0] = 2
                    //arr[2] = 5

                    //arr = [2,3,5,6,7]

                //left++ -> left = 1
                //right-- -> right = 1

            //if(1 <= 1)
                //swap([2,3,5,6,7], 1, 1)
                    //temp = 2
                    //arr[1] = 3
                    //arr[1] = 3

                    //arr = [2,3,5,6,7]

                //left++ -> left = 2
                //right-- -> right = 0

        //while(2 <= 0) -> false 

        //return left -> 2
            //MOVE BACK TO 3b.

//Step 5.
    //partition([2,3,5,6,7], 0, 1)
        //pivot = arr[Math.floor(0 + 1) / 2] -> 2

        //while(0 <= 1)
            //while(2 < 2) -> false, left = 0 
            //while(3 > 2) right--, right = 0

            //if(0 <= 0)
                //swap([2,3,5,6,7], 0, 0) -> [2,3,5,6,7] NOTHING CHANGES

                //left++ -> left = 1
                //right-- -> right = -1

        //while(1 <= -1) -> false 

        //return 1
            //MOVE BACK TO 3c.
