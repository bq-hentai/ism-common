/*!
 * header component
 * bqliu | 09/20/2017
 * TODO dynamic add event listeners
 */

import { createInstance } from '@/utils/component'
import tpl from './tpl.html'

var c = createInstance({
  tpl: tpl,
  events: {
    'click': 'handleClick',
    'click div': 'handleDivClick'
  },
  devents: {
    'click .user-opertion-list-item': 'handleLiClick'
  },
  methods: {
    handleClick: function (evt) {
      console.log('self clicked')
    },
    handleDivClick: function (evt) {
      console.log('div clicked')
      evt.stopPropagation()
    },
    handleLiClick: function (evt) {
      console.log('li clicked')
      evt.stopPropagation()
    }
  }
})

setTimeout(function () {
  c.destroy()
}, 2000)

export default c
