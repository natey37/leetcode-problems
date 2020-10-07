/*
911. Online Election
In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

 

Example 1:

Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
Output: [null,0,1,1,0,0,1]
Explanation: 
At time 3, the votes are [0], and 0 is leading.
At time 12, the votes are [0,1,1], and 1 is leading.
At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
This continues for 3 more queries at time 15, 24, and 8.
*/

/*
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.countVotes = {};
    this.record = {};
    this.times = times;
    let max = 0;
    let lead = persons[0];
    for(let i = 0; i < persons.length; i++){
        this.countVotes[persons[i]] = (this.countVotes[persons[i]] || 0) + 1;
        if(max < this.countVotes[persons[i]]){
            max = this.countVotes[persons[i]];
            lead = persons[i];
        }else if(max === this.countVotes[persons[i]]){
            lead = persons[i];
        }
        this.record[times[i]] = lead;
    }
};

TopVotedCandidate.prototype.q = function(t) {
    let i = 0, j = this.times.length - 1;
    if(t === this.times[i]) return this.record[this.times[i]];
    if(t === this.times[j]) return this.record[this.times[j]];
    let mid = Math.floor((i + j) / 2);
    while(i < j){
        if(t === this.times[mid]) return this.record[this.times[mid]];
        if(t > this.times[mid]) i = mid + 1;
        else j = mid;
        mid = Math.floor((i + j) / 2);
    }
    return this.times[i] <= t ? this.record[this.times[i]] : this.record[this.times[i - 1]];
};