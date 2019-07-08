import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  filteredNames(prop) {
    let tempNames = this.state.names
    let tempArr = []
    for (let i = 0; i < tempNames.length; i++) {
        tempNames[i].startsWith(prop) && tempArr.push(tempNames[i])     
    }
    this.setState({filteredNames: tempArr})
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.names, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredNames(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
