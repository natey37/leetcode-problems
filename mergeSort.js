/*
Merge Sort
*/

//Time Complexity average O(nlogn), worst O(nlogn), best O(nlogn)
//We start by creating n number of one item lists, where n is the total number of items in the array
//Then our merge function proceeds to combine these one item lists back into a single sorted list 

//There are 3 main steps 
    //1) Divide the list into two sublists
    //2) Sort each sublist
    //3) Merge them into one sorted list

//It takes O(log n) to divide the entire array into subpieces
//and it takes O(n) to merge them back together
//so our time complexity is O(n * log n)

//Space Complexity O(n) -> we create a whole new array from our numbers -> sorting does not happen in place

function mergeSort(arr){
    if(arr.length < 2) return arr 

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right));
}

function merge(arr1, arr2){
    let result = []
    let left = 0
    let right = 0 
    
    while(left < arr1.length && right < arr2.length){
        if(arr1[left] < arr2[right]){
            result.push(arr1[left])
            left++
        } else {
            result.push(arr2[right])
            right++
        }
    }
    return result.concat(arr1.slice(left)).concat(arr2.slice(right));
}

//example. arr = [7,5,3,9]
//Step 1.
    //mergeSort(arr)
        //if(4 < 2) -> false 

        //mid = 4 / 2 = 2 
        //left = arr.slice(0,2) -> [7,5]
        //right = arr.slice(2) -> [3,9]

        //return merge(mergeSort([7,5]), mergeSort([3,9]))

    //MOVE TO STEP 2
//Step 1b.
        //return merge([5,7], mergeSort([3,9]))
    //MOVE TO STEP 4

//Step 1c. 
        //return merge([5,7], [3,9])
    
    //MOVE TO STEP 6.

//Step 1d. 
        //return [3,5,7,9]

//Step 2.
    //mergeSort([7,5])
        //if(2 < 2) -> false 

        //mid = 2 / 2 = 1 
        //left = arr.slice(0,1) -> [7]
        //right = arr.slice(1) -> [5]

        //return merge(mergeSort[7], mergeSort[5])
    //MOVE TO STEP 3

//Step 2b.
    //merge([7], [5])
        //result = []
        //left = 0 
        //right = 0 
        
        //while(0 < 1 && 0 < 1) -> true 
            //if(arr1[0] < arr2[0]) -> 7 < 5 -> false 

            //else
            //result.push(arr2[0]) -> [5]
            //right + 1 = 1

        //while(0 < 1 && 1 < 1) -> false 

    //return [5].concat([]).concat([7]) -> [5,7]

    //MOVE BACK TO STEP 1b.

//Step 3.
    //mergeSort([7])
        //if(1 < 2) -> true 
        //return arr -> [7]

    //mergeSort([5])
        //if(1 < 2) -> true 
        //return arr -> [5]
    
    //MOVE BACK TO STEP 2b.

//Step 4.
    //mergeSort([3,9])
        //if(2 < 2) -> false 

        //mid = 1
        //left = [3]
        //right = [9]

        //return merge(mergeSort([3], mergeSort[9]))
    
    //MOVE TO STEP 5.
//STEP 4b.
    //merge([3], [9])
        //result = []
        //left = 0
        //right = 0

        //while(0 < 1 && 0 < 1) -> true 
            //if(arr1[0] < arr2[0]) -> true 
                //result.push(arr1[0])
                //left + 1 = 1

        //while(1 < 1 && 0 < 1) -> false 

    //return [3].concat([]).concat([9]) -> [3,9]

    //MOVE BACK TO STEP 1c.

//Step 5.
    //mergeSort([3])
        //if(1 < 2) -> true 
        //return arr -> [3]

     //mergeSort([9])
        //if(1 < 2) -> true 
        //return arr -> [9]
    
    //MOVE BACK TO STEP 4b.

//Step 6.
    //merge([5,7], [3,9])
        //results = []
        //left = 0 
        //right = 0 

        //while(0 < 2 && 0 < 2)
            //if(arr1[0] < arr2[0]) -> 5 < 3 -> false 

            //else 
            //results.push(arr2[0]) -> [3]
            //right + 1 = 1

        //while(0 < 2 && 1 < 2)
            //if(arr1[0] < arr2[1]) -> 5 < 9 -> true 
                //results.push(arr1[0]) -> [3,5]
                //left + 1 = 1 

        //while(1 < 2 && 1 < 2)
            //if(arr1[1] < arr2[1]) -> 7 < 9 -> true 
                //results.push(arr1[1]) -> [3,5,7]
                //left + 1 = 2 
        
        //while(2 < 2 && 1 < 2) -> false 

    //return [3,5,7].concat([]).concat([9]) -> [3,5,7,9]

//MOVE BACK TO 1d.