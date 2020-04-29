=begin 
Interview Cake - Reverse String in place 

Write a method that takes a string and reverses the letters in place. 
=end 

def reverse!(string)

left_index  = 0
right_index = str.length - 1

    while left_index < right_index

    string[left_index], string[right_index] =
    string[right_index], string[left_index]
    
    left_index  += 1
    right_index -= 1

    end
        return string
end 

