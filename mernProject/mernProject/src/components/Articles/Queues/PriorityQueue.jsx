import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const PriorityQueue = () => {
    return (
        <div className="flex">
          <SideNav/>
          <div className="w60 bg-gray-200">
          <h1><b>Priority Queue</b></h1><br></br>
          <p>A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. There are two types of Priority Queues. They are:</p><br></br>
          <img src="https://www.callicoder.com/static/dc8fe7b4bba83ff881497f51b25951a2/51aac/priority-queue-data-structure.jpg"></img>
          <p>1. Ascending Priority Queue: Element can be inserted arbitrarily but only smallest element can be removed. For example, suppose there is an array having elements 4, 2, 8 in the same order. So, while inserting the elements, the insertion will be in the same sequence but while deleting, the order will be 2, 4, 8.

</p>
          <p>2. Descending priority Queue: Element can be inserted arbitrarily but only the largest element can be removed first from the given Queue. For example, suppose there is an array having elements 4, 2, 8 in the same order. So, while inserting the elements, the insertion will be in the same sequence but while deleting, the order will be 8, 4, 2.</p><br></br>
          <p>The time complexity of the Priority Queue is O(logn).</p>
          
          
    
    
          </div>
          </div>
      )
}

export default PriorityQueue