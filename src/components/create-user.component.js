import React, { Component } from 'react';
import axios from 'axios';
import '../brcastyle.css';

export default class CreateRegister extends Component {
  constructor(props) {
    super(props);

    this.onFirstrname = this.onFirstrname.bind(this);
    this.onLastname = this.onLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onConfirmEmail = this.onConfirmEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onPassword = this.onPassword.bind(this);
    this.onConfirmPassword = this.onConfirmPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: ''
    }
  }

  onFirstrname(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  onLastname(e) {
    this.setState({
      last_name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      user_email: e.target.value
    })
  }


  onConfirmEmail(e) {
    this.setState({
      user_email: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      user_address: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      user_phone: e.target.value
    })
  }

    onPassword(e) {
    this.setState({
      user_password: e.target.value
    })
  }

    onConfirmPassword(e) {
    this.setState({
     user_password : e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const registerdet = {
      user_id: "ICR" + Math.floor(100000 + Math.random() * 900000),
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_email: this.state.user_email,
      user_phone: this.state.user_phone,
      user_address: this.state.user_address,
      user_password: this.state.user_password,
      date: this.state.date
    }

    //console.log(registerdet);

    axios.post('http://localhost:5000/registers/add', registerdet)
      .then(res => console.log(res.data));

  }

  render() {
    return (
      <div className='registerorganise'>
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.first_name}
                onChange={this.onFirstrname}
                />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.last_name}
                onChange={this.onLastname}
                />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input  type="email"
                required
                className="form-control"
                value={this.state.user_email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.user_phone}
                onChange={this.onChangePhone}
                />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.user_address}
                onChange={this.onChangeAddress}
                />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.user_password}
                onChange={this.onPassword}
                />
          </div>

        <div className="form-group">
          <input type="submit" value="Register account" className="btn btn-primary" />
        </div>
        </form>
      </div>
    )
  }
}
