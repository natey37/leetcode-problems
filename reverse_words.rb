=begin 
Interview Cake - Reverse Words 

Write a method reverse_words!() that takes a message as a string and reverses the order of the words in place. ↴

For example:

  message = 'cake pound steal'

reverse_words!(message)

puts message
# Prints: 'steal pound cake'

When writing your method, assume the message contains only letters and spaces, and all words are separated by one space.
=end 


def reverse_words!(message)

    reverse_characters!(message, 0, message.length - 1)
    
    current_index = 0
  
    (0..message.length).each do |i|
      if i == message.length || message[i] == ' '
        
        reverse_characters!(message, current_index, i - 1)

        current_index = i + 1
      end 
    end 

      return message
end
  
def reverse_characters!(message, left_index, right_index)
  
    while left_index < right_index
  
      message[left_index], message[right_index] =
        message[right_index], message[left_index]
  
      left_index  += 1
      right_index -= 1
    end
end
  
 