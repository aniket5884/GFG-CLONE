import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

  return (
    <div className="w20 bg-gray-100 flex mar h-80">
      <ul className="flex flex-col justify-between ">
      <li>

<Link to="/Linked-List" ><b>
 Linked-List</b></Link>
</li>
        <li>

          <Link to="/TypeofLinked-List" >
           # Types of Linked-List</Link>
        </li>
        <li>
    
          <Link  to="/SiglyLinked-List">
          # Singly Linked-List</Link>
        </li>
        <li>
          
          <Link to="/DoublyLinked-List" >
          # Doubly Linked-List</Link>
        </li>
        <li>
          
          <Link to="/CircularLinked-List" >
          # Circular Linked-List</Link>
        </li>
        <li>
          <Link to="/CircularDoublyLinked-List">
          # Circular Doubly Linked-List</Link>
        </li>
        <br></br>
        {/* <div className="w20 bg-gray-100 flex mar h-80"> */}
      <ul className="flex flex-col justify-between ">
      <li>

<Link to="/Queue" ><b>
 Queue</b></Link>
</li>
<li>



<Link to="/InputRestrictedQueue" >
 # Input Restricted </Link>
</li>
<li>

<Link to="/OutputRestrictedQueue" >
 # Output Restricted </Link>
</li>
<li>

<Link to="/CircularQueue" >
 # Circular Queue </Link>
</li>
<li>

<Link to="/PriorityQueue" >
 # Priority Queue</Link>
</li>
 <ul className="flex flex-col justify-between ">
      <li>

<Link to="/Stack" ><b>
 Stack</b></Link>
</li>

</ul>
</ul>
  

      </ul>
     
      
        
    </div>
    

    
    
  );
};

export default SideNav;
