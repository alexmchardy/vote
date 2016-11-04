
import React, {Component} from 'react';
import Choices from '../components/Choices';
import RaisedButton from 'material-ui/RaisedButton';

class Ballot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Ballot Page</h2>
        <Choices />
        <RaisedButton
          label="Vote"
        />
      </div>
    );
  }
}

export default Ballot;
