/*
Selection Sort
*/

//selection sort, go through the array and find the smallest number and its index, if our current number is larger than this number than swap the indices of these two numbers
//after one pass our smallest number will be at the beginning of our array
//we then move forward in our outer for loop, excluding the new smallest number, and start the process over 

//Time complexity average O(n^2), best case O(n^2), worst O(n^2)
//Space complexity is O(1)
const selectionSort = (array) => {
    let minIndex 
    for(let i=0; i<array.length; i++){
        minIndex = i
        //for each number in the array compare it to every other number and find if there is a number that is lower and set the minIndex to that index. Then switch these values and continue 
        for(let j=i+1;j<array.length;j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }
      
        let temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

//Example. arr = [5,1,12,-5]

//selectionSort(arr)
    //for(i=0; i<4; i++)
        //minIndex = 0

        //for(j=0+1; 1<4; j++)
            //if(arr[1] < arr[0]) -> 1 < 5 -> true 
                //minIndex = 1 

        //for(j=2; 2<4; j++)
            //if(arr[2] < arr[1]) -> 12 < 1 -> false 
        
        //for(j=3; 3<4; j++)
            //if(arr[3] < arr[2]) -> -5 < 1 -> true 
                //minIndex = 3

        //temp = arr[0] -> 5 
        //arr[0] = arr[3] -> -5 
        //arr[3] = 5 

    //for(i=1; 1<4; i++) -> arr = [-5,1,12,5]
        //minIndex = 1

         //for(j=1+1; 1<4; j++)
            //if(arr[2] < arr[1]) -> 12 < 1 -> false
                
         //for(j=3; 1<4; j++)
            //if(arr[3] < arr[2]) -> 5 < 1 -> false

    //for(i=2; 2<4; i++) -> arr = [-5,1,12,5]
        //minIndex = 2

         //for(j=2+1; 3<4; j++)
            //if(arr[3] < arr[2]) -> 5 < 12 -> true
                //minIndex = 3

        //temp = arr[2] -> 12
        //arr[2] = arr[3] -> 5
        //arr[3] = temp 

    //for(i=3; 3<4; i++) -> arr = [-5,1,5,12]
        //minIndex = 3 

        //for(j=3+1; 4<4; j++) -> false 

        //temp = arr[3] = 12 
        //arr[3] = arr[3] -> 12 
        //arr[3] = 12 

    //END for loop

