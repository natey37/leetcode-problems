/*
Bubble Sort
*/

//Time complexity average O(n^2), best case O(n), worst case O(n^2)
//Space complexity O(1)
const bubbleSort = (array) => {
    
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