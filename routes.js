/*
 * Title: Routes
 * Description: Application Routes
 * Author: mumu
 * Date: 2/08/23
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;