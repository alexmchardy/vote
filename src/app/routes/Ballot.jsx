
import React, {Component} from 'react';
import Choices from '../components/Choices';
import RaisedButton from 'material-ui/RaisedButton';
import request from 'superagent';

// const exampleApiVoteData = {
//   "id": 1,
//   "name": "some name",
//   "description": "some description",
//   "start_time": null,
//   "end_time": null,
//   "options": [
//     {
//       "optionId": 1,
//       "optionName": "Lucille's",
//       "optionDescription": "Best Cajun food this side of the mississipi"
//     },
//     {
//       "optionId": 2,
//       "optionName": "Jerusalem",
//       "optionDescription": "Holla"
//     },
//     {
//       "optionId": 3,
//       "optionName": "Ted Cheesesteaks",
//       "optionDescription": "Heart stopping"
//     }
//   ]
// };

class Ballot extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    vote: {
      options: []
    },
    selections: [ null, null, null ]
  }

  componentDidMount() {
    request.get('/api/vote/' + this.props.params.electionId)
      .end((err, res) => {
        this.setState({ vote: (res ? res.body : {}) })
      })
  }

  handleChoicesChange = (selections) => {
    this.setState({ selections });
  }

  handleVoteClick = () => {
    const details = {
      electionId: this.state.vote.id,
      userId: 1,
      options: this.state.selections.map((selection, index) => ({ id: selection, rank: index }))
    };
    request.post('/api/vote')
      .send(details)
      .end((err, res) => {
        if (err) {
          console.error('POST ERROR: ', err);
        }
      })
  }

  render() {
    return (
      <div>
        <h2>Ballot Page</h2>
        <Choices options={this.state.vote.options} onChange={this.handleChoicesChange}/>
        <RaisedButton
          label="Vote"
          onClick={this.handleVoteClick}
        />
      </div>
    );
  }
}

export default Ballot;
