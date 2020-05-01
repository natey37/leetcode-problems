=begin 
1128. Number of Equivalent Domino Pairs
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

=end 

# @param {Integer[][]} dominoes
# @return {Integer}
def num_equiv_domino_pairs(dominoes)
    unique_domino_counts = {}
    dominoes.each do |pair|
        a, b = pair.sort
        n = a * 10 + b
        if !unique_domino_counts.include?(n)
            unique_domino_counts[n] = 0
        end 
        unique_domino_counts[n] += 1
    end 
    return unique_domino_counts.values.reduce(0){ |sum, num| num > 1 ? sum += num*(num-1)/2 : sum += 0} 

end

