/*
599. Minimum Index Sum of Two Lists
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // let commonInterests = []
    // let sum = Infinity
    // for(let i=0;i<list1.length;i++){
    //     for(let j=0;j<list2.length;j++){
    //         if(list1[i] === list2[j]){
    //             let min = i + j 
    //             if(min < sum){
    //                 commonInterests = []
    //                 commonInterests.push(list1[i])
    //             } else if(min === sum){
    //                 commonInterests.push(list1[i])
    //             }
    //             sum = Math.min(sum, min)
    //         }
    //     }
    // }
    // return commonInterests
    let matches = []
    let map = new Map()
    let sum = Infinity
    for(let i=0;i<list1.length;i++){
        if(!map.has(list1[i])){
            map.set(list1[i], i)
        }
    }
    for(let j=0;j<list2.length;j++){
        if(map.has(list2[j])){
            let min = map.get(list2[j]) + j 
            if(min < sum){
                matches = []
                matches.push(list2[j])
            } else if(min === sum){
                matches.push(list2[j])
            }
            sum = Math.min(sum, min)
        }
    }
    return matches
};