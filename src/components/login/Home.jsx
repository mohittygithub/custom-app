import React, { Component } from 'react'
import axios from 'axios'

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }
    axios.get('http://localhost:8080/me', config).then((response) => {
      this.setState({ user: response.data })
    })
  }
  render() {
    if (this.state.user) {
      return (
        <h3>
          Hello {this.state.user.FirstName} {this.state.user.LastName}
        </h3>
      )
    } else {
      return (
        <div>
          <h3>
            Incorrect Username or Password. <a href='/'>Login again</a>
          </h3>
        </div>
      )
    }
  }
}

export default Home
