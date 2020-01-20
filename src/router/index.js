import Vue from 'vue'
import Router from 'vue-router'
import button from '../../example/routers/button.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //不存在的路径都会redirect'/'
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'button',
      component: button
      // redirect: '/button'
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
      import('../../example/routers/search.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () =>
      import('../../example/routers/tab.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () =>
      import('../../example/routers/layout.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () =>
      import('../../example/routers/radio.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () =>
      import('../../example/routers/checkbox.vue')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () =>
      import('../../example/routers/icon.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () =>
      import('../../example/routers/navbar.vue')
    },
    {
      path: '/according',
      name: 'according',
      component: () =>
      import('../../example/routers/according.vue')
    },
    {
      path: '/cell',
      name: 'cell',
      component: () =>
      import('../../example/routers/cell.vue')
    }
  ]
})
