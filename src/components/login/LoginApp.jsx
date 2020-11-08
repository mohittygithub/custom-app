import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import '../../App.css'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'

export class LoginApp extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container'>
              <Link className='navbar-brand' to={'/sign-in'}>
                School
              </Link>
              <div
                className='collapse navbar-collapse'
                id='navbarTogglerDemo02'
              >
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link className='nav-link' to={'/sign-in'}>
                      Login
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={'/sign-up'}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/sign-in' component={Login} />
                <Route exact path='/sign-up' component={Signup} />
                <Route exact path='/me' component={Home} />
                <Redirect to='/' />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default LoginApp
