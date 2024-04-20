import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import TemplateTutor from './Template'

function Bootstrap5 () {
  const navigate = useNavigate()
  return (
    <TemplateTutor
      noTheme
      main={(<>
        <iframe src="/Creating%20an%20event_base.html" className="inlinePage" style={{ width: '100%', height: '85vh' }} />
      </>)}
    />
  )
}

export default Bootstrap5
