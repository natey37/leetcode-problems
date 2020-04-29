=begin 
Interview Cake - Merge Arrays 

Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as an array ↴ of integers [start_time, end_time]. These integers represent the number of 30-minute blocks past 9:00am.

For example:

[2, 3]  # Meeting from 10:00 – 10:30 am
[6, 9]  # Meeting from 12:00 – 1:30 pm

Write a method merge_ranges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

For example, given:

  [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

your method would return:

  [[0, 1], [3, 8], [9, 12]]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

=end 

def merge_ranges(meetings)
    sorted = meetings.sort
  
    merged_meetings = [sorted[0]]
  
    sorted[1..-1].each do |current_start, current_end|
      meeting_start = merged_meetings[-1][0]
      meeting_end = merged_meetings[-1][1]
  
      if current_start <= meeting_end
        merged_meetings[-1] = [
          meeting_start, 
          [current_end, meeting_end].max 
        ]
      else 
        merged_meetings << [current_start, current_end]
      end 
  
    end 
  
    return merged_meetings
  end 