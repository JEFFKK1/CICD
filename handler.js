'use strict';
const moment = require('moment')
module.exports.logger = async (event) => {
  console.log('in handler')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless ci/cd demo',
        version: "v1.0",
        timestamp: moment().unix(),
      },
      null,
      2
    ),
  };
};
