import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import {
  Box, Button, Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function TemplateTutor (props) {
  const navigate = useNavigate()
  let { children, ...other } = props

  if (!other.header) {
    other.header = (<>
      <Logo />
      <Box sx={{ flexGrow: 1, }}>
        <Stack direction='row'>
          <Button key={1} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/') }}>首页</Button>
          <Button key={2} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/html') }}>Html</Button>
          <Button key={3} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/css') }}>Css</Button>
          <Button key={4} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/effect') }}>Effect</Button>
        </Stack>
      </Box>
    </>)
  }
  return (
    <Template {...other}>
      {children}
    </Template>
  )
}

export default TemplateTutor
