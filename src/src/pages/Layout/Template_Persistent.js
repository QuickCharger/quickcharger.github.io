import * as React from 'react'
import {
  AppBar,
  Drawer,
  IconButton,
  Box, Toolbar, Collapse,
  Stack, Grid,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useTheme } from '@mui/material/styles'

const drawerWidth = 240

export default function Template ({ header, sider, main, footer }) {
  const [openCollapse, setOpenCollapse] = React.useState(true)

  const theme = useTheme()
  return (<>
    <Stack direction='row' id='stackroot' alignItems='stretch'>
      <Drawer
        display='flex'
        flex-basis={drawerWidth}
        variant="persistent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, },
        }}
        open={openCollapse}
        unmountOnExit
      >
        <Stack direction='row' justifyContent='flex-end' alignItems='center' sx={{ height: '64px' }}>
          <IconButton sx={{ mr: '10px' }} onClick={() => setOpenCollapse(!openCollapse)}>
            <ChevronLeftIcon />
          </IconButton>
        </Stack>
        {sider}
      </Drawer>

      <Box id='box' sx={{
        width: '100%',
        ...(openCollapse && {
          transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
        ...(!openCollapse && {
          transition: theme.transitions.create('margin-left', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
        }),
      }}>
        <Stack direction='column' id='stack' sx={{}}>
          <AppBar open={openCollapse} id='appbar' position='sticky'>
            <Toolbar>
              <Collapse in={!openCollapse} orientation='horizontal' unmountOnExit>
                <IconButton color="inherit" sx={{ mr: 2 }} onClick={() => setOpenCollapse(!openCollapse)} >
                  <MenuIcon />
                </IconButton>
              </Collapse>
              {header}
            </Toolbar>
          </AppBar>

          <Box sx={{ marginLeft: '20px' }}>
            <Toolbar />
            {main}
          </Box>
        </Stack>
      </Box>
    </Stack >
  </>)
}
