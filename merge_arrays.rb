=begin
Interview Cake - Merge Arrays 
We have our lists of orders sorted numerically already, in arrays. Write a method to merge our arrays of orders into one sorted array.

For example:
    my_array     = [3, 4, 6, 10, 11, 15]
    alices_array = [1, 5, 8, 12, 14, 19]

puts merge_arrays(my_array, alices_array)
    # Prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
=end 

def merge_arrays(arr1, arr2)
  size = (arr1 + arr2).length
  new_array = []
  
  current_idx1 = 0 
  current_idx2 = 0 
  current_idx_merged = 0 

  while current_idx_merged < size

    arr1_exhausted = current_idx1 >= arr1.length 
    arr2_exhausted = current_idx2 >= arr2.length 

    if !arr1_exhausted && (arr2_exhausted || (arr1[current_idx1] < arr2[current_idx2]))
      new_array[current_idx_merged] = arr1[current_idx1]
      current_idx1 += 1 
    else 
      new_array[current_idx_merged] = arr2[current_idx2]
      current_idx2 += 1 
    end 

    current_idx_merged += 1 

  end 

    return new_array
end 

