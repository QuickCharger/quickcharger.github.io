import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Link
} from '@mui/material'

import { S } from '@/components/Layout'
import TemplateTutor from './Template'
import { Anchor } from '@mui/icons-material'

function Libevent () {
  const navigate = useNavigate()
  const location = useLocation()

  let category = [
    { content: 'Catalog', jumpTo: '/tutor/libevent/Libevent_Catelog_Fast_portable_non-blocking_network_programming_with_Libevent' },
    { content: 'C0', jumpTo: '/tutor/libevent/Libevent_C0_About_this_document' },
    { content: 'C1', jumpTo: '/tutor/libevent/Libevent_C1_A_tiny_introduction_to_synchronous_non-blocking_IO' },
    { content: 'R0', jumpTo: '/tutor/libevent/Libevent_R0_The_Libevent_Reference_Manual_Preliminaries' },
    { content: 'R1', jumpTo: '/tutor/libevent/Libevent_R1_Setting_up_the_Libevent_library' },
    { content: 'R2', jumpTo: '/tutor/libevent/Libevent_R2_Creating_an_event_base' },
    { content: 'R3', jumpTo: '/tutor/libevent/Libevent_R3_Working_with_an_event_loop' },
    { content: 'R4', jumpTo: '/tutor/libevent/Libevent_R4_Working_with_events' },
    { content: 'R5', jumpTo: '/tutor/libevent/Libevent_R5_Helper_functions_and_types_for_Libevent' },
    { content: 'R6', jumpTo: '/tutor/libevent/Libevent_R6_Bufferevents_concepts_and_basics' },
    { content: 'R6a', jumpTo: '/tutor/libevent/Libevent_R6a_Bufferevents_advanced_topics' },
    { content: 'R7', jumpTo: '/tutor/libevent/Libevent_R7_Evbuffers_utility_functionality_for_buffered_IO' },
    { content: 'R8', jumpTo: '/tutor/libevent/Libevent_R8_Connection_listeners_accepting_TCP_connections' },
    { content: 'R9', jumpTo: '/tutor/libevent/Libevent_R9_Using_DNS_with_Libevent_high_and_low-level_functionality' },
    { content: 'R10', jumpTo: '/tutor/libevent/Libevent_R10_Using_the_built-in_HTTP_server' },
  ]

  let filename = location.pathname.split('/').pop()
  if (filename.length < 10) {
    filename = category[0].jumpTo.split('/').pop()
  }

  return (
    <TemplateTutor
      noTheme
      main={(<>
        <S row toTop alignCenter>
          {category.map((it) => {
            return <Link href={it.jumpTo} variant="body2" key={it.content}>{it.content}</Link>
          })}
        </S>
        <iframe src={`/${filename}.html`} className="inlinePage" style={{ width: '100%', height: '85vh' }} />
      </>)
      }
    />
  )
}

export default Libevent
