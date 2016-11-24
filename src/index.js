const request = require('superagent');
const fs = require('fs');

class Spectre {
  constructor(url) {
    this.url = url;
  }

  startRun(project, suite) {
    var res = request
      .post(this.url + '/runs')
      .send({ project, suite });

    return res;
  }

  uploadScreenshot(run_id, name, browser, width, screenshot) {
    var res = request
      .post(this.url + '/tests')
      .field('test[run_id]', run_id)
      .field('test[name]', name)
      .field('test[browser]', browser)
      .field('test[size]', width)
      .field('test[highlight_colour]', "ff0000")
      .attach('test[screenshot]', screenshot);

    return res;
  }
}

module.exports = Spectre;