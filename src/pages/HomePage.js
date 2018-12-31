import React, { Component } from 'react';

class HomePage extends Component {
  
  render() {
    return (
      <div className="App">
        
        
            <h1>Welcome to home page</h1>
            <button onClick={() => console.log('you clicked button')} >click button</button>
        
      </div>
    );
  }
}

export default {
  component: HomePage
}
