/*
1090. Largest Values From Labels
We have a set of items: the i-th item has value values[i] and label labels[i].

Then, we choose a subset S of these items, such that:

|S| <= num_wanted
For every label L, the number of items in S with label L is <= use_limit.
Return the largest possible sum of the subset S.

 

Example 1:

Input: values = [5,4,3,2,1], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1
Output: 9
Explanation: The subset chosen is the first, third, and fifth item.
Example 2:

Input: values = [5,4,3,2,1], labels = [1,3,3,3,2], num_wanted = 3, use_limit = 2
Output: 12
Explanation: The subset chosen is the first, second, and third item.
Example 3:

Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 1
Output: 16
Explanation: The subset chosen is the first and fourth item.
Example 4:

Input: values = [9,8,8,7,6], labels = [0,0,0,1,1], num_wanted = 3, use_limit = 2
Output: 24
Explanation: The subset chosen is the first, second, and fourth item.

*/


/*
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    let valsWithLabels = []
    let count = {}
    let sum = 0 
    //Here we create an array that contains our pairs (the value with its corresponding label)
    for(let i=0;i<labels.length;i++){
        valsWithLabels[i] = [values[i], labels[i]]
    }
    //Next we sort pairs by the value, sorting the greatest to the least
    valsWithLabels.sort((a,b) => b[0] - a[0])
    
    //We iterate through each of the pairs and keep track of how many of a certain label have been used
    for(let i=0;i<valsWithLabels.length;i++){
        let value = valsWithLabels[i][0]
        let label = valsWithLabels[i][1]
        //if we have used the total available numbers then we return the sum 
        if(!numWanted) return sum
        //here we add a count for each label
        if(!count[label]){
            count[label] = 1
        } else {
            count[label] += 1
        }
        //if we are on a value whose label count that is greater than the use limit we will skip this number because we cannot use it
        if(count[label] > useLimit) continue;
        //we add this value to our sums value
        sum += value
        //decrement the numbers wanted so we keep track of how many numbers we have used so far
        numWanted -= 1
    }
    
    return sum
};

/*
Input: values = [5,4,3,2,6], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1

After we create our pairs we have,
valsWithLabels  = [ [ 5, 1 ], [ 4, 1 ], [ 3, 2 ], [ 2, 2 ], [ 6, 3 ] ]
Then we sort,
valsWithLabels = [ [ 6, 3 ], [ 5, 1 ], [ 4, 1 ], [ 3, 2 ], [ 2, 2 ] ]

for(let i=0;i<valsWithLabels.length;i++)
    value = 6
    label = 3

    count[3] = 1
    
    sum += 6 -> 6

    numWanted - 1 -> 2

for(let i=2;i<valsWithLabels.length;i++)
    value = 5
    label = 1

    count[1] = 1
    
    sum += 5 -> 11

    numWanted - 1 -> 1

for(let i=3;i<valsWithLabels.length;i++){
    value = 4
    label = 1

    count[1] = 2
    count[1] > useLimit -> continue;
    
for(let i=4;i<valsWithLabels.length;i++)
    value = 3
    label = 2

    count[2] = 1
    
    sum += 3 -> 14

    numWanted - 1 -> 0

for(let i=5;i<valsWithLabels.length;i++)
    numWanted = 0 = false 
    return sum -> 14
*/

