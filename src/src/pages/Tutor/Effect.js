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

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

function FloatingActionButtonZoom () {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 500,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={(index) => setValue(index)}
      >
        {['Item One', 'Item Two', 'Item Three'].map((item, idx) => (
          <TabPanel value={value} index={idx} dir={theme.direction}>{item}</TabPanel>
        ))}
      </SwipeableViews>
      {
        [
          { color: 'primary', sx: fabStyle, icon: <AddIcon />, },
          { color: 'secondary', sx: fabStyle, icon: <EditIcon />, },
          { color: 'inherit', sx: { ...fabStyle, ...fabGreenStyle }, icon: <UpIcon />, },
        ].map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={{ enter: 500, exit: 200 }}
            sx={{
              bottom: `20px`,
              right: `20px`,
              position: 'absolute'
            }}
          >
            <Fab sx={fab.sx} color={fab.color}>
              {fab.icon}
            </Fab>
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
            <Button key={3} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate('/tutor/effect') }}>Effect</Button>
          </Stack>
        </Box>
      </>)}
      main={(<>
        <FloatingActionButtonZoom />
      </>)}
    />
  )
}

export default Effect
