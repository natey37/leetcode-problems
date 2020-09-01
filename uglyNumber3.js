/*

*/
//this solution is not optimal and exceeds the time limit for large numbers

var nthUglyNumber = function(n, a, b, c) {
    //this is where will store our ugly numbers -> numbers that are divisible by a,b, or c
    let uglyNums = []
    //this is our counter 
    let i = 1
    //we are looking for the nth number so we only need to search up to the nth number, we will stop searching when the uglyNums has n numbers
    while(uglyNums.length < n){
        //if any of the numbers, a, b, or c is divisible by i than it is an ugly number and we add it to the uglyNums
        if(i % a === 0 || i % b === 0 || i % c === 0){
            uglyNums.push(i)
        }
        //we increment our counter by one and continue our while loop
        i++
    }
    //the last number in our array will be our answer 
    return uglyNums[n-1]
};

//nthUgleNumber(3,2,3,4) -> n = 3, a = 2, b = 3, c = 4
    //uglyNums = []

//Step 1.
    //i = 1

    //while(0 < 3)
        //1 / 2 = 0 -> no
        //1 / 3 = 0 -> no 
        //1 / 4 = 0 -> no 
        //i is not an ugly number

        //i + 1 = 2 

//Step 2. 
    //i = 2 

    //while(0 < 3) -> true
        // 2 % 2 = 0 -> yes 
        //i is an ugly number, add it to uglyNums -> uglyNums = [2]

        //i + 1 = 3

//Step 3. 
    //i = 3

    //while(1 < 3) -> true
        //3 % 2 = 0 -> no 
        //3 % 3 = 0 -> yes 
        //i is an ugly number, add it to uglyNums -> uglyNums[2,3]

        //i + 1 = 4

//Step 4. 
    //i = 4

    //while(2 < 3) -> true
        //4 % 2 = 0 -> yes
        //i is an ugly number, add it to uglyNums -> uglyNums[2,3,4]

        //i + 1 = 5

//Step 5. 
    //i = 5
    
    //while(3 < 3) -> false, stop the while loop 

//Step 6. 
    //return uglyNums[2] -> 4

        
    