import director from 'director'

import indexCtrl from '../controllers/index'

var routes = {
  '/index': indexCtrl,
  '/about': function () {
    console.log('about route')
  }
}

console.log('d', director)
var router = new director.Router(routes)

router.configure({
  on: function () {
    console.log('on route')
  }
})

export default router
