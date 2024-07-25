import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudyContent from "./Articles/StudyContent";
import Home from "./HomePage/Home";
import CourseSelling from "./courseSellingPage/CourseSelling";
import CircularDoublyLinkedList from "./Articles/linked-list/CircularDoublyLinked-List";
import CircularLinkedList from "./Articles/linked-list/CircularLinked-List";
import DoublyLinkedList from "./Articles/linked-list/DoublyLinked-List";
import LinkedList from "./Articles/linked-list/Linked-List";
import SiglyLinkedList from "./Articles/linked-list/SiglyLinked-List";
import TypeofLinkedList from "./Articles/linked-list/TypeofLinked-List";
import Queue from "./Articles/Queues/Queue";
import InputRestricted from "./Articles/Queues/InputRestricted";
import OutputRestricted from "./Articles/Queues/OutputRestricted";
import CircularQueue from "./Articles/Queues/CircularQueue";

import PriorityQueue from "./Articles/Queues/PriorityQueue";
import Stack from "./Articles/StackDataStructure/Stack";

import SideNav from "./Articles/sideNavBar/SideNav";
// import LinkedListLayout from "./Articles/linked-list/LinkedListLayout";

const Dashboard = () => {
  return (
    <div className="mainContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<StudyContent />} />
          <Route path="/course" element={<CourseSelling />} />
          <Route path="/Linked-List" element={<LinkedList />} />
          <Route path="TypeofLinked-List" element={<TypeofLinkedList />} />
          <Route path="SiglyLinked-List" element={<SiglyLinkedList />} />
          <Route path="DoublyLinked-List" element={<DoublyLinkedList />} />
          <Route path="CircularLinked-List" element={<CircularLinkedList />} />
          <Route
            path="CircularDoublyLinked-List"
            element={<CircularDoublyLinkedList />}
          />
          <Route path="/Queue" element={<Queue />} />
          <Route path="/InputRestrictedQueue" element={<InputRestricted />} />
          <Route path="/OutputRestrictedQueue" element={<OutputRestricted />} />
          <Route path="/CircularQueue" element={<CircularQueue />} />
          
          <Route path="/PriorityQueue" element={<PriorityQueue />} />
          <Route path="/Stack" element={<Stack />} />
          
          

          
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;
