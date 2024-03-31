import { observer } from 'mobx-react-lite'
import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, AvatarGroup, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Button, ButtonBase, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Experimental_CssVarsProvider, Fab, Fade, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, FormLabelRoot, GlobalStyles, Grow, Hidden, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, LinearProgress, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, MenuList, MobileStepper, Modal, ModalManager, NativeSelect, NoSsr, OutlinedInput, Pagination, PaginationItem, Paper, Popover, Popper, Portal, Radio, RadioGroup, Rating, ScopedCssBaseline, Select, Skeleton, Slide, Slider, SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel, Snackbar, SnackbarContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Step, StepButton, StepConnector, StepContent, StepContext, StepIcon, StepLabel, Stepper, StepperContext, StyledEngineProvider, SvgIcon, SwipeableDrawer, Switch, THEME_ID, Tab, TabScrollButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel, Tabs, TextField, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import { useNavigate } from 'react-router-dom'
import { S, B } from '@/components/Layout'

function Home () {
  const navigate = useNavigate()
  return (
    <Template
      noTheme
      header={(<>
        <Logo />
        <S row toTop>
          {[
            { content: '首页', jumpTo: '/' },
            { content: 'Html', jumpTo: '/tutor/html' },
            { content: 'Css', jumpTo: '/tutor/css' },
            { content: 'Effect', jumpTo: '/tutor/effect' },
            { content: 'Bootstrap5', jumpTo: '/tutor/bootstrap5' },
          ].map((item, idx) => {
            return <Button key={item.content} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { navigate(item.jumpTo) }}>{item.content}</Button>
          })}
        </S>
      </>)}
      main={(<>
        <Container id='main_container' maxWidth='lg'>
          <Card>
            <Typography variant='h2'>BDG的个人博客</Typography>
            <Typography variant='h4'>感谢b/s这个平台的存在，可以以一种简单的方法展现自己</Typography>
            <Typography variant='h6'>这个简陋的个人博客 记录平时软件开发的点滴</Typography>
          </Card>
          <Card sx={{ mt: 20 }}>
            <Typography variant='h5'>下面是要继续完成的</Typography>
            <Grid container id='main_grid' spacing={2}>
              {[
                { header: 'css', desc: 'css栏 添加 复制（包括style方式 React方式）' },
                { header: 'socket', desc: 'tcp、ip层的数据封装要写 建立链接时的数据同步也就是三次握手要写 数据传输阶段的包同步过程要写 断开链接时的数据同步也就是四次握手要写' },
                { header: 'c++多线程', desc: '创建 销毁 通信 信息量' },
                { header: 'c++锁', desc: '常见互斥量 锁 常见问题解决方法' },
                { header: '', desc: '' },
              ].map((item, idx) => {
                return (
                  <Grid item xs={3}>
                    <Paper>
                      <Typography variant='h6'>{item.header}</Typography>
                      <Typography>{item.desc}</Typography>
                    </Paper>
                  </Grid>)
              })}
            </Grid>
          </Card>
        </Container>
      </>)}
      footer={(<>©2024 footer</>)}
    />
  )
}

export default observer(Home)
