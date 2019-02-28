import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>CS51 Code Review</h1>
        <h2>with Brian Yu</h2>
        <hr/>
        <a className="button-link" href="http://courseboards.com/brian">
          <div className="button">Live Feedback</div>
        </a>
        <a className="button-link" href="https://goo.gl/forms/9n6HXLbNpgFhVsBh1">
          <div className="button">Topic Requests</div>
        </a>
        <a className="button-link" href="https://goo.gl/forms/zBzaVIL7VOLe5B1B2">
          <div className="button">Code Review 4 Feedback</div>
        </a>
      </div>
    );
  }
}

export default App;
