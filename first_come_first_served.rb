=begin
Interview Cake - First Come First Serve 

Given all three arrays, write a method to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
    would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 3, 5, 4, 6]
    would be first-come, first-served.
=end 

def first_come_first_served(take_out_orders, dine_in_orders, served_orders)
  
  served_orders.each do |num|
    if num == take_out_orders[0] 
      take_out_orders.shift()
    elsif num == dine_in_orders[0]
      dine_in_orders.shift()
    else 
      return false 
    end 
  end 

    take_out_orders.empty? && dine_in_orders.empty? ? true : false 
  
end 

