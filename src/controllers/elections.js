import { getElection } from '../models/elections';

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
  }
};
