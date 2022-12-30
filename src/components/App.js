import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import MessageList from './MessageList';
import Login from './Login';
import SendMessages from './SendMessages';
import '../styles/App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/sendto/:user" component={SendMessages} />
          <Route path="/messages/:user" component={MessageList} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
