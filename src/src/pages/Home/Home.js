import { observer } from 'mobx-react-lite'
import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import {
  Box, Button, Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  return (
    <Template
      noTheme
      header={(<>
        <Logo />
        <Box sx={{ flexGrow: 1, }}>
          <Stack direction='row'>
            <Button key={1} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/') }}>首页</Button>
            <Button key={2} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/html') }}>Html</Button>
            <Button key={3} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/css') }}>Css</Button>
            <Button key={4} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/effect') }}>Effect</Button>
            <Button key={5} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/bootstrap5') }}>Bootstrap5</Button>
          </Stack>
        </Box>
      </>)}
      main={(<>
        content
      </>)}
      footer={(<>©2023 footer</>)}
    />
  )
}

export default observer(Home)
