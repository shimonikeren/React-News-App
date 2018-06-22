import React, { Component } from "react";


class Form extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  handleSearchKeyPress = event => {
    this.setState({
      searchTerm: event.target.value
    })
  };

  handleStartYrKeyPress = event => {
    this.setState({
      startYear: event.target.value
    })
  }

  handleEndYrKeyPress = event => {
    this.setState({
      endYear: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`search: ${this.state.searchTerm}. start: ${this.state.startYear}. end: ${this.state.endYear}`);
  }

  render() {
    return (
      <div>
      <form>
        <input
          type="text"
          placeholder="Search Term"
          onKeyPress={(event)=>this.handleSearchKeyPress(event)}
        />
        <input
          type="text"
          placeholder="Start Year (Optional)"
          onKeyPress={(event)=>this.handleStartYrKeyPress(event)}
        />
                <input
          type="text"
          placeholder="End Year"
          onKeyPress={(event)=>this.handleEndYrKeyPress(event)}
        />
        <button onClick={(event)=>this.handleSubmit(event)}>Submit</button>
      </form>
      {/* <Results /> */}
      </div>
    );
  }
}

export default Form;
