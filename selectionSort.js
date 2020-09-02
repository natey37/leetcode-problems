/*
Selection Sort
*/

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