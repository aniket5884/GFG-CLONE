import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const CircularQueue = () => {
    return (
        <div className="flex">
          <SideNav/>
          <div className="w60 bg-gray-200">
          <h1><b>Circular Queue</b></h1><br></br>
          <p>Circular Queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called ‘Ring Buffer’. This queue is primarily used in the following cases:</p>
          <p>1. Memory Management: The unused memory locations in the case of ordinary queues can be utilized in circular queues.

</p>
          <p>2. Traffic system: In a computer-controlled traffic system, circular queues are used to switch on the traffic lights one by one repeatedly as per the time set.</p>
          <p>3. CPU Scheduling: Operating systems often maintain a queue of processes that are ready to execute or that are waiting for a particular event to occur.</p><br></br>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/Circular-queue_1.png"></img>
          
          
    
    
          </div>
          </div>
      )
}

export default CircularQueue