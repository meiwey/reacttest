import React from 'react';

class UserRegistration extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		name : '',
    		email : '',
    		username : '',
    		password : '',
    		password2 : '',
    		
    		passwordMatch:false,
    		emailValid:false,
    		formValid:false,
    		nameValid:false,
    		usernameValid:false,
    		passwordValid:false,
    		
    		passwordEdit:false,
    		emailEdit:false,
    		nameEdit:false,
    		usernameEdit:false,
    		password2Edit:false
    		
    	};
    	
    	this.handleInputChange = this.handleInputChange.bind(this);
  	}
  	
	validateField(fieldName, value) {
	
  		let nameValid = this.state.nameValid;
  		let emailValid = this.state.emailValid;
  		let usernameValid = this.state.usernameValid;
  		let passwordValid = this.state.passwordValid;
  		let passwordMatch = this.state.passwordMatch;
  		
  		let nameEdit = this.state.nameEdit;
  		let emailEdit = this.state.emailEdit;
  		let usernameEdit = this.state.usernameEdit;
  		let passwordEdit = this.state.passwordValid;
  		let password2Edit = this.state.password2Edit;

  		switch(fieldName) {
    		case 'name':
      			nameValid = value.length >= 3;
      			nameEdit = true;
      			break;
    		case 'email':
      			emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      			emailEdit = true;
      			break;
      		case 'username':
      			usernameValid = value.length >= 5;
      			usernameEdit = true;
      			break;
    		case 'password':
      			passwordValid = value.length >= 6;
      			passwordEdit = true;
      			break;
      		case 'password2':
      			passwordMatch = this.state.password==value;
      			password2Edit = true;
      			break;
    		default:
      			break;
  		}
  		this.setState({
                  nameValid:nameValid,
                  emailValid: emailValid,
                  usernameValid: usernameValid,
                  passwordValid: passwordValid,
                  passwordMatch: passwordMatch,
                  
                  nameEdit:nameEdit,
                  emailEdit: emailEdit,
                  usernameEdit: usernameEdit,
                  passwordEdit: passwordEdit,
                  password2Edit: password2Edit
                }, this.validateForm);
	}

	validateForm() {
  		this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.usernameValid && this.state.passwordMatch && this.state.passwordValid});
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState(
			{[name] : value},
			()=> {this.validateField(name,value)
		});
		
		
	}
	
	onSubmitReg(event)
	{
		event.preventDefault();

   	 	// create a string for an HTTP body message
    	const name = encodeURIComponent(this.state.user.name);
    	const email = encodeURIComponent(this.state.user.email);
    	const username = encodeURIComponent(this.state.user.username);
    	const password = encodeURIComponent(this.state.user.password);
    	const formData = `name=${name}&email=${email}&username=${username}&password=${password}`;

    	// create an AJAX request
    	const xhr = new XMLHttpRequest();
    	xhr.open('post', '/auth/signup');
    	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    	xhr.responseType = 'json';
    	xhr.addEventListener('load', () => {
      
      	if (xhr.status === 200) {
        	//success
        	this.setState({ errors: {}});

        	console.log('The form is valid');
      	} 
      	else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        	errors.summary = xhr.response.message;

        		this.setState({
          			errors
        		});
      		}
    	});
    	xhr.send(formData);
	}
	
	
	render () {
		return (
			<div>
			<form onSubmit={this.onSubmitReg}>
				<h1> Hello ! </h1>
				<fieldset className='form-group'>
				<label> Name : </label>
				<input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}/>
				<label className='errorMsg' style={{visibility: (!this.state.nameValid && this.state.nameEdit) ? 'visible' : 'hidden' }}>Name is Required!</label>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Email : </label>
				<input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
				<label className='errorMsg' style={{visibility:(!this.state.emailValid && this.state.emailEdit) ? 'visible' : 'hidden' }}>Invalid Email!</label>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Username : </label>
				<input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}  />
				<label className='errorMsg' style={{visibility: (!this.state.usernameValid && this.state.usernameEdit) ? 'visible' : 'hidden' }}>Username need to have more than 5 characters!</label>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Password : </label>
				<input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
				<label className='errorMsg' style={{visibility: (!this.state.passwordValid && this.state.passwordEdit) ? 'visible' : 'hidden' }}>Password needs to be longer than 6 characters!</label>
				
				</fieldset><fieldset className='form-group'>
				<label> Confirm Password : </label>
				<input name="password2" type="password" value={this.state.password2} onChange={this.handleInputChange} />
				<label className='errorMsg' style={{visibility: (!this.state.passwordMatch && this.state.password2Edit) ? 'visible' : 'hidden' }}>Password doesn't match!</label>
				</fieldset>
				
				<fieldset className='form-group'>
				<input name="submitBtn" type="submit" disabled={!this.state.formValid} className ="btn" placeholder="Register"/>
				</fieldset>
			</form>
			</div>
		)
	}
}

export default UserRegistration;