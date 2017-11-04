import React from 'react';
import { HashRouter,Switch,Route,Link } from 'react-router-dom'

class Header extends React.Component{

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
				<li><Link to ="/logout" className="navBtn">Logout</Link></li>
			</ul>
			</div>
			
		)

    }
}
export default Header;