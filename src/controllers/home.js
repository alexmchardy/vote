// an example controller

export default {

  /**
   * @param {object} req - http request
   * @param {object} res - http response
   * @returns {void}
   */
  index: function indexHandler(req, res) {
    res.send('Hello!');
  }
};
