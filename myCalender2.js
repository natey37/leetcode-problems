/*
731. My Calendar II

mplement a MyCalendarTwo class to store your events. A new event can be added if adding the event will not cause a triple booking.

Your class will have one method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A triple booking happens when three events have some non-empty intersection (ie., there is some time that is common to all 3 events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
Example 1:

MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(50, 60); // returns true
MyCalendar.book(10, 40); // returns true
MyCalendar.book(5, 15); // returns false
MyCalendar.book(5, 10); // returns true
MyCalendar.book(25, 55); // returns true
Explanation: 
The first two events can be booked.  The third event can be double booked.
The fourth event (5, 15) can't be booked, because it would result in a triple booking.
The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
*/

var MyCalendarTwo = function() {
    this.calender = []
    this.doubleBooked = []
    
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(let time of this.doubleBooked){
        if(start < time[1] && end > time[0]) return false 
    }
    for(let time of this.calender){
        if(start < time[1] && end > time[0])
            this.doubleBooked.push([Math.max(start, time[0]), Math.min(end, time[1])])
    }
    this.calender.push([start,end])
    return true
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */



var delNodes = function(root, to_delete) {
    let results = []
      
    const solve = (root, add) => {
        if(root == null) return null
        
        if(to_delete.includes(root.val)) {
            if(root.left) solve(root.left, true)
            if(root.right) solve(root.right, true)
            root.left = null
            root.right = null
            return null
        } else {
            root.left = solve(root.left, false)
            root.right = solve(root.right, false)
            if(add && !results.includes(root)) results.push(root)
            return root
        }
    }
    
    solve(root, true)
    return results
};