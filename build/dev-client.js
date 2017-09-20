/* eslint-disable */

// https://github.com/amvtek/EventSource
// Provide polyfill to support EventSource in browser where it is not available.
require('eventsource-polyfill')
// noInfo: Set to true to disable informational console logging.
// reload: Set to true to auto-reload the page when webpack gets stuck.
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
