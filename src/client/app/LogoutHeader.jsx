import React from 'react';
import { HashRouter,Switch,Route,Link } from 'react-router-dom'

class LogoutHeader extends React.Component{

    constructor(props) {
    	super(props);
    	this.state = {
    	}
    }
    render (){
		return (
			<div className="navContainer">
			<ul className="navBarLeft">
				<li>React Test</li>
				<li>{this.state.rValue}</li>
			</ul>
			<ul className="navBarRight">
				<li><Link to ="/login" className="navBtn">Login</Link></li>
				<li><Link to ="/register" className="navBtn">Register</Link></li>
			</ul>
			</div>
			
		)

    }
}
export default LogoutHeader;