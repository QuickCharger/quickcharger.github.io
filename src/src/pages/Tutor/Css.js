// import { observer } from 'mobx-react-lite'
import { Template } from '@/pages/Layout'
import Logo from '@/components/Logo'
import {
  Box, Button, Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Css () {
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

        布局布局布局布局布局布局 begin

        flex 轴线方向弹性布局
        display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: center;
        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center'
        flex-direction: column		主轴的方向
        flex-wrap: nowrap			子元素在一行上放不下的情况
        justify-content: center		子元素在主轴上的分布方式 或是紧挨着主轴头部flex-start 或是紧挨着主轴尾部flex-end 或是沿着主轴均匀分布space-between|space-around 或是聚堆在主轴中间center
        align-items: center			子元素在主轴上的对齐方式 或是起点对齐flex-start 或是尾部对齐flex-end 或是中轴线对齐center
        参考文章
        https://www.jianshu.com/p/d94f7a50cd2c

        布局布局布局布局布局布局 end


        图片填充方式 只有在指定了width height后才生效
        objectFit: 'cover'			img标签下起作用 完全填充fill 保持原有比例缩放contain 保持原有比例放大cover 1:1放置none
        backgroundSize: 'cover'		设置background铺满时起作用 和img不一样
        widht: '100%'
        height: '100%'


        添加圆形不透明白色遮盖
        borderRadius: '50%', boxShadow: '0 0 0 4px white'

      </>)}
    />
  )
}

export default Css
