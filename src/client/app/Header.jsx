import React from 'react';
import { HashRouter,Switch,Route,Link } from 'react-router-dom'
import Auth from './Auth';

class Header extends React.Component{

    constructor(props) {
    	super(props);
    	this.state = {
    		auth : null
    	}
    	
    	this.state.auth = new Auth;
    }

    render (){
		return (
			<div className="navContainer">
			<ul className="navBarLeft">
				<li>React Test</li>
			</ul>
			
				{
					this.state.auth.isUserAuthenticated() ?
						( 
							<ul className="navBarRight">
								<li><Link to="/login" className="navBtn">Logout</Link></li>
							</ul>
						)
						: 
						(
							<ul className="navBarRight">
								<li><Link to ="/login" className="navBtn">Login</Link></li>
								<li><Link to ="/register" className="navBtn">Register</Link></li>
							</ul>
						)
				}
			</div>
		)

    }
}
export default Header;