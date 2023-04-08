import { getToken } from '../utils'   // todo 删index
import { Navigate } from 'react-router-dom'

function AuthComponent (a) {
  console.log(window.location.pathname)
  let token = getToken()
  if (token)
    return (<> {a.children} </>)
  else {
    return (<> <Navigate to={a.failJumpTo || '/'} replace></Navigate> </>)
  }
}

export { AuthComponent }
