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
				<h1> Hello ! </h1>
				<fieldset className='form-group'>
				<label> Name : </label>
				<input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Email : </label>
				<input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Username : </label>
				<input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Password : </label>
				<input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
				</fieldset>
			</form>
		)
	}
}

export default UserRegistration;