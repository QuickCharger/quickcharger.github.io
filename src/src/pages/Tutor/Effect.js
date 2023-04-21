import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles, Grid, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, THEME_ID, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, } from '@mui/material'

import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import UpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CloseIcon from '@mui/icons-material/Close'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'

import { useNavigate } from 'react-router-dom'

import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import { useState } from 'react'

import imgA from '@/asset/A.png'

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

function InsetDividers () {
  return (
    <List sx={{ maxWidth: 360, bgcolor: 'background.paper', ...styleBorder }}>
      {[
        { primary: 'Photos', secondary: "Jan 9, 2014", icon: <ImageIcon /> },
        { primary: 'Work', secondary: "Jan 7, 2014", icon: <WorkIcon /> },
        { primary: 'Vacation', secondary: "July 20, 2014", icon: <BeachAccessIcon />, last: true },
      ].map((item, idx) => (
        <React.Fragment key={idx}>
          < ListItem key={idx} >
            <ListItemAvatar>
              <Avatar>
                {item.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </ListItem>
          {!item.last && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))
      }
    </List >
  )
}

function MiddleDividers () {
  return (
    <Box sx={{ width: 360, ...styleBorder }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          {[{ content: 'Toothbrush', fontSize: 'h4', moreSize: true }, { content: '$4.50', fontSize: 'h6' }].map((item, idx) => (
            <Grid item xs={item.moreSize} key={idx}>
              <Typography gutterBottom variant={item.fontSize} component="div">
                {item.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1"> Select type </Typography>
        <Stack direction="row" spacing={1}>
          {[{ label: 'Extra Soft' }, { label: 'Soft', color: 'primary' }, { label: 'Medium' }, { label: 'Hard' }].map((item, idx) => (
            <Chip label={item.label} color={item.color} key={idx} />
          ))}
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  )
}

function NestedList () {
  const [open, setOpen] = React.useState(true)

  function GenIconButton (a_sx, icon, content, useExpand, onClick) {
    return (
      <ListItemButton sx={a_sx} onClick={onClick} >
        <ListItemIcon> {icon} </ListItemIcon>
        <ListItemText primary={content} />
        {useExpand && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton >
    )
  }

  return (
    <List
      sx={{ maxWidth: 360, ...styleBorder }}
      component="nav"
      subheader={
        <ListSubheader component="div">
          Nested List Items
        </ListSubheader>
      }
    >
      {GenIconButton({}, <SendIcon />, "Sent mail")}
      {GenIconButton({}, <DraftsIcon />, "Drafts")}
      {GenIconButton({}, <InboxIcon />, "Inbox", true, () => { setOpen(!open) })}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding>
          {GenIconButton({ pl: 4 }, <StarBorder />, "Starred")}
        </List>
      </Collapse>
    </List>
  )
}

function CollapsibleTable () {
  let commonHistory = [
    { date: '2020-01-05', customerId: '11091700', amount: 3, },
    { date: '2020-01-02', customerId: 'Anonymous', amount: 1, },
  ]
  const header = [{}, { content: 'Dessert (100g serving)' }, { align: 'right', content: 'Calories' }, { align: 'right', content: 'Fat (g)' }, { align: 'right', content: 'Carbs (g)' }, { align: 'right', content: 'Protein (g)' }]
  const rows = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, price: 3.99, history: commonHistory },
    { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, price: 4.99, history: commonHistory },
    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0, price: 3.79, history: commonHistory },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, price: 2.5, history: commonHistory },
    { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, price: 1.5, history: commonHistory },
  ]

  function genTableCells (items = [{ content: null, other: {} }]) {
    return (
      <>
        {items.map((item, idx) => {
          let { content, ...other } = item
          return (
            <TableCell key={idx} {...other}>{content}</TableCell>
          )
        })}
      </>
    )
  }

  function Row ({ row }) {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row"> {row.name} </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Typography variant="h6" gutterBottom component="div"> History </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }

  return (
    <TableContainer component={Paper} sx={{ width: 800, ...styleBorder }}>
      <Table>
        <TableHead>
          <TableRow> {genTableCells(header)} </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item, idx) => (
            <Row key={idx} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function SimpleSnackbar () {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (<>
    <Button onClick={handleClick} sx={{ ...styleBorder }}>Open simple snackbar</Button>
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}   // 设定autoHideDuration后 超时会自动调用onClose！！！
      anchorOrigin={{ vertical: 'right', horizontal: 'bottom' }}
      message="Note archived"
      action={(<>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>)}
    />
  </>)
}

function SimpleAccordion () {
  return (<>
    <Accordion sx={{ width: 500, ...styleBorder }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>)
}

function ActionAreaCard () {
  return (
    <Card sx={{ maxWidth: 345, ...styleBorder }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgA}
          alt="A.png"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function ButtonAppBar () {
  return (
    <AppBar position="sticky" sx={{ width: 500, ...styleBorder }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

function TemporaryDrawer () {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {(anchor === 'top' || anchor === 'left' || anchor === 'right') && <Toolbar />}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div style={{ width: 500, ...styleBorder }}>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
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
        <InsetDividers />
        <MiddleDividers />
        <NestedList />
        <CollapsibleTable />
        <SimpleSnackbar />
        <SimpleAccordion />
        <ButtonAppBar />
        <ActionAreaCard />
        <TemporaryDrawer />
      </>)}
    />
  )
}

export default Effect
