import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const OutputRestricted = () => {
    return (
        <div className="flex">
          <SideNav/>
          <div className="w60 bg-gray-200">
          <h1><b>Output Restricted Queue</b></h1><br></br>
          <p>An output-restricted queue is a special case of a double-ended queue where data can be removed from one end(front) but can be inserted from both ends (front and rear). This kind of Queue does not follow FIFO(first in first out):</p><br></br>
          <img src = "https://media.geeksforgeeks.org/wp-content/uploads/20230103222135/outputrestrictedqueue.jpg"></img><br></br>
          <h1><b>Operations on Output Restricted Queue:</b></h1><br></br>
          <p>Mainly the following three basic operations are performed on output restricted queue:

 
 

</p>
          <p>1. insertRear(): Adds an item at the rear of the queue.</p>
          <p>2. insertFront(): Adds an item at the front of the queue.</p>
          <p>3. deleteFront(): Deletes an item from the front of the queue. </p><br></br>
          <p>In addition to the above operations, the following operations are also supported </p>
          <p>1. getFront(): Gets the front item from the m queue. </p>
          <p>2. getRear(): Gets the last item from the m queue.</p>
          <p>3. isEmpty(): Checks whether the r queue is empty or not. </p>
          <p>4. isFull(): Checks whether the queue is full or not.</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

          
    
    
          </div>
          </div>
      )
}

export default OutputRestricted