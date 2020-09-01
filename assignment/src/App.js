import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EmployeeList from "./components/employees-list.component";
// import EditExercise from "./components/edit-exercise.component";
import CreateEmployee from "./components/create-employee.component";
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/employee-form" component={CreateEmployee} />
      <Route path="/employee-details" component={EmployeeList} />
      
      </div>
    </Router>
  );
}

export default App;
