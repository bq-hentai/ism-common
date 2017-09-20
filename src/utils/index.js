/*!
 * some utils
 * bqliu | 09/20/2017
 */

import _ from 'lodash'

export const classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Can\'t call a class as a function')
  }
}

export const setIfNull = function (o, k, defaults) {
  if (_.isUndefined(o[k]) || _.isNull(o[k])) {
    o[k] = defaults
  }
}
