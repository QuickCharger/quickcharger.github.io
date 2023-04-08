import * as React from 'react'
import {
  AppBar as MuiAppBar,
  Drawer,
  IconButton,
  Box, Toolbar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

export default function Template ({ header, sider, main, footer }) {

  const [openDrawer, setOpenDrawer] = React.useState(true)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar open={openDrawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpenDrawer(!openDrawer)}
            sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          {header}
        </Toolbar>
      </AppBar>

      <Drawer
        display='flex'
        flex-basis={drawerWidth}
        variant="persistent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, },
        }}
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        {sider}
      </Drawer>

      <Main open={openDrawer} component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {main}
      </Main>
    </Box >
  )
}