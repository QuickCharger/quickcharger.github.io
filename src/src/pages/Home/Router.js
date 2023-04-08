// import Home from './home'

import { lazy } from 'react'
import Loadable from '@/components/Loadable'

const Home = Loadable(lazy(() => import('@/pages/Home/Home')))

const Router = [{
  path: '/',
  element: <Home />
}]

export default Router
