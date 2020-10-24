import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  About: {
    path: '/about',
    exact: true,
    component: lazy(() => import('../pages/About'))
  },
  Contact: {
    path: '/contact',
    exact: true,
    component: lazy(() => import('../pages/Contact'))
  },
  Post: {
    path: '/post',
    component: lazy(() => import('../pages/Post'))
  },
  Read: {
    path: '/read',
    component: lazy(() => import('../pages/Read'))
  },
  LoginRegister: {
    path: '/login',
    component: lazy(() => import('../pages/LoginRegister'))
  },
  Help: {
    path: '/help',
    component: lazy(() => import('../pages/Help'))
  }
}
