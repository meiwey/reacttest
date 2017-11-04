import React from 'react';
import Dummy from './Dummy';
import Header from './Header.jsx';

class UserList extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    	 users : [],
    	 rows : [],
    	 passwords :[]
    	};
		var dummyS;
		dummyS = new Dummy()
		dummyS.retrieveUsers()
		this.state.users = dummyS.users
		this.state.rows =[]
		this.state.passwords =[]
		this.processRows()
		
		this.showMeClicked = this.showMeClicked.bind(this);
  	}
  	
  	showMeClicked (event)
	{
		this.state.passwords[event.target.name] = (this.state.users[event.target.name]).password;
		event.target.value = this.state.passwords[event.target.name];
	}
  	
  	processRows()
  	{
  		var tempName = '';
  		
  		this.state.rows.push (<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Username</th>
					<th>Password</th>
				</tr>)
  		for (var i = 0; i < this.state.users.length; i++)
		{
			this.state.passwords.push ('xxxxxxx');
			this.state.rows.push (<tr>
					<td>{this.state.users[i].name}</td>
					<td>{this.state.users[i].email}</td>
					<td>{this.state.users[i].username}</td>
					<td>
						<input name={i} onDoubleClick={this.showMeClicked.bind(this)} value={this.state.passwords[i]} readOnly={true} />
					</td>
				</tr>)
		}
  	}
	
	render () {
		return (
		<div>
		<Header/>
			<div>
			<br/>
			<h1> List of users </h1>
			<table className="userTable">
			{this.state.rows}
			</table>
			</div>
		</div>
		)
	}
}

export default UserList;