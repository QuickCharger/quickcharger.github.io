// import Home from './home'

import { lazy } from 'react'
import Loadable from '@/components/Loadable'

const Html = Loadable(lazy(() => import('@/pages/Tutor/Html')))
const Css = Loadable(lazy(() => import('@/pages/Tutor/Css')))
const Effect = Loadable(lazy(() => import('@/pages/Tutor/Effect')))
const BootStrap5 = Loadable(lazy(() => import('@/pages/Tutor/Bootstrap5')))
const Libevent = Loadable(lazy(() => import('@/pages/Tutor/Libevent')))


const Router = [{
  path: '/tutor',
  children: [
    { path: 'html', element: <Html /> },
    { path: 'css', element: <Css /> },
    { path: 'effect', element: <Effect /> },
    { path: 'bootStrap5', element: <BootStrap5 /> },
    { path: 'libevent/*', element: <Libevent /> },
  ]
}]

export default Router
