import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


// 路由引入
const components = {
  // XXX:() => import('@/views/xxx'),
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'XXX',
      // component:components.XXX
    }
  ]
})
