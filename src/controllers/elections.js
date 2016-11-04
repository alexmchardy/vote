import { getElection, submitVote } from '../models/elections';

export default {

  /**
   * @param {object} req - http request
   * @param {object} res - http response
   * @returns {void}
   */
  vote: function indexHandler(req, res) {
    let result = {};
    result = getElection(req.id, function(result, err) {
      console.log("req.id:", req.id);
      console.log("result:", result);
      res.json(result);
    });
  },

  /**
   * @param {object} req - http request
   * @param {object} res - http response
   * @returns {void}
   */
  submitVote: function submitVoteHandler(req, res) {
    let result = {};
    result = submitVote(req.body);
  }
};
