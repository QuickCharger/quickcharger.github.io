import * as React from 'react'
import { Stack, Box, Drawer, AppBar, Toolbar, } from '@mui/material'

const drawerWidth = 240

export default function Template ({ header, sider, main, footer }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {header}
        </Toolbar>
      </AppBar>

      {sider ? <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {sider}
      </Drawer> : <></>}


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction='column' alignItems='stretch'>
          <Toolbar />
          <Box>
            {main}
          </Box>
          <Box textAlign='center'>
            {footer}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}