import React from 'react'
import SideNav from '../sideNavBar/SideNav'

const SiglyLinkedList = () => {
  return (
    <div className="flex">
      <SideNav/>
      <div className= "w60 bg-gray-200">
        <h1><b>What is Singly List?</b></h1><br></br>
        <p>A singly linked list is a linear data structure in which the elements are not stored in contiguous memory locations and each element is connected only to its next element using a pointer.</p>
        <img src= "https://media.geeksforgeeks.org/wp-content/uploads/20240219155344/Singly-Linked-List.webp"></img><br></br>
        
     
      </div></div>
  )
}

export default SiglyLinkedList