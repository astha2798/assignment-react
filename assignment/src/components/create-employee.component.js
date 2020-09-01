import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      address: '',
      email: '',
      company: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      company: this.state.company
    }

    console.log(employee);
    document.forms["myForm"].reset();
    document.getElementById("empName").value='';
    document.getElementById("empAddress").value='';
    document.getElementById("empEmail").value='';
    document.getElementById("empCompany").value='';// document.getElementById("myForm").reset();
    document.getElementById("createdEmployee").innerHTML="<h3>Employee Created</h3>";
    axios.post('http://localhost:5000/employees/add', employee)
      .then(res => document.getElementById("createdId").innerHTML=res.data);

    // window.location = '/create';
    // alert('An employee was submitted: ' + this.state.name);

  }

  render() {
    return (
    <div>
      <h3>Employee Form</h3>
      <form id="myForm" onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input type="text"
              required
              className="form-control"
              id="empName"
              value={this.state.name}
              onChange={this.onChangeName}/>
         
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input type="text"
              required
              className="form-control"
              id="empAddress"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              id="empEmail"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Comapny: </label>
          <input  type="text"
              required
              className="form-control"
              id="empCompany"
              value={this.state.company}
              onChange={this.onChangeCompany}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Employee" className="btn btn-primary" />
        </div>
      </form>
      <span id="createdEmployee">
      </span>
      <span id="createdId">
      </span>
    </div>
    )
  }
}