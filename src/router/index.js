import director from '../vendors/director'

var routes = {
  '/data-platform': require('@/controllers/data-platform'),
  '/knowledge-management': require('@/controllers/knowledge-management')
}

var router = new director.Router(routes)

router.configure({
  on: function () {
    console.log('on route')
  }
})

export default router
