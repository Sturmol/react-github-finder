import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {
      const name = "john doe";
      const loading = true;
      const showName = true;

      return (
          <div>
              <h1> Hello from react</h1>
              {loading ? <h4>loading...</h4> :  <p>{ name.toUpperCase()}</p>}
          </div>
      )
    }
}

export default App;
