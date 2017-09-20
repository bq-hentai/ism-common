/*!
 * header component
 * bqliu | 09/20/2017
 */

import $ from 'jquery'
import _ from 'lodash'
import tpl from './tpl.html'
import { classCallCheck, setIfNull } from '@/utils'

var C = function (opts) {
  classCallCheck(this, C)

  if (!opts) {
    opts = { }
  }

  setIfNull(opts, 'events', { })
  setIfNull(opts, 'devents', { })
  setIfNull(opts, 'methods', { })

  this.events = validateEvents(opts.events)
  this.devents = validateEvents(opts.devents)
  this.methods = opts.methods

  this.opts = opts

  this.init()
}

// remove all invalid k-v pair
var validateEvents = function (events) {
  if (!events) {
    return { }
  }
  return _.transform(events, function (result, v, k) {
    if (k === '' || !_.isString(v)) {
      return
    }
    result[_.trim(k)] = [ _.trim(v) ]
  })
}

/**
 * { el | events | devents }
 */

C.prototype = {
  constructor: C,
  init: function () {
    var opts = this.opts
    this.$el = $(_.template(tpl)(opts.data))

    if (opts.$el) {
      this.mount($(this.opts.$el))
    }

    this.bindEvents()
    this.delegateEvents()
  },
  mount: function ($mount) {
    if (!$mount) {
      return
    }
    $mount.html(this.$el)
  },
  bindEvents: function () {
    // key [ eventname, selector ] => value
    // {
    //   'dblclick': 'mtd',
    //   'click .icon': 'mtd2',
    //   'click .par .x': 'mtd4'
    // }

    var instance = this
    var bindEventCore = function (k, eventHandlers) {
      var spaceIndex = _.indexOf(k, ' ')
      var eventName = ''
      var selector = ''
      if (spaceIndex === -1) {
        eventName = k
      }
      else {
        eventName = k.substr(0, spaceIndex)
        selector = k.substr(spaceIndex + 1)
      }
      eventHandlers.forEach(function (handler) {
        var $el = selector ? instance.$el.find(selector) : instance.$el
        $el.on(eventName, instance.methods[handler])
      })
    }

    _.map(
      _.keys(instance.events),
      function (k) {
        bindEventCore(k, instance.events[k])
      }
    )
  },
  delegateEvents: function () {

  }
}

export default new C({
  events: {
    'click': 'handleClick',
    'click div': 'handleDivClick'
  },
  methods: {
    handleClick: function (evt) {
      console.log('evt', evt)
      console.log('this', this)
    },
    handleDivClick: function (evt) {
      console.log('evt', evt)
      console.log('this', this)
      evt.stopPropagation()
    }
  }
})
