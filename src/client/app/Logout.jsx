import React from 'react';
import Auth from './Auth';
import LogoutHeader from './LogoutHeader.jsx';

class Logout extends React.Component {

	constructor(props) {
    	super(props);
    	
    	var auth = new Auth();
		auth.deauthenticateUser();
		console.log(auth.isUserAuthenticated());
  	}
  	

	
	render () {
		return (
		<div>
			<LogoutHeader />
			<div>
			<form>
				<h1>You have been logged out!</h1><br/>
				<h1>See you again!</h1>
			</form>
			</div>
		</div>
		)
	}
}

export default Logout;