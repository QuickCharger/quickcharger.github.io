import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import { green } from '@mui/material/colors'

import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import {
  Box, Button, Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

let styleBorder = {
  border: '1px solid black',
  margin: '10px',
  padding: '3px',
}


function FloatingActionButtonZoom () {
  const theme = useTheme()
  const [curIdx, setCurIdx] = React.useState(0)

  function TabPanel ({ children, index, ...other }) {
    return (
      <Typography
        component="div"
        {...other}
      >
        <Box sx={{ p: 3 }}>{children}</Box>
      </Typography>
    )
  }

  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  }

  const fabGreenStyle = {
    color: 'white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
  }

  return (
    <Box position='relative' sx={{ width: 500, minHeight: 200, ...styleBorder, }}
    >
      <AppBar position="relative" color="default">
        <Tabs value={curIdx} variant="fullWidth" onChange={(event, newValue) => { setCurIdx(newValue) }}>
          {['Item One', 'Item Two', 'Item Three'].map((item, idx) => (<Tab label={item} key={idx}></Tab>))}
        </Tabs>
      </AppBar>
      <SwipeableViews index={curIdx} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        children={['Item One', 'Item Two', 'Item Three'].map((item, idx) => (<TabPanel index={idx} dir={theme.direction} key={idx}>{item}</TabPanel>))}
      />
      {[
        { color: 'primary', sx: fabStyle, icon: <AddIcon />, },
        { color: 'secondary', sx: fabStyle, icon: <EditIcon />, },
        { color: 'inherit', sx: { ...fabStyle, ...fabGreenStyle }, icon: <UpIcon />, },
      ].map((item, idx) => (
        <Zoom key={idx} in={curIdx === idx} timeout={{ enter: 500, exit: 200 }} sx={item.sx} >
          <Fab color={item.color}> {item.icon} </Fab>
        </Zoom>
      ))}
    </Box>
  )
}

function Effect () {
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
          </Stack>
        </Box>
      </>)}
      main={(<>
        <pre id="thanks">
          <div>感谢 mozilla w3c</div>
          <div>参考于 <a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a' target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a</a></div>
          <div>参考于 <a href="https://www.w3school.com.cn/cssref/pr_align-items.asp" target="_blank" rel="noreferrer">https://www.w3school.com.cn/cssref/pr_align-items.asp</a></div>
        </pre>
        <FloatingActionButtonZoom />
      </>)}
    />
  )
}

export default Effect
