import React from 'react';
import {render} from 'react-dom';
import LoginForm from './LoginForm.jsx';
import UserList from './UserList.jsx';
import UserRegistration from './UserRegistration.jsx';
import Header from './Header.jsx';
import { HashRouter,Switch,Route,Link } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route path='/register' component={UserRegistration}/>
      <Route path='/login' component={LoginForm}/>
      <Route path='/userlist' component={UserList}/>
    </Switch>
  </main>
)

class App extends React.Component {
  render () {
	   return(
        	<HashRouter>
        		<div>
        			<Header/>
        			<Main/>
        		</div>
        	</HashRouter>
      );
  }
}

render( <App/>, document.getElementById('app'));