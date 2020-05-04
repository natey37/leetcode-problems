=begin 
Write an efficient method that checks whether any permutation  of an input string is a palindrome.
=end 
require 'set'

def has_palindrome_permutation?(string)

  unpaired_characters = Set.new

  (0...string.length).each do |i|
    letter = string[i]

    if unpaired_characters.include?(letter)
      unpaired_characters.delete(letter)
    else
      unpaired_characters.add(letter)
    end
  end

  return unpaired_characters.length <= 1
end


