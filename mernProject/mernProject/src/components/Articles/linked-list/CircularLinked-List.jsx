import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const CircularLinkedList = () => {
  return (
    <div className="flex">
      <SideNav/>
      <div  className="w60 bg-gray-200">
     <h1><b>Introduction to Circular Linked List</b></h1><br></br>
     <h1><b>What is Circular linked list?
</b></h1>
     <p>The circular linked list is a linked list where all nodes are connected to form a circle. In a circular linked list, the first node and the last node are connected to each other which forms a circle. There is no NULL at the end.

</p>
<img src= "https://media.geeksforgeeks.org/wp-content/uploads/20240402130347/circular-linked-list-copy.webp"></img>
     <p>There are generally two types of circular linked lists:</p>
     <p>1. Circular singly linked list: In a circular Singly linked list, the last node of the list contains a pointer to the first node of the list. We traverse the circular singly linked list until we reach the same node where we started. The circular singly linked list has no beginning or end. No null value is present in the next part of any of the nodes.</p>
     <img src= "https://media.geeksforgeeks.org/wp-content/uploads/20220817185024/CircularSinglyLinkedList-660x172.png"></img>
     <p>2. Circular Doubly linked list: Circular Doubly Linked List has properties of both doubly linked list and circular linked list in which two consecutive elements are linked or connected by the previous and next pointer and the last node points to the first node by the next pointer and also the first node points to the last node by the previous pointer.
</p>
<img src= "https://media.geeksforgeeks.org/wp-content/uploads/20220817185057/Circulardoublylinkedlist-660x155.png"></img>
<h1><b>Operations on the circular linked list:</b></h1><br></br>
<p>We can do some operations on the circular linked list similar to the singly linked list which are:</p>
<p>1. Insertion<br></br>
   2. Deletion</p>
<div><br></br>

  <h1><b>Advantages of Circular Linked Lists: </b></h1><br></br>
  <p>1. Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again. 

</p>
  <p>2. Useful for implementation of a queue. Unlike this implementation, we don’t need to maintain two pointers for front and rear if we use a circular linked list. We can maintain a pointer to the last inserted node and the front can always be obtained as next of last.</p>
  <p>3. Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list. </p>
  <p>4. Circular Doubly Linked Lists are used for the implementation of advanced data structures like the Fibonacci Heap.</p>
  <p>5. Implementing a circular linked list can be relatively easy compared to other more complex data structures like trees or graphs.</p>
  </div><br></br>
  <div>
    <h1><b>Disadvantages of circular linked list:</b></h1><br></br>
    <p>1. Compared to singly linked lists, circular lists are more complex.
</p>
    <p>2. Reversing a circular list is more complicated than singly or doubly reversing a circular list.</p>
    <p>3. It is possible for the code to go into an infinite loop if it is not handled carefully.</p>
    <p>4. It is harder to find the end of the list and control the loop.</p>
    <p>5. Although circular linked lists can be efficient in certain applications, their performance can be slower than other data structures in certain cases, such as when the list needs to be sorted or searched.</p>
    <p>6. Circular linked lists don’t provide direct access to individual nodes</p>

  </div><br></br>
  <div>
    <h1><b>Applications of circular linked lists:</b></h1><br></br>
    <p>1. Multiplayer games use this to give each player a chance to play.



</p>
    <p>2. A circular linked list can be used to organize multiple running applications on an operating system.These     applications are iterated over by the OS.</p>
    <p>3. Circular linked lists can be used in resource allocation problems.</p>
    <p>4. Circular linked lists are commonly used to implement circular buffers.</p>
    <p>5. Circular linked lists can be used in simulation and gaming.</p>
    <p></p>
  </div>

</div>
     </div>
  )
}

export default CircularLinkedList