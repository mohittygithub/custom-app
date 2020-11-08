import React, { Component } from 'react'
import axios from 'axios'

export class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: this.username,
      password: this.password,
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('http://localhost:8080/authenticate', data)
      .then((result) => {
        localStorage.setItem('token', result.data.jwt)
        this.props.history.push('/me')
      })
      .catch((err) => {
        console.log('incorrect username or password', err)
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className='form-group'>
          <label>Email/Username</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            onChange={(e) => (this.username = e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        <button className='btn btn-primary btn-block'>Submit</button>
        <p className='forgot-password text-right'>Forgot password?</p>
      </form>
    )
  }
}

export default Signup
