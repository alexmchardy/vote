
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Election extends Component {

  render() {
    return (
      <div>
        <h2>Election Page</h2>
        <RaisedButton
          label="Something"
          secondary={true}
        />
      </div>
    );
  }
}

export default Election;
