/*
46. Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(numbers) {
    let res = [];
    dfs(numbers, [], Array(numbers.length).fill(false), res);
    return res;
}

function dfs(numbers, path, used, res) {
    if (path.length == numbers.length) {
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (used[i]) continue;
        path.push(numbers[i]);
        used[i] = true;
        dfs(numbers, path, used, res);
        path.pop();
        used[i] = false;
    }
}

//Step 1a.
    //dfs([1,2,3], [], [false, false, false], [])
        //if([].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> false 
            //path.push(1) -> [1]
            //used[0] = true -> [true, false, false]
            //dfs([1,2,3], [1], [true, false, false], [])
                //MOVE TO STEP 2a. 
//Step 1b.
            //AT THIS POINT RES = [[1,2,3], [1,3,2]]
            //[1].pop() -> []
            //used[0] = false -> [false, false, false]

            //if(used[1]) -> false 
            //path.push(2) -> [2]
            //used[1] = true -> [false, true, false]
            //dfs([1,2,3], [2], [false, true, false], [[1,2,3], [1,3,2]])
                //MOVE TO STEP 7a.
//Step 1c.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1]]
            //[2].pop() -> []
            //used[1] = false -> [false, false, false]

            //if(used[2]) -> false 
            //path.push(3) -> [3]
            //used[2] = true -> [false, false, true]
            //dfs([1,2,3], [3], [false, false, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
                //MOVE TO STEP 12a.
//Step 1d. 
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
            //[3].pop() -> []
            //used[2] = false -> [false, false, false]

                //FINSIHED FUNCTION, EXIT
                //Now we return the res array which contains all of our permutations. 

//Step 2a. 
    //dfs([1,2,3], [1], [true, false, false], [])
        //if([1].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> continue;
            //if(used[1]) -> false 
            //path.push(2)
            //used[1] = true -> [true, true, false]
            //dfs([1,2,3], [1,2], [true, true, false], [])
                //MOVE TO STEP 3a.
//Step 2b.
            //[1,2].pop() -> [1]
            //used[1] = false -> [true, false, false]
            //if(used[2]) -> false 
            //path.push(3)
            //used[2] = true -> [true, false, true]
            //dfs([1,2,3], [1,3], [true, false, true], [[1,2,3]])
                //MOVE TO STEP 5a.
//Step 2c.
            //[1,3].pop() -> [1]
            //used[2] = false -> [true, false, false]
                //FINISHED FUNCTION, MOVE BACK TO 1b.

//Step 3a.
    //dfs([1,2,3], [1,2], [true, true, false], [])
        //if([1,2].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> continue;
            //if(used[1]) -> continue;
            //if(used[2]) -> false 
            //path.push(3)
            //used[2] = true -> [true, true, true]
            //dfs([1,2,3], [1,2,3], [true, true, true], [])
                //MOVE TO STEP 4a.
//Step 3b.
            //res = [[1,2,3]]
            //[1,2,3].pop() -> [1,2]
            //used[2] = false -> [true, true, false]
                //FINISHED FUNCTION, MOVE BACK TO 2b.

//Step 4a. 
    //dfs([1,2,3], [1,2,3], [true, true, false], [])
        //if([1,2,3].length == [1,2,3].length) -> true
            //[].push(Array.from([1,2,3]))
            //return 
                //MOVE BACK TO 3b.
       

//Step 5a.
    //dfs([1,2,3], [1,3], [true, false, true], [[1,2,3]])
        //if([1,3].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> continue;

            //if(used[1]) -> false 
            //path.push(2) -> [1,3,2]
            //used[1] = true -> [true, true, true]
            //dfs([1,2,3], [1,3,2], [true, true, true], [[1,2,3]])
                //MOVE TO STEP 6a.
//Step 5b.
            //res = [[1,2,3], [1,3,2]]
            //[1,3,2].pop() -> [1,3]
            //used[1] = false -> [true, false, true]
            
            //if(used[2]) -> continue
                //FINISHED FUNCTION, MOVE BACK TO 2c.

//Step 6a.
    //dfs([1,2,3], [1,3,2], [true, true, true], [[1,2,3]])
        //if([1,3,2].length == [1,2,3].length) -> true
            //[[1,2,3]].push(Array.from([1,3,2]))
            //return 
                //MOVE BACK TO 5b.
       
    
//Step 7a.
    //dfs([1,2,3], [2], [false, true, false], [[1,2,3], [1,3,2]])
        //if([2].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> false 
            //path.push(1) -> [2,1]
            //used[0] = true -> [true, true, false]
            //dfs([1,2,3], [2,1], [true, true, false], [[1,2,3], [1,3,2]])
                //MOVE TO STEP 8a.
//Step 7b.
            //res = [[1,2,3], [1,3,2], [2,1,3]]
            //[2,1].pop() -> [2]
            //used[0] = false -> [false, true, false]

            //if(used[1]) -> continue;

            //if(used[2]) -> false 
            //path.push(3) -> [2,3]
            //used[2] = true -> [false, true, true]
            //dfs([1,2,3], [2,3], [false, true, true], [[1,2,3], [1,3,2], [2,1,3]])
                //MOVE TO STEP 10a.
//Step 7c. 
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1]]
            //[2,3].pop() -> [2]
            //used[2] = false -> [false, true, false]
                //FINISHED FUNCTION, MOVE BACK TO 1c.

//Step 8a. 
    //dfs([1,2,3], [2,1], [true, true, false], [[1,2,3], [1,3,2]])
        //if([2,1].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> continue;

            //if(used[1]) -> continue;

            //if(used[2]) -> false
            //path.push(3) -> [2,1,3]
            //used[2] = true -> [true, true, true]
            //dfs([1,2,3], [2,1,3], [true, true, true], [[1,2,3], [1,3,2]])
                //MOVE TO STEP 9
//Step 8b.
            //res = [[1,2,3], [1,3,2], [2,1,3]]
            //[2,1,3].pop() -> [2,1]
            //used[2] = false -> [true, true, false]
                //FINISHED FUNCTION, MOVE BACK TO 7b.

//Step 9
    //dfs([1,2,3], [2,1,3], [true, true, true], [[1,2,3], [1,3,2]])
        //if([2,1,3].length == [1,2,3].length) -> true 
            //[[1,2,3], [1,3,2]].push(Array.from([2,1,3]))
            //return 
                //MOVE BACK TO 8b.

//Step 10a.
    //dfs([1,2,3], [2,3], [false, true, true], [[1,2,3], [1,3,2], [2,1,3]])
        //if([2,3].length == [1,2,3].length) -> false
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> false 
            //path.push(1) -> [2,3,1]
            //used[0] = true -> [true, true, true]
            //dfs([1,2,3], [2,3,1], [true, true, true], [[1,2,3], [1,3,2], [2,1,3]])
                //MOVE TO STEP 11
//Step 10b.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1]]
            //[2,3,1].pop() -> [2,3]
            //used[0] = false -> [false, true, true]

            //if(used[1]) -> continue;

            //if(used[2]) -> continue; 
                //FINISHED FUNCTION, MOVE BACK TO 7c.

//Step 11
    //dfs([1,2,3], [2,3,1], [true, true, true], [[1,2,3], [1,3,2], [2,1,3]])
        //if([2,3,1].length == [1,2,3].length) -> true
            //[[1,2,3], [1,3,2], [2,1,3]].push(Array.from([2,3,1]))
            //return
                //MOVE BACK TO 10b.


//Step 12a.
    //dfs([1,2,3], [3], [false, false, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
        //if([3].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> false 
            //path.push(1) -> [3,1]
            //used[1] = true -> [true, false, true]
            //dfs([1,2,3], [3,1], [true, false, true],[[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
                //MOVE TO STEP 13a.
//Step 12b.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]]
            //[3,1].pop() -> [3]
            //used[0] = false -> [false, false, true]

            //if(used[1]) -> false 
            //path.push(2) -> [3,2]
            //used[1] = true -> [false, true, true]
            //dfs([1,2,3], [3,2], [false, true, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]])
                //MOVE TO STEP 15a.
//Step 12c.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
            //[3,2].pop() -> [3]
            //used[1] = false -> [false, false, true]

            //if(used[2]) -> continue;

                //FINIHSED FUNCTION, MOVE BACK TO 1d.


//Step 13a.
    //dfs([1,2,3], [3,1], [true, false, true],[[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
        //if([3,1].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> continue;

            //if(used[1]) -> false 
            //path.push(2) -> [3,1,2]
            //used[1] = true -> [true, true, true]
            //dfs([1,2,3], [3,1,2], [true, true true],[[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
                //MOVE TO STEP 14
//Step 13b.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]]
            //[3,1,2].pop() -> [3,1]
            //used[1] = false -> [true, false, true]

            //if(used[2]) -> continue;

            //FINISHED FUNCTION, MOVE TO STEP 12b.

//Step 14
    //dfs([1,2,3], [3,1,2], [true, true true],[[1,2,3], [1,3,2], [2,1,3], [2,3,1]])
        //if([3,1,2].length == [1,2,3].length) -> true
            //[[1,2,3], [1,3,2], [2,1,3], [2,3,1]].push(Array.from([3,1,2]))
            //return 
                //MOVE BACK TO STEP 13b.


//Step 15a. 
    //dfs([1,2,3], [3,2], [false, true, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]])
        //if([3,2].length == [1,2,3].length) -> false 
        //for(let i=0;i<[1,2,3].length;i++)
            //if(used[0]) -> false 
            //path.push(1) -> [3,2,1]
            //used[0] = true -> [true, true, true]
            //dfs([1,2,3], [3,2,1], [true, true, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]])
                //MOVE TO STEP 16
//Step 15b.
            //res = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
            //[3,2,1].pop() -> [3,2]
            //used[0] = false -> [false, true, true]

            //if(used[1]) -> continue;

            //if(used[2]) -> continue;

            //FINSIHED FUNCTION, MOVE BACK TO 12c.

//Step 16
    //dfs([1,2,3], [3,2,1], [true, true, true], [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]])
        //if([3,2,1].length == [1,2,3].length) -> true
            //[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2]].push(Array.from([3,2,1]))
            //return 
                //MOVE BACK TO STEP 15b.













