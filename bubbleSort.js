/*
Bubble Sort
*/

//Time complexity average O(n^2), best case O(n), worst case O(n^2)
//Space complexity O(1)
const bubbleSort = (array) => {
    
    //We will have two for loops, one main for loop to check every number and a second for loop to check the pairs
    //If we find that a previous number is larger then our current number than we will swap these numbers and continue swapping until it has moved as far right in the array as possible
    for(let i=array.length-1; i>=0; i--){
        for(let j=1; j<=array.length-1;j++){
            if(array[j-1] > array[j]){
                let temp = array[j-1]
                array[j-1] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

//Example. arr = [7,5,2,6,3]

//bubbleSort(arr)
    //for(i=5; 5>=0; i--)
        //for(j=1; 1<=4; j++) -> arr = [7,5,2,6,3]
            //if(arr[0] > arr[1]) -> 7 > 5 -> true
                //temp = 7 
                //arr[0] = 5 
                //arr[1] = 7 
        
        //for(j=2; 2<=4; j++) -> arr = [5,7,2,6,3]
            //if(arr[1] > arr[2]) -> 7 > 2 -> true 
                //temp = 7 
                //arr[1] = 2 
                //arr[2] = 7 

        //for(j=3; 3<=4; j++) -> arr = [5,2,7,6,3]
            //if(arr[2] > arr[3]) -> 7 > 6 -> true 
                //temp = 7 
                //arr[2] = 6 
                //arr[3] = 7 

        //for(j=4; 4<=4; j++) -> arr = [5,2,6,7,3]
            //if(arr[3] > arr[4]) -> 7 > 3 -> true 
                //temp = 7 
                //arr[3] = 3 
                //arr[4] = 7 

    //END inner for loop
    //arr = [5,2,6,3,7] 

    //for(i=4; 4>=0; i--)
        //for(j=1; 1<=5; j++) -> arr = [5,2,6,3,7] 
            //if(arr[0] > arr[1]) -> 5 > 2 -> true 
                //temp = 5 
                //arr[0] = 2 
                //arr[1] = 5

        //for(j=2; 2<=4; j++) -> arr = [2,5,6,3,7] 
            //if(arr[1] > arr[2]) -> 5 > 6 -> false 

        //for(j=3; 3<=4; j++) -> arr = [2,5,6,3,7] 
            //if(arr[2] > arr[3]) -> 6 > 3 -> true 
                //temp = 6
                //arr[2] = 3
                //arr[3] = 6 

        //for(j=4; 4<=4; j++) -> arr = [2,5,3,6,7] 
            //if(arr[3] > arr[4]) -> 6 > 7 -> false 

    //END inner for loop
    //arr = [2,5,3,6,7]

    //for(i=3; 3>=0; i--)
        //for(j=1; 1<=4; j++) -> arr = [2,5,3,6,7] 
            //if(arr[0] > arr[1]) -> 2 > 5 -> false 

        //for(j=2; 2<=4; j++) -> arr = [2,5,3,6,7] 
            //if(arr[1] > arr[2]) -> 5 > 3 -> true 
                //temp = 5 
                //arr[1] = 3 
                //arr[2] = 5 

        //for(j=3; 3<=4; j++) -> arr = [2,3,5,6,7] 
            //if(arr[2] > arr[3]) -> 5 > 6 -> false 

        //for(j=4; 4<=4; j++) -> arr = [2,3,5,6,7] 
            //if(arr[3] > arr[4]) -> 6 > 7 -> false 

    //END inner for loop 
    //arr = [2,3,5,6,7] 
    //At this point our array is sorted and our inner for loop will not hit the conditional again
      



//Another example 
//arr = [9,7,3,1]

//bubbleSort(arr)
    //for(i=3; 3>=0; i--)
        //for(j=1; 1<=3; j++) -> arr = [9,7,3,1]
            //if(arr[0] > arr[1]) -> 9 > 7 -> true 
                //temp = 9 
                //arr[0] = 7
                //arr[1] = 9 
        
        //for(j=2; 2<=3; j++) -> arr = [7,9,3,1]
            //if(arr[1] > arr[2]) -> 9 > 3 -> true 
                //temp = 9 
                //arr[1] = 3
                //arr[2] = 9 

        //for(j=3; 3<=3; j++) -> arr = [7,3,9,1]
            //if(arr[2] > arr[3]) -> 9 > 1 -> true 
                //temp = 9 
                //arr[2] = 3
                //arr[3] = 9 

    //END inner for loop
    // arr = [7,3,1,9]

    //for(i=2; 2>=0; i--)
        //for(j=1; 1<=3; j++) -> arr = [7,3,1,9]
            //if(arr[0] > arr[1]) -> 7 > 3 -> true 
                //temp = 7 
                //arr[0] = 3
                //arr[1] = 7 

        //for(j=2; 2<=3; j++) -> arr = [3,7,1,9]
            //if(arr[1] > arr[2]) -> 7 > 1 -> true 
                //temp = 7 
                //arr[1] = 1
                //arr[2] = 7 
        
        //for(j=3; 3<=3; j++) -> arr = [3,1,7,9]
            //if(arr[2] > arr[3]) -> 7 > 9 -> false 
                
    //END inner for loop 
    //arr = [3,1,7,9]

    //for(i=1; 1>=0; i--)
        //for(j=1; 1<=3; j++) -> arr = [3,1,7,9]
            //if(arr[0] > arr[1]) -> 3 > 1 -> true 
                //temp = 3 
                //arr[0] = 1
                //arr[1] = 3 

        //for(j=2; 2<=3; j++) -> arr = [1,3,7,9]
        
        //AT THIS POINT OUR ARRAY IS SORTED AND WE WILL NOT HIT THE INNER CONDITIONAL AGAIN
                
