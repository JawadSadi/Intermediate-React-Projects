import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input type="text" placeholder="Search For Location..." />
        </div>
        <button>Get weather</button>
      </div>
    );
  }
}

export default App;
