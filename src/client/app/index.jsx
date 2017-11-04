import React from 'react';
import {render} from 'react-dom';
import LoginForm from './LoginForm.jsx';
import Logout from './Logout.jsx';
import UserList from './UserList.jsx';
import UserRegistration from './UserRegistration.jsx';
import Header from './Header.jsx';
import LogoutHeader from './LogoutHeader.jsx';
import { HashRouter,Switch,Route,Link } from 'react-router-dom'
import Auth from './Auth'

const Main = () => (
  <main>
    <Switch>
      <Route path='/register' component={UserRegistration}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/login' component={LoginForm}/>
      <Route path='/userlist' component={UserList}/>
    </Switch>
  </main>
);

class App extends React.Component {
  
  render () {
	   return(
        	<HashRouter>
        		<div>
        			<Main/>
        		</div>
        	</HashRouter>
      );
  }
}

render( <App/>, document.getElementById('app'));