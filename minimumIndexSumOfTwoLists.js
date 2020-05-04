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

/*
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let results = new Map()
    let minSum = Infinity
    let returnArr = []
    for(let i = 0; i < list1.length; i++){
        results.set(list1[i], i)
    }
     for(let i = 0; i < list2.length; i++){
        if(results.has(list2[i])){
           if(results.get(list2[i]) + i  <  minSum){
               minSum = results.get(list2[i]) + i
               returnArr = [list2[i]]
           } else if(results.get(list2[i]) + i  ===  minSum){
               returnArr.push(list2[i])
           }
        }
    }
    return returnArr
}