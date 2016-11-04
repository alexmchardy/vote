
import React, {Component} from 'react';
import Choices from '../components/Choices';
import RaisedButton from 'material-ui/RaisedButton';

class Vote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Vote Page</h2>
        <Choices />
        <RaisedButton
          label="Vote"
        />
      </div>
    );
  }
}

export default Vote;
