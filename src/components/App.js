import React, { Component } from 'react';
import Letter from './Letter'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedStatus: true,
      studentName: "Addressee"
    };
    this.handleAcceptClick = this.handleAcceptClick.bind(this)
    this.handleRejectClick = this.handleRejectClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
  };

  handleAcceptClick(){
    if (this.state.acceptedStatus == false) {
      this.setState({ acceptedStatus: true })
    }
  };

  handleRejectClick(){
    if (this.state.acceptedStatus == true) {
      this.setState({ acceptedStatus: false })
    }
  };

  handleInput(event) {
    let name = event.target.value;
    this.setState({ studentName: name });
  }

  render(){
    return(
      <div>
        <label for="studentName"> Addressee </label>
        <input
          type="text"
          value={this.state.studentName}
          onChange={this.handleInput} />
        <button onClick={this.handleAcceptClick}>Accepted</button>
        <button onClick={this.handleRejectClick}>Rejected</button>
        <Letter accepted={this.state.acceptedStatus} name={this.state.studentName}/>
      </div>
    )
  }
}

export default App;
