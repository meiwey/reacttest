import React from 'react';

class LoginForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		username : '',
    		password : '',

    		usernameValid:false,
    		passwordValid:false,
    		
    		passwordEdit:false,
    		usernameEdit:false,
    		
    	};
    	
    	this.handleInputChange = this.handleInputChange.bind(this);
  	}
  	
	validateField(fieldName, value) {
	
  		let usernameValid = this.state.usernameValid;
  		let passwordValid = this.state.passwordValid;

  		let usernameEdit = this.state.usernameEdit;
  		let passwordEdit = this.state.passwordValid;

  		switch(fieldName) {
      		case 'username':
      			usernameValid = value.length >= 5;
      			usernameEdit = true;
      			break;
    		case 'password':
      			passwordValid = value.length >= 6;
      			passwordEdit = true;
      			break;
    		default:
      			break;
  		}
  		this.setState({
                  usernameValid: usernameValid,
                  passwordValid: passwordValid,

                  usernameEdit: usernameEdit,
                  passwordEdit: passwordEdit,
                }, this.validateForm);
	}

	validateForm() {
  		this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
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
	

	
	render () {
		return (
			<div>
			<form>
				<h1> Login </h1>
				
				<fieldset className='form-group'>
				<label> Username : </label>
				<input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}  />
				<label className='errorMsg' style={{visibility: (!this.state.usernameValid && this.state.usernameEdit) ? 'visible' : 'hidden' }}>Username need to have more than 5 characters!</label>
				</fieldset>
				
				<fieldset className='form-group'>
				<label> Password : </label>
				<input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
				<label className='errorMsg' style={{visibility: (!this.state.passwordValid && this.state.passwordEdit) ? 'visible' : 'hidden' }}>Password needs to be longer than 6 characters!</label>			
				</fieldset>
				
				<fieldset className='form-group'>
				<input name="submitBtn" type="submit" disabled={!this.state.formValid} className ="btn" placeholder="Login"/>
				</fieldset>
			</form>
			</div>
		)
	}
}

export default LoginForm;