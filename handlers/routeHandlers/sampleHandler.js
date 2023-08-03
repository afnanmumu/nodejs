/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: mumu
 * Date: 2/08/23
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;