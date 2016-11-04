import React, {Component} from 'react';
import Choice from './Choice';

class Choices extends Component {
  choices = [
    { id: 0, name: "Maggiannos" },
    { id: 1, name: "Pig Wings" },
    { id: 2, name: "Thai Monkey" }
  ];

  state = {
    selections: {
      1: null,
      2: null,
      3: null
    }
  }

  constructor(props) {
    super(props);
  }

  handleChange = (event, index, value, rank) => {
    let selections = {...this.state.selections};
    Object.keys(selections).forEach((key) => {
      if (key === rank.toString()) {
        selections[key] = value;
      } else if (selections[key] === value) {
        selections[key] = null;
      }
    })
    this.setState({ selections });
  }

  getChangeHandler = (rank) => (event, index, value) => this.handleChange(event, index, value, rank);

  render() {
    return (
      <div>
        <Choice label="1st Choice" rank={1} options={this.choices} value={this.state.selections[1]} onChange={this.getChangeHandler(1)} />
        <Choice label="2nd Choice" rank={2} options={this.choices} value={this.state.selections[2]} onChange={this.getChangeHandler(2)} />
        <Choice label="3rd Choice" rank={3} options={this.choices} value={this.state.selections[3]} onChange={this.getChangeHandler(3)} />
      </div>
    );
  }
}

export default Choices;
