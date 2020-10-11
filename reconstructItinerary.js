/*
332. Reconstruct Itinerary
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
*/


/*
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {}
    
    for(let i=0;i<tickets.length;i++){
        let depart = tickets[i][0]
        let arrive = tickets[i][1]
        
        if(!map[depart]){
            map[depart] = [arrive]
        } else {
            map[depart].push(arrive)
        }
    }

    for(let location in map){
        map[location].sort()
    }
    
    let itinerary = []
    const dfs = (node) => {
        let dest = map[node]
        while(dest && dest.length > 0){
            dfs(dest.shift())
        }
        itinerary.push(node)
    }
    
    dfs("JFK")
    return itinerary.reverse()
}

/*
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]

After we make our map, we have 
map = { MUC: [ 'LHR' ], JFK: [ 'MUC' ], SFO: [ 'SJC' ], LHR: [ 'SFO' ] }
itineray = []
Then we run our dfs
dfs("JFK")
    dest = ['MUC']
    while(dest && dest.length > 0)
        dfs(dest.shift())

    dfs("MUC")
        dest = ['LHR']
        while(dest && dest.length > 0)
            dfs(dest.shift())

        dfs("LHR")
            dest = ['SFO']
            while(dest && dest.length > 0)
                dfs(dest.shift())

            dfs("SFO")
                dest = ['SJC']
                while(dest && dest.length > 0)
                    dfs(dest.shift())

                dfs("SJC")
                    dest = undefined
                    while(dest && dest.length > 0)
                    itinerary.push('SJC')

                itinerary.push('SFO')

            itinerary.push('LHR')

        itinerary.push('MUC')

    itinerary.push('JFK')


itinerary = ["SJC", "SFO", "LHR", "MUC", "JFK"]
We reverse and return ["JFK","MUC","LHR","SFO","SJC"]

*/