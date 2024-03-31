import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles, Grid, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, THEME_ID, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, useTheme } from '@mui/material'

function genStyle (props, defaul) {
  let {
    w5, w10, w15, w20, w25, w30, w35, w40, w45, w50, w55, w60, w65, w70, w75, w80, w85, w90, w95, w100,
    h5, h10, h15, h20, h25, h30, h35, h40, h45, h50, h55, h60, h65, h70, h75, h80, h85, h90, h95, h100,

    m, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
    mt, mt0, mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8, mt9, mt10,
    mb, mb0, mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8, mb9, mb10,
    ml, ml0, ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10,
    mr, mr0, mr1, mr2, mr3, mr4, mr5, mr6, mr7, mr8, mr9, mr10,
    mx, mx0, mx1, mx2, mx3, mx4, mx5, mx6, mx7, mx8, mx9, mx10,
    my, my0, my1, my2, my3, my4, my5, my6, my7, my8, my9, my10,

    p, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
    pt, pt0, pt1, pt2, pt3, pt4, pt5, pt6, pt7, pt8, pt9, pt10,
    pb, pb0, pb1, pb2, pb3, pb4, pb5, pb6, pb7, pb8, pb9, pb10,
    pl, pl0, pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10,
    pr, pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10,
    px, px0, px1, px2, px3, px4, px5, px6, px7, px8, px9, px10,
    py, py0, py1, py2, py3, py4, py5, py6, py7, py8, py9, py10,

    m1p, m2p, m3p, m4p, m5p, m6p, m7p, m8p, m9p, m10p,
    mt1p, mt2p, mt3p, mt4p, mt5p, mt6p, mt7p, mt8p, mt9p, mt10p,
    mb1p, mb2p, mb3p, mb4p, mb5p, mb6p, mb7p, mb8p, mb9p, mb10p,
    ml1p, ml2p, ml3p, ml4p, ml5p, ml6p, ml7p, ml8p, ml9p, ml10p,
    mr1p, mr2p, mr3p, mr4p, mr5p, mr6p, mr7p, mr8p, mr9p, mr10p,
    mx1p, mx2p, mx3p, mx4p, mx5p, mx6p, mx7p, mx8p, mx9p, mx10p,
    my1p, my2p, my3p, my4p, my5p, my6p, my7p, my8p, my9p, my10p,

    p1p, p2p, p3p, p4p, p5p, p6p, p7p, p8p, p9p, p10p,
    pt1p, pt2p, pt3p, pt4p, pt5p, pt6p, pt7p, pt8p, pt9p, pt10p,
    pb1p, pb2p, pb3p, pb4p, pb5p, pb6p, pb7p, pb8p, pb9p, pb10p,
    pl1p, pl2p, pl3p, pl4p, pl5p, pl6p, pl7p, pl8p, pl9p, pl10p,
    pr1p, pr2p, pr3p, pr4p, pr5p, pr6p, pr7p, pr8p, pr9p, pr10p,
    px1p, px2p, px3p, px4p, px5p, px6p, px7p, px8p, px9p, px10p,
    py1p, py2p, py3p, py4p, py5p, py6p, py7p, py8p, py9p, py10p,

    ...other } = props

  let st = {}
  {
    if (other.sx) {
      st = { ...other.sx }
    }
    else if (other.style) {
      st = { ...other.style }
    }
  }

  {
    if (defaul.width && !st.width) {
      st.width = '100%'
    }
    if (w5) st.width = '5%'
    else if (w10) st.width = '10%'
    else if (w15) st.width = '15%'
    else if (w20) st.width = '20%'
    else if (w25) st.width = '25%'
    else if (w30) st.width = '30%'
    else if (w35) st.width = '35%'
    else if (w40) st.width = '40%'
    else if (w45) st.width = '45%'
    else if (w50) st.width = '50%'
    else if (w55) st.width = '55%'
    else if (w60) st.width = '60%'
    else if (w65) st.width = '65%'
    else if (w70) st.width = '70%'
    else if (w75) st.width = '75%'
    else if (w80) st.width = '80%'
    else if (w85) st.width = '85%'
    else if (w90) st.width = '90%'
    else if (w95) st.width = '95%'
    else if (w100) st.width = '100%'
  }
  {
    if (defaul.height && !st.height)
      st.height = '100%'
    if (h5) st.height = '5%'
    else if (h10) st.height = '10%'
    else if (h15) st.height = '15%'
    else if (h20) st.height = '20%'
    else if (h25) st.height = '25%'
    else if (h30) st.height = '30%'
    else if (h35) st.height = '35%'
    else if (h40) st.height = '40%'
    else if (h45) st.height = '45%'
    else if (h50) st.height = '50%'
    else if (h55) st.height = '55%'
    else if (h60) st.height = '60%'
    else if (h65) st.height = '65%'
    else if (h70) st.height = '70%'
    else if (h75) st.height = '75%'
    else if (h80) st.height = '80%'
    else if (h85) st.height = '85%'
    else if (h90) st.height = '90%'
    else if (h95) st.height = '95%'
    else if (h100) st.height = '100%'
  }

  {
    if (m) st.m = 'auto'
    else if (m0) st.m = 0
    else if (m1) st.m = 1
    else if (m2) st.m = 2
    else if (m3) st.m = 3
    else if (m4) st.m = 4
    else if (m5) st.m = 5
    else if (m6) st.m = 6
    else if (m7) st.m = 7
    else if (m8) st.m = 8
    else if (m9) st.m = 9
    else if (m10) st.m = 10

    if (mt) st.mt = 'auto'
    else if (mt0) st.mt = 0
    else if (mt1) st.mt = 1
    else if (mt2) st.mt = 2
    else if (mt3) st.mt = 3
    else if (mt4) st.mt = 4
    else if (mt5) st.mt = 5
    else if (mt6) st.mt = 6
    else if (mt7) st.mt = 7
    else if (mt8) st.mt = 8
    else if (mt9) st.mt = 9
    else if (mt10) st.mt = 10

    if (mb) st.mb = 'auto'
    else if (mb0) st.mb = 0
    else if (mb1) st.mb = 1
    else if (mb2) st.mb = 2
    else if (mb3) st.mb = 3
    else if (mb4) st.mb = 4
    else if (mb5) st.mb = 5
    else if (mb6) st.mb = 6
    else if (mb7) st.mb = 7
    else if (mb8) st.mb = 8
    else if (mb9) st.mb = 9
    else if (mb10) st.mb = 10

    if (ml) st.ml = 'auto'
    else if (ml0) st.ml = 0
    else if (ml1) st.ml = 1
    else if (ml2) st.ml = 2
    else if (ml3) st.ml = 3
    else if (ml4) st.ml = 4
    else if (ml5) st.ml = 5
    else if (ml6) st.ml = 6
    else if (ml7) st.ml = 7
    else if (ml8) st.ml = 8
    else if (ml9) st.ml = 9
    else if (ml10) st.ml = 10

    if (mr) st.mr = 'auto'
    else if (mr0) st.mr = 0
    else if (mr1) st.mr = 1
    else if (mr2) st.mr = 2
    else if (mr3) st.mr = 3
    else if (mr4) st.mr = 4
    else if (mr5) st.mr = 5
    else if (mr6) st.mr = 6
    else if (mr7) st.mr = 7
    else if (mr8) st.mr = 8
    else if (mr9) st.mr = 9
    else if (mr10) st.mr = 10

    if (mx) st.mx = 'auto'
    else if (mx0) st.mx = 0
    else if (mx1) st.mx = 1
    else if (mx2) st.mx = 2
    else if (mx3) st.mx = 3
    else if (mx4) st.mx = 4
    else if (mx5) st.mx = 5
    else if (mx6) st.mx = 6
    else if (mx7) st.mx = 7
    else if (mx8) st.mx = 8
    else if (mx9) st.mx = 9
    else if (mx10) st.mx = 10

    if (my) st.my = 'auto'
    else if (my0) st.my = 0
    else if (my1) st.my = 1
    else if (my2) st.my = 2
    else if (my3) st.my = 3
    else if (my4) st.my = 4
    else if (my5) st.my = 5
    else if (my6) st.my = 6
    else if (my7) st.my = 7
    else if (my8) st.my = 8
    else if (my9) st.my = 9
    else if (my10) st.my = 10
  }

  {
    if (p) st.p = 'auto'
    else if (p0) st.p = 0
    else if (p1) st.p = 1
    else if (p2) st.p = 2
    else if (p3) st.p = 3
    else if (p4) st.p = 4
    else if (p5) st.p = 5
    else if (p6) st.p = 6
    else if (p7) st.p = 7
    else if (p8) st.p = 8
    else if (p9) st.p = 9
    else if (p10) st.p = 10

    if (pt) st.pt = 'auto'
    else if (pt0) st.pt = 0
    else if (pt1) st.pt = 1
    else if (pt2) st.pt = 2
    else if (pt3) st.pt = 3
    else if (pt4) st.pt = 4
    else if (pt5) st.pt = 5
    else if (pt6) st.pt = 6
    else if (pt7) st.pt = 7
    else if (pt8) st.pt = 8
    else if (pt9) st.pt = 9
    else if (pt10) st.pt = 10

    if (pb) st.pb = 'auto'
    else if (pb0) st.pb = 0
    else if (pb1) st.pb = 1
    else if (pb2) st.pb = 2
    else if (pb3) st.pb = 3
    else if (pb4) st.pb = 4
    else if (pb5) st.pb = 5
    else if (pb6) st.pb = 6
    else if (pb7) st.pb = 7
    else if (pb8) st.pb = 8
    else if (pb9) st.pb = 9
    else if (pb10) st.pb = 10

    if (pl) st.pl = 'auto'
    else if (pl0) st.pl = 0
    else if (pl1) st.pl = 1
    else if (pl2) st.pl = 2
    else if (pl3) st.pl = 3
    else if (pl4) st.pl = 4
    else if (pl5) st.pl = 5
    else if (pl6) st.pl = 6
    else if (pl7) st.pl = 7
    else if (pl8) st.pl = 8
    else if (pl9) st.pl = 9
    else if (pl10) st.pl = 10

    if (pr) st.pr = 'auto'
    else if (pr0) st.pr = 0
    else if (pr1) st.pr = 1
    else if (pr2) st.pr = 2
    else if (pr3) st.pr = 3
    else if (pr4) st.pr = 4
    else if (pr5) st.pr = 5
    else if (pr6) st.pr = 6
    else if (pr7) st.pr = 7
    else if (pr8) st.pr = 8
    else if (pr9) st.pr = 9
    else if (pr10) st.pr = 10

    if (px) st.px = 'auto'
    else if (px0) st.px = 0
    else if (px1) st.px = 1
    else if (px2) st.px = 2
    else if (px3) st.px = 3
    else if (px4) st.px = 4
    else if (px5) st.px = 5
    else if (px6) st.px = 6
    else if (px7) st.px = 7
    else if (px8) st.px = 8
    else if (px9) st.px = 9
    else if (px10) st.px = 10

    if (py) st.py = 'auto'
    else if (py0) st.py = 0
    else if (py1) st.py = 1
    else if (py2) st.py = 2
    else if (py3) st.py = 3
    else if (py4) st.py = 4
    else if (py5) st.py = 5
    else if (py6) st.py = 6
    else if (py7) st.py = 7
    else if (py8) st.py = 8
    else if (py9) st.py = 9
    else if (py10) st.py = 10
  }

  {
    if (m1p) st.m = "1%"
    else if (m2p) st.m = "2%"
    else if (m3p) st.m = "3%"
    else if (m4p) st.m = "4%"
    else if (m5p) st.m = "5%"
    else if (m6p) st.m = "6%"
    else if (m7p) st.m = "7%"
    else if (m8p) st.m = "8%"
    else if (m9p) st.m = "9%"
    else if (m10p) st.m = "10%"

    if (mt1p) st.mt = "1%"
    else if (mt2p) st.mt = "2%"
    else if (mt3p) st.mt = "3%"
    else if (mt4p) st.mt = "4%"
    else if (mt5p) st.mt = "5%"
    else if (mt6p) st.mt = "6%"
    else if (mt7p) st.mt = "7%"
    else if (mt8p) st.mt = "8%"
    else if (mt9p) st.mt = "9%"
    else if (mt10p) st.mt = "10%"

    if (mb1p) st.mb = "1%"
    else if (mb2p) st.mb = "2%"
    else if (mb3p) st.mb = "3%"
    else if (mb4p) st.mb = "4%"
    else if (mb5p) st.mb = "5%"
    else if (mb6p) st.mb = "6%"
    else if (mb7p) st.mb = "7%"
    else if (mb8p) st.mb = "8%"
    else if (mb9p) st.mb = "9%"
    else if (mb10p) st.mb = "10%"

    if (ml1p) st.ml = "1%"
    else if (ml2p) st.ml = "2%"
    else if (ml3p) st.ml = "3%"
    else if (ml4p) st.ml = "4%"
    else if (ml5p) st.ml = "5%"
    else if (ml6p) st.ml = "6%"
    else if (ml7p) st.ml = "7%"
    else if (ml8p) st.ml = "8%"
    else if (ml9p) st.ml = "9%"
    else if (ml10p) st.ml = "10%"

    if (mr1p) st.mr = "1%"
    else if (mr2p) st.mr = "2%"
    else if (mr3p) st.mr = "3%"
    else if (mr4p) st.mr = "4%"
    else if (mr5p) st.mr = "5%"
    else if (mr6p) st.mr = "6%"
    else if (mr7p) st.mr = "7%"
    else if (mr8p) st.mr = "8%"
    else if (mr9p) st.mr = "9%"
    else if (mr10p) st.mr = "10%"

    if (mx1p) st.mx = "1%"
    else if (mx2p) st.mx = "2%"
    else if (mx3p) st.mx = "3%"
    else if (mx4p) st.mx = "4%"
    else if (mx5p) st.mx = "5%"
    else if (mx6p) st.mx = "6%"
    else if (mx7p) st.mx = "7%"
    else if (mx8p) st.mx = "8%"
    else if (mx9p) st.mx = "9%"
    else if (mx10p) st.mx = "10%"

    if (my1p) st.my = "1%"
    else if (my2p) st.my = "2%"
    else if (my3p) st.my = "3%"
    else if (my4p) st.my = "4%"
    else if (my5p) st.my = "5%"
    else if (my6p) st.my = "6%"
    else if (my7p) st.my = "7%"
    else if (my8p) st.my = "8%"
    else if (my9p) st.my = "9%"
    else if (my10p) st.my = "10%"
  }

  {
    if (p1p) st.p = "1%"
    else if (p2p) st.p = "2%"
    else if (p3p) st.p = "3%"
    else if (p4p) st.p = "4%"
    else if (p5p) st.p = "5%"
    else if (p6p) st.p = "6%"
    else if (p7p) st.p = "7%"
    else if (p8p) st.p = "8%"
    else if (p9p) st.p = "9%"
    else if (p10p) st.p = "10%"

    if (pt1p) st.pt = "1%"
    else if (pt2p) st.pt = "2%"
    else if (pt3p) st.pt = "3%"
    else if (pt4p) st.pt = "4%"
    else if (pt5p) st.pt = "5%"
    else if (pt6p) st.pt = "6%"
    else if (pt7p) st.pt = "7%"
    else if (pt8p) st.pt = "8%"
    else if (pt9p) st.pt = "9%"
    else if (pt10p) st.pt = "10%"

    if (pb1p) st.pb = "1%"
    else if (pb2p) st.pb = "2%"
    else if (pb3p) st.pb = "3%"
    else if (pb4p) st.pb = "4%"
    else if (pb5p) st.pb = "5%"
    else if (pb6p) st.pb = "6%"
    else if (pb7p) st.pb = "7%"
    else if (pb8p) st.pb = "8%"
    else if (pb9p) st.pb = "9%"
    else if (pb10p) st.pb = "10%"

    if (pl1p) st.pl = "1%"
    else if (pl2p) st.pl = "2%"
    else if (pl3p) st.pl = "3%"
    else if (pl4p) st.pl = "4%"
    else if (pl5p) st.pl = "5%"
    else if (pl6p) st.pl = "6%"
    else if (pl7p) st.pl = "7%"
    else if (pl8p) st.pl = "8%"
    else if (pl9p) st.pl = "9%"
    else if (pl10p) st.pl = "10%"

    if (pr1p) st.pr = "1%"
    else if (pr2p) st.pr = "2%"
    else if (pr3p) st.pr = "3%"
    else if (pr4p) st.pr = "4%"
    else if (pr5p) st.pr = "5%"
    else if (pr6p) st.pr = "6%"
    else if (pr7p) st.pr = "7%"
    else if (pr8p) st.pr = "8%"
    else if (pr9p) st.pr = "9%"
    else if (pr10p) st.pr = "10%"

    if (px1p) st.px = "1%"
    else if (px2p) st.px = "2%"
    else if (px3p) st.px = "3%"
    else if (px4p) st.px = "4%"
    else if (px5p) st.px = "5%"
    else if (px6p) st.px = "6%"
    else if (px7p) st.px = "7%"
    else if (px8p) st.px = "8%"
    else if (px9p) st.px = "9%"
    else if (px10p) st.px = "10%"

    if (py1p) st.py = "1%"
    else if (py2p) st.py = "2%"
    else if (py3p) st.py = "3%"
    else if (py4p) st.py = "4%"
    else if (py5p) st.py = "5%"
    else if (py6p) st.py = "6%"
    else if (py7p) st.py = "7%"
    else if (py8p) st.py = "8%"
    else if (py9p) st.py = "9%"
    else if (py10p) st.py = "10%"
  }
  return st
}
/**
 * Stack的布局参数迷幻 重新定义
 * 假定 以row的上下左右为基准 column是row的逆时针90度
 *
 * toTop/Bottom/Center/TopBottom/Even  放置元素方式 顶部优先/底部优先/中间优先/顶部底部占满/平均
 * alignLeft/Right/Center/LeftRight  左边界对齐/右边界对齐/中心线对齐/左边界右边界扩展对齐
 * 
 * HISTORY
 *   2024/2/1 bdg init
 *   2024/3/29 bdg 优化
 */
function EasyLayout (props) {
  let {
    row, column,
    toTop, toBottom, toCenter, toTopBottom, toEven,
    alignLeft, alignRight, alignCenter, alignLeftRight,
    spacing,
    children, ...other } = props

  let st = genStyle(props, { width: true })

  let direction = column ? 'column' : 'row'

  let justifyContent = 'center'
  if (toTop) {
    justifyContent = 'flex-start'
  } else if (toBottom) {
    justifyContent = 'flex-end'
  } else if (toCenter) {
    justifyContent = 'center'
  } else if (toTopBottom) {
    justifyContent = 'space-between'
  } else if (toEven) {
    justifyContent = 'space-evenly'
  }

  let alignItems = 'center'
  if (alignLeft) {
    alignItems = direction === 'column' ? 'flex-start' : 'flex-end'
  } else if (alignRight) {
    alignItems = direction === 'column' ? 'flex-end' : 'flex-start'
  } else if (alignCenter) {
    alignItems = 'center'
  } else if (alignLeftRight) {
    alignItems = 'stretch'
  }
  spacing = spacing === undefined ? 1 : spacing

  return (
    <Stack
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      spacing={spacing}
      {...other}
      sx={st}
    >
      {children}
    </Stack>
  )
}

function B (props) {
  let {
    children, ...other } = props

  let st = genStyle(props, { width: true })

  return (
    <Box
      {...other}
      sx={st}
    >
      {children}
    </Box>
  )
}

export { EasyLayout as S, B }
