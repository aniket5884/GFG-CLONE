import React from 'react'
import SideNav from '../sideNavBar/SideNav'
const LinkedList = () => {
  return (
    <div className="flex">
      <SideNav/>
      <div className="w60 bg-gray-200">
      <h1><b>What is Linked List?</b></h1><br></br>
      <p>A linked list is a linear data structure that consists of a series of nodes connected by pointers. Each node contains data and a reference to the next node in the list. Unlike arrays, linked lists allow for efficient insertion or removal of elements from any position in the list, as the nodes are not stored contiguously in memory</p>
      <img src= "https://media.geeksforgeeks.org/wp-content/uploads/20240410135517/linked-list.webp"></img><br></br>
      <h1><b>Utility of Linked List</b></h1><br></br>
      <p>Lists are one of the most popular and efficient data structures, with implementation in every programming language like C, C++, Python, Java, and C#.

Apart from that, linked lists are a great way to learn how pointers work. By practicing how to manipulate linked lists, you can prepare yourself to learn more advanced data structures like graphs and trees.</p><br></br>
<h1><b>Linlked List Applications</b></h1><br></br>
      <p>1. Dynamic memory allocation
</p>
      <p>2. Implemented in stack and queue</p>
      <p>3. In undo functionality of softwares</p>
      <p>4. Hash tables, Graphs</p>
      


      </div>
      </div>
  )
}

export default LinkedList