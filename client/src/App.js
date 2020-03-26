import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./action/listaction";
import home from "./components/login/home";
import list from "./components/list";
import Profile from "./components/profile";
import add from "./components/add";
import edit from "./components/edit";
import PrivateRoute from "./components/private-route/PrivateRoute";
import store from './store'

if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
  // Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());
	  // Redirect to login
	  window.location.href = "./";
	}
  }
class App extends Component {

	render() {
		return (
				<div className="app-content content">
					<div className="content-wrapper" >

					<Route exact path={'/'} component={home} /> 

						<Switch>
							{/* <Route exact path={'/list'} component={list} /> 
							<Route exact path={'/add'} component={add} />
							<Route exact path={'/edit'} component={edit} />*/}
				        	<PrivateRoute exact path="/profile" component={Profile} />
							<PrivateRoute exact path="/list" component={list} />
							<PrivateRoute exact path="/add" component={add} />
							<PrivateRoute exact path="/edit" component={edit} />


						</Switch>

						
					</div>
				</div>

		);
	}
}

export default withRouter(App);