import React from 'react';
import {render} from 'react-dom';
import UserRegistration from './UserRegistration.jsx';

class App extends React.Component {
  render () {
    return (
    	
    	<UserRegistration />
    );
  }
}

render(<App/>, document.getElementById('app'));