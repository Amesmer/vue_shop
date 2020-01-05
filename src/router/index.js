import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Login.vue')
// import Login from '../components/Login.vue'
// import home from '../components/Home.vue'
const home = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Home.vue')
// import welcome from '../components/Welcome.vue'
const welcome = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Welcome.vue')

// import users from '../components/user/Users.vue'
const users = () => import(/* webpackChunkName:"users_rights_roles" */ '../components/user/Users.vue')
// import rights from '../components/power/Rights.vue'
const rights = () => import(/* webpackChunkName:"users_rights_roles" */ '../components/power/Rights.vue')
// import roles from '../components/power/Roles.vue'
const roles = () => import(/* webpackChunkName:"users_rights_roles" */ '../components/power/Roles.vue')

// import cate from '../components/goods/Cate.vue'
const cate = () => import(/* webpackChunkName:"cate_params" */ '../components/goods/Cate.vue')
// import params from '../components/goods/Params.vue'
const params = () => import(/* webpackChunkName:"cate_params" */ '../components/goods/Params.vue')

// import list from '../components/goods/List.vue'
const list = () => import(/* webpackChunkName:"list_add" */ '../components/goods/List.vue')
// import add from '../components/goods/Add.vue'
const add = () => import(/* webpackChunkName:"list_add" */ '../components/goods/Add.vue')

// import report from '../components/report/Report.vue'
const report = () => import(/* webpackChunkName:"report_orders" */ '../components/report/Report.vue')
// import orders from '../components/order/Order.vue'
const orders = () => import(/* webpackChunkName:"report_orders" */ '../components/order/Order.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: welcome },
        { path: '/users', component: users },
        { path: '/orders', component: orders },
        { path: '/rights', component: rights },
        { path: '/roles', component: roles },
        { path: '/categories', component: cate },
        { path: '/params', component: params },
        { path: '/goods', component: list },
        { path: '/goods/add', component: add },
        { path: '/reports', component: report }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径--from代表从哪个路径跳转而来--next是一个函数表示放行
  //  next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
