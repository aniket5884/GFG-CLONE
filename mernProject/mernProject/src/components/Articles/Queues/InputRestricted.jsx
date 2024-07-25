import React from 'react';
import SideNav from '../sideNavBar/SideNav';

const InputRestricted = () => {
    return (
        <div className="flex">
          <SideNav/>
          <div className="w60 bg-gray-200">
          <h1><b>Input Restricted Queue</b></h1><br></br>
          <p>An input restricted queue is a special case of a double-ended queue where data can be inserted from one end(rear) but can be removed from both ends (front and rear). This kind of Queue does not follow FIFO(first in first out):</p><br></br>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221226210938/inputrestrictedqueue.jpg"></img><br></br>
          <h1><b>Operations on Input Restricted Queue:</b></h1><br></br>
          <p>Mainly the following three basic operations are performed on input restricted queue:</p>
          <p>1. insertRear(): Adds an item at the rear of the queue. 
</p>
          <p>2. deleteFront(): Deletes an item from the front of the queue. </p>
          <p>3. deleteRear(): Deletes an item from rear of the queue.</p><br></br>
          <p> In addition to above operations, following operations are also supported</p><br></br>
          <p>1. getFront(): Gets the front item from the queue. 

</p>
          <p>2. getRear():Gets the last item from the queue. </p>
          <p>3. isEmpty(): Checks whether queue is empty or not. </p>
          <p>4. isFull(): Checks whether queue is full or not.</p>
           
          
          
    
    
          </div>
          </div>
      )
}

export default InputRestricted