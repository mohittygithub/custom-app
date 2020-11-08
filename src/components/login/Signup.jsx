import React, { Component } from 'react'

export class Logout extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className='form-group'>
          <label>First name</label>
          <input
            type='text'
            className='form-control'
            placeholder='enter your first name...'
          />
        </div>

        <div className='form-group'>
          <label>Last name</label>
          <input
            type='text'
            className='form-control'
            placeholder='enter your last name...'
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='text'
            className='form-control'
            placeholder='enter your email...'
          />
          <p className='text-left forgot-password'>
            you email will be used as your username to login
          </p>
        </div>

        <button type='submit' className='btn btn-primary btn-block'>
          Sign Up
        </button>
        <p className='forgot-password text-right'>
          Already registered sign in?
        </p>
      </form>
    )
  }
}

export default Logout
