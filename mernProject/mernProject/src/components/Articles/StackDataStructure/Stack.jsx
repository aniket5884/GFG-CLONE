import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const Stack = () => {
    return (
        <div className="flex">
          <SideNav/>
          <div className="w60 bg-gray-200">
          <h1><b>Stack Data Structure</b></h1><br></br>
          <p>A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.</p><br></br>
          <img src= "https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxizaxr0ayfu1lqxe7i3u.png"></img><br></br>
          <h1><b>Key Operations on Stack Data Structures</b></h1><br></br>
          
          <p>1. Push: Adds an element to the top of the stack.



</p>
          
          <p>2. Pop: Removes the top element from the stack.</p>
          
          <p>3. Peek: Returns the top element without removing it.</p>
          
          <p>4. IsEmpty: Checks if the stack is empty.</p>
          
          <p>5. IsFull: Checks if the stack is full (in case of fixed-size arrays)</p><br></br>
          <h1><b>Applications of Stack Data Structures</b></h1>
          <p>1. Recursion




</p>
          
          <p>2. Expression Evaluation and Parsing</p>
          
          <p>3. Depth-First Search (DFS)</p>
          <p>4. Undo/Redo Operations</p>
          <p>5. Browser History</p>
          <p>6. Function Calls</p>
         
    
    
          </div>
          </div>
      )
}

export default Stack