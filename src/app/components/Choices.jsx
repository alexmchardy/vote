import React, {Component} from 'react';
import Choice from './Choice';

class Choices extends Component {
  state = {
    selections: [ null, null, null ]
  }

  constructor(props) {
    super(props);
  }

  handleChange = (event, index, value, rank) => {
    let selections = this.state.selections.map((selection, index) => {
      if (index == rank) {
        return value;
      }
      // If value has already been selected elsewhere, null it out
      if (selection === value) {
        return null;
      }
      return selection;
    });
    this.setState({ selections });
    this.props.onChange(selections);
  }

  getChangeHandler = (rank) => (event, index, value) => this.handleChange(event, index, value, rank);

  render() {
    return (
      <div>
        <Choice label="1st Choice" rank={0} options={this.props.options} value={this.state.selections[0]} onChange={this.getChangeHandler(0)} />
        <Choice label="2nd Choice" rank={1} options={this.props.options} value={this.state.selections[1]} onChange={this.getChangeHandler(1)} />
        <Choice label="3rd Choice" rank={2} options={this.props.options} value={this.state.selections[2]} onChange={this.getChangeHandler(2)} />
      </div>
    );
  }
}

export default Choices;
