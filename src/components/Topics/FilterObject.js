import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],

      userInput: "",
      filteredEmployees: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  filteredEmployees(prop) {
    // let tempFiltered = this.state.employees.filter(
    //   x => x === prop
    // );
    // this.setState({ filteredEmployees: tempFiltered });
    let tempEmp = this.state.employees
    let tempArr = []
    for (let i = 0; i < tempEmp.length; i++) {
        tempEmp[i].hasOwnProperty(prop) && tempArr.push(tempEmp[i])
    }
    this.setState({filteredEmployees: tempArr})
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredEmployees(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}
        </span>
      </div>
    );
  }
}
