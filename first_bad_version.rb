=begin    
278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
=end 

# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
    floor_index = 0 
    ceiling_index = n 
    result = 0
    
    while floor_index < ceiling_index 
        middle_index = floor_index + ((ceiling_index - floor_index) / 2)
        if is_bad_version(middle_index)
            ceiling_index = middle_index 
        else 
            floor_index = middle_index + 1 
        end 
        
        result = floor_index 
    end 
    
    return result 
end
