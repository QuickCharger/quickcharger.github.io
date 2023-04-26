import TemplateTutor from './Template'
import {
  Box, Button, Stack, Card, CardHeader, Typography, Divider
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'

let content = [
  {
    title: '布局',
    subheader: 'flex轴线方向弹性布局',
    content: `display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: center;
flex-direction: column   主轴的方向
flex-wrap: nowrap        子元素在一行上放不下的情况
justify-content: center  子元素在主轴上的分布方式 或是紧挨着主轴头部flex-start 或是紧挨着主轴尾部flex-end 或是沿着主轴均匀分布space-between|space-around 或是聚堆在主轴中间center
align-items: center      子元素在主轴上的对齐方式 或是起点对齐flex-start 或是尾部对齐flex-end 或是中轴线对齐center`,
    ps: `参考文章
https://www.jianshu.com/p/d94f7a50cd2c`
  },
  {
    title: 'position:',
    subheader: '',
    content: `static    默认 top right等会无效
relative  static基础上加上top right等支持
absolute  相对父元素的位置(排除static父元素) 移出正常排版 通常要设置top left right等位置
fixed     相对浏览器窗口的位置 移出正常排版  通常要设置top left right等位置
sticky    超过指定位置后 变为fixed 没超过时为static`,
    ps: ''
  },
  {
    title: '动画效果',
    subheader: '',
    content: `.box {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 4s, background 2s, transform 5s;
}

div:hover {
  width: 300px;
  top: 200px;
  left: 200px;
  background: black;
  transform:rotate(180deg) rotateZ(60deg);
}
`,
    ps: `参考文章
https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
https://www.jianshu.com/p/5dbeeb2159e8`
  },

  {
    title: '图片填充',
    subheader: '图片填充方式 只有在指定了width height后才生效',
    content: `objectFit: 'cover'          img标签下起作用 完全填充fill 保持原有比例缩放contain 保持原有比例放大cover 1: 1放置none
backgroundSize: 'cover'     设置background铺满时起作用 和img不一样
widht: '100%'
height: '100%'`,
    ps: ''
  },
  {
    title: '添加圆形不透明白色遮盖',
    subheader: '',
    content: `borderRadius: '50%', boxShadow: '0 0 0 4px white'`,
    ps: ''
  },
  {
    title: '居中的总结',
    subheader: '',
    content: `组件相对于父元素左右居中 需要使用margin: 0 auto  前提是当前组件设定了合适的宽高(不能100% 100%本身就是居中状态) position是static或relative
组件内的文字左右居中 需要使用text-align:center; 1.这个参数会向下传递 2.只会影响文本
上下居中 父组件设置display:flex; justify-content:center; align-items: center; 或 父组件设置display:flex子组件设置margin: auto 0;
<!DOCTYPE html>
  <html>
  <body>
    <div style="border: 1px solid; height: 300px;">
      <div style="height: 10px; width: 100px; margin: 10px auto; text-align:center;">abc</div>
    </div>
  </body>
</html>`,
    ps: `参考文章
https://blog.csdn.net/zch981964/article/details/127691471
https://www.cnblogs.com/cnblogs-jcy/p/6074899.html`
  },
]

function Css () {
  return (
    <TemplateTutor
      noTheme
      main={(<>
        <Stack spacing={4}>
          {content.map((item, idx) => (<React.Fragment key={idx}>
            <Card variant="outlined" onClick={() => { console.log(`${idx} clicked`) }}>
              <CardHeader title={item.title} subheader={item.subheader} sx={{ paddingBottom: 0 }} />
              <Typography variant="body1" sx={{ ml: '2em' }}><pre>{item.content}</pre></Typography>
              <Typography variant="body2" sx={{ m: '2em' }}><pre>{item.ps}</pre></Typography>
            </Card>
          </React.Fragment>))}
        </Stack>
      </>)
      }
    />
  )
}

export default Css
