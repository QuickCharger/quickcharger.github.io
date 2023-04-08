import { lazy, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { configure } from 'mobx'

// const Home = lazy(() => import('@/pages/Home/home'))
// import Home from '@/pages/Home/home'
// const {Css, Html} = import ('@/pages/Tutor')
// const Css = lazy(() => import('@/pages/Tutor/css'))
// const Html = lazy(() => import('@/pages/Tutor/html'))

import HomeRouter from '@/pages/Home/Router'
import Tutor from '@/pages/Tutor/Router'

configure({
  enforceActions: 'never'
})

function Routes () {
  return useRoutes([...HomeRouter, ...Tutor])
}

export default function App () {
  return (
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter >
  )
}
