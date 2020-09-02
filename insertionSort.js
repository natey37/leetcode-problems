/*
Insertion Sort 
*/
//Time Complexity average O(n^2), worst O(n^2), best O(n)
//Space Complexity O(1)
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let curr = arr[i]
        let j = i 
 
        while(j > 0 && arr[j-1] > curr){
            arr[j] = arr[j-1]
            j--
        }
 
        arr[j] = curr
    }
    return arr
}
 
//Example: [7,5,2,6,3]

//insertionSort([7,5,2,6,3])
    //for(i=1; i<5; i++) -> arr = [7,5,2,6,3]
        //curr = 5
        //j = 1 

        //while(1 > 0 && 7 > 5) -> true 
            //arr[1] = 7 
            //j - 1 = 0 

        //while(0 > 0) -> false 

        //arr[0] = 5 

    //for(i=2; i<5; i++) -> arr = [5,7,2,5,3]
        //curr = 2 
        //j = 2 

        //while(2 > 0 && 7 > 2) -> true 
            //arr[2] = 7 
            //j - 1 = 1 

        //while(1 > 0 && 5 > 2) -> true 
            //arr[1] = 5
            //j - 1 = 0 

        //while(0 > 0) -> false 

        //arr[0] = 2 

    //for(i=3; i<5; i++) -> arr = [2,5,7,6,3]
        //curr = 6
        //j = 3 

        //while(3 > 0 && 7 > 6) -> true 
            //arr[3] = 7 
            //j - 1 = 2 

        //while(2 > 0 && 5 > 6) -> false 

        //arr[2] = 6

    //for(i=4; 4<5; i++) -> arr = [2,5,6,7,3]
        //curr = 3 
        //j = 4

        //while(4 > 0 && 7 > 3)
            //j[4] = 7 
            //j - 1 = 3 

        //while(3 > 0 && 6 > 3)
            //j[3] = 6
            //j - 1 = 2 

        //while(2 > 0 && 5 > 3)
            //j[2] = 5
            //j - 1  = 1 

        //while(1 > 0 && 2 > 3) -> false 

        //arr[1] = 3

//END for loop
//arr = [2,3,5,6,7]

