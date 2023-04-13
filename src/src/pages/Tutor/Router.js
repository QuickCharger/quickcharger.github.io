// import Home from './home'

import { lazy } from 'react'
import Loadable from '@/components/Loadable'

const Html = Loadable(lazy(() => import('@/pages/Tutor/Html')))
const Css = Loadable(lazy(() => import('@/pages/Tutor/Css')))
const Effect = Loadable(lazy(() => import('@/pages/Tutor/Effect')))


const Router = [{
  path: '/tutor',
  children: [
    { path: 'html', element: <Html /> },
    { path: 'css', element: <Css /> },
    { path: 'effect', element: <Effect /> },
  ]
}]

export default Router
