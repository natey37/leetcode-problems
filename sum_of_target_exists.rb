=begin 
Write a method that takes an integer flight_length (in minutes) and an array of integers movie_lengths (in minutes) and returns a boolean indicating whether there are two numbers in movie_lengths whose sum equals flight_length.

When building your method:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
=end 

def sum_of_target_exists(array, target_num)

    unique_numbers = Set.new
  
    array.each do |first_num|
  
      second_num = target_num - first_num
  
      if unique_numbers.include?(second_num)
        return true
      else
        unique_numbers.add(first_num)
      end
    end
    return false 
end