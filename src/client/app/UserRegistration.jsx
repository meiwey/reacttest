import React from 'react';

class UserRegistration extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		name : '',
    		email : '',
    		username : '',
    		password : ''
    	};
    	this.handleInputChange = this.handleInputChange.bind(this);
  	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[name] : value
		});
	}
	
	render () {
		return (
			<form>
				<label> Name : 
				<input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
				</label>
				
				<label> Email : 
				<input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
				</label>
				
				<label> Username : 
				<input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
				</label>
				
				<label> Password : 
				<input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
				</label>
			</form>
		)
	}
}

export default UserRegistration;