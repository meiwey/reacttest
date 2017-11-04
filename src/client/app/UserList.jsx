import React from 'react';
import Dummy from './Dummy';
import {Table, Column, Cell} from 'fixed-data-table';

class UserList extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    	 users : []
    	}

		this.users = new Dummy().users;
  	}
	
	render () {
		return (
			<div>
			<h1> List of users </h1>
			{this.users}
			</div>
		)
	}
}

export default UserList;