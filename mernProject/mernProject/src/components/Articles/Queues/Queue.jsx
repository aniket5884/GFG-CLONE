import React from "react";
import SideNav from "../sideNavBar/SideNav";

const Queue = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="w60 bg-gray-200">
        <h1><b> Queue Data Structure</b></h1><br></br>
        <p>A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of “First in, First out” (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.</p><br></br>
        <img src= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png"></img><br></br>
        <h1><b>What is Queue in Data Structures?</b></h1><br></br>
        <p>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It operates like a line where elements are added at one end (rear) and removed from the other end (front).</p><br></br>
        <h1><b>Basic Operations of Queue Data Structure</b></h1><br></br>
        <p>1. Enqueue (Insert): Adds an element to the rear of the queue.
</p>
        <p>2. Dequeue (Delete): Removes and returns the element from the front of the queue.</p>
        <p>3. Peek: Returns the element at the front of the queue without removing it.</p>
        <p>4. Empty: Checks if the queue is empty.</p>
        <p>5. Full: Checks if the queue is full.</p><br></br>
        <h1><b>Applications of Queue</b></h1><br></br>
        <p>1. Task scheduling in operating systems
</p>
        <p>2. Simulation of real-world systems (e.g., waiting lines)</p>
        <p>3. Priority queues for event processing queues for event processing</p>
      </div>
    </div>
  );
};

export default Queue;
