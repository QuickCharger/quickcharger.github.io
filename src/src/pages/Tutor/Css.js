import TemplateTutor from './Template'
import {
  Box, Button, Stack, Card, CardHeader, Typography, Divider
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import './Css.css'

function genA (a_href, desc, a_href_) {
  return <>
    <Typography variant='span'>{desc ? `${desc}  ` : ''}</Typography>
    <a href={a_href} target='_blank' rel="noreferrer">{a_href_ || a_href}</a>
  </>
}

let content = [
  {
    title: genA('https://developer.mozilla.org/zh-CN/docs/Web/CSS/display', null, 'display'),
    subheader: 'none  block  inline  inline-block  flex',
    content: <div className='content'>
      <p>none</p>
      <p>    display: none 隐藏元素 不占用布局</p>
      <p>    visibility: hidden 隐藏后 占用布局</p>
      <p>block</p>
      <p>    宽 默认占满父元素</p>
      <p>    高 默认0 由内容决定</p>
      <p>inline</p>
      <p>    宽 默认0 <span className='red'>不可width</span>  可以padding margin</p>
      <p>    高 默认0 <span className='red'>不可heigh margin padding (padding-top padding-bottom 有效 但不会占位！！！)</span></p>
      <p>inline-block</p>
      <p>    外层是block时</p>
      <p>    inline-block需要设置 vertical-align; 建议强制使用 默认的baseline太迷了</p>
      <p>    外层是flex时</p>
      <p>    在flex中使用align-items对齐。 inline-block的vertical-align失效</p>
      <p>flex    内部的元素排序失效。 使用flex的align-items排序 !!!</p>
      <p>    {genA('https://www.w3school.com.cn/cssref/pr_flex-direction.asp', '', 'flex-direction')}: =row | column  主轴的方向</p>
      <p>    {genA('https://www.w3school.com.cn/cssref/pr_flex-wrap.asp', '', 'flex-wrap')}: =nowrap | wrap        子元素在一行上放不下的情况</p>
      <p>    flex-flow 是 flex-direction 和 flex-wrap 的简写</p>
      <p>    {genA('https://www.w3school.com.cn/cssref/pr_justify-content.asp', '', 'justify-content')}: flex-start | flex-end | space-between | space-around | center  子元素在主轴上的分布方式</p>
      <p>    {genA('https://www.w3school.com.cn/cssref/pr_align-items.asp', '', 'align-items')}: center | flex-start | flex-end | center  子元素在主轴上的对齐方式</p>
    </div>,
    ps: <div className='ps'>
      <p>参考</p>
      <p>{genA('https://zhuanlan.zhihu.com/p/359299173', '理解inline、block、inline-block并实现各种细节效果')}</p>
      <p>{genA('https://www.jianshu.com/p/d94f7a50cd2c', 'flex讲解')}</p>
      <p>{genA('https://mui.com/material-ui/react-stack', 'flex对齐演示')}</p>
    </div>
  },
  {
    title: genA('https://developer.mozilla.org/zh-CN/docs/Web/CSS/position', null, 'position'),
    subheader: '',
    content: <div className='content'>
      <p>=static   top right等会无效</p>
      <p>relative  static基础上加上top right等支持</p>
      <p>absolute  相对父元素的位置(排除static父元素) 移出正常排版 通常要设置top left right等位置</p>
      <p>fixed     相对浏览器窗口的位置 移出正常排版  通常要设置top left right等位置</p>
      <p>sticky    超过指定位置后 变为fixed 没超过时为static`</p>
    </div>
    ,
    ps: ''
  },
  {
    title: genA('https://www.w3school.com.cn/css/css3_animations.asp', null, '动画效果'),
    subheader: '',
    content: <div className='content'>
      <p>{`.box {`}</p>
      <p>  width: 100px;</p>
      <p>  height: 100px;</p>
      <p>  background: red;</p>
      <p>  {genA('https://www.w3school.com.cn/cssref/pr_transition.asp', '', 'transition')}: width 2s, height 4s, background 2s, transform 5s;</p>
      <p>{`}`}</p>
      <p></p>
      <p>{`div:hover {`}</p>
      <p>  width: 300px;</p>
      <p>  top: 200px;</p>
      <p>  left: 200px;</p>
      <p>  background: black;</p>
      <p>  transform:rotate(180deg) rotateZ(60deg);</p>
      <p>{`}`}</p>
    </div>
    ,
    ps: <div className='ps'>
      <p>参考</p>
      <p>{genA('https://www.cnblogs.com/yunkou/p/4235469.html', 'transition支持的属性')}</p>
      <p>{genA('https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions', '')}</p>
      <p>{genA('https://www.jianshu.com/p/5dbeeb2159e8', '')}</p>
    </div>
  },

  {
    title: genA('https://www.w3school.com.cn/css/css3_images.asp', null, '背景'),
    subheader: <span className='red'>背景不会改变宽高</span>,
    content: < div className='content' >
      <p>img</p>
      <p>  {genA('https://www.w3school.com.cn/cssref/pr_object-fit.asp', null, 'object-fit')}: =fill完全填充| contain保持原有比例缩放 | cover保持原有比例放大 | none 1: 1放置</p>
      <p></p>
      <p>div</p>
      <p>  background: background-image background-repeat background-position; 例如 background: url('url') right bottom no-repeat, url('url') left top repeat</p>
      <p>  background-image: url('url')</p>
      <p>  background-repeat: =repeat | repeat-x | repeat-y | no-repeat</p>
      <p>  background-position: center | top | bottom | left | right | x y</p>
      <p>  background-size: =auto | cover等比全覆盖 | contain等比全展示 | w h</p>
      <p>  background-attachment: =scroll | fixed; 是否能滚动</p>
    </div >,
    ps: ''
  },
  {
    title: '居中的总结',
    subheader: '',
    content: <div className='content'>
      <p>block组件左右居中 1.明确指定width不能100 % 2.margin: 0 auto  3. position是static或relative</p>
      <p>inline组件左右居中</p>
      <p>  方法1 外层 text - align: center; 实测内部为img也会有效果</p>
      <p>  方法2 内层 margin: 0 50 %; transform: translate(-50 %, 0)</p>
      <p>文字左右居中 只需text-align: center; 1.这个参数会向下传递 2.只会影响文本</p>
      <p>文字上下居中 只需vertical-align: middle; 只会影响文本</p>
      <p>上下居中 父组件设置display: flex; justify - content: center; align - items: center; 或 父组件设置display: flex子组件设置margin: auto 0;</p>
    </div>,
    ps: <div className='ps'>
      <p>参考</p>
      <p>{genA('https://blog.csdn.net/zch981964/article/details/127691471', '')}</p>
      <p>{genA('https://www.cnblogs.com/cnblogs-jcy/p/6074899.html', '')}</p>
    </div>
  },
  {
    title: 'table的属性',
    subheader: '',
    content: <div className='content'>
      <p>{genA('https://www.w3school.com.cn/cssref/pr_border-collapse.asp', '', 'border-collapse')}: =separate | collapse; 设置表格的边框是否被合并为一个单一的边框</p>
      <p>{genA('https://www.w3school.com.cn/tiy/t.asp?f=css_table_color', null, 'tr:nth-child(even)')}  选中所有奇数行</p>
    </div>,
    ps: <div className='ps'>
      <p>参考</p>
    </div>
  },
  {
    title: genA('https://www.w3school.com.cn/css/css_combinators.asp', null, '组合器'),
    subheader: '',
    content: <div className='content'>
      <p>div p	    div元素内的所有  p元素。</p>
      <p>div &gt; p  div元素内的第一层所有  p元素。</p>
      <p>div + p  div元素之后的紧挨的  p元素 只选择一个。</p>
      <p>div ~ p  div元素内的第一层所有  p元素。</p>
    </div>,
    ps: <div className='ps'>
      <p>参考</p>
      <p>{genA('https://www.w3school.com.cn/css/css_combinators.asp', '')}</p>
    </div>
  },
  {
    title: '伪类 伪元素',
    subheader: '',
    content: <div className='content'>
      <p>a:hover 必须在 CSS 定义中的 a:link 和 a:visited 之后，才能生效！a:active 必须在 CSS 定义中的 a:hover</p>
    </div>,
    ps: <div className='ps'>
      <p>参考</p>
      <p>{genA('https://www.w3school.com.cn/css/css_pseudo_classes.asp', '')}</p>
      <p>{genA('https://www.w3school.com.cn/css/css_pseudo_elements.asp', '')}</p>
    </div>
  },
  {
    title: '通用',
    subheader: '',
    content: <div className='content'>
      <p>overflow: =visible默认框外渲染 | hidden 框外隐藏 | scroll 强制添加滚动条 | auto 自动添加滚动条  子元素溢出的处理</p>
      <p>float: =none | left | right  通常用于图片在文字中的浮动效果 <span className='red'>会破坏display:block;</span> 后面的元素需要及时clear:both否则会有布局问题！！！ </p>
      <p>clear: =none | left | right | both  规定元素的哪一侧不允许其他浮动元素</p>
      <p>list-style-type: none;  li样式 通常用于导航</p>
      <p>text-decoration: none;  文字样式 通常用于a</p>
      <p>text-indent: em;  段落首行缩进</p>
      <p>white-space: =normal | pre | nowrap | pre-wrap | pre-line;  文字换行</p>
      <p>vertical-align: =baseline | top | middle | bottom;  元素的垂直对齐方式</p>
    </div>,
    ps:
      <div className='ps'>
        <p>参考</p>
        <p>{genA('https://www.w3school.com.cn/tiy/t.asp?f=css_layout_float_1', 'float')}</p>
        <p>{genA('https://blog.csdn.net/xunminwei0021/article/details/110390753', 'float')}</p>
        <p>{genA('https://www.w3school.com.cn/tiy/t.asp?f=css_layout_cols', 'float')}</p>
        <p>{genA('https://zhuanlan.zhihu.com/p/359299173', '')}</p>
        <p>{genA('https://www.w3school.com.cn/cssref/pr_align-items.asp', '')}</p>
        <p>{genA('https://mui.com/material-ui/react-stack', '')}</p>
        <p>{genA('https://www.w3school.com.cn/tiy/t.asp?f=css_vertical-align', 'vertical-align')}</p>
      </div>
  },
]

function Css () {
  return (
    <TemplateTutor
      noTheme
      main={(<>
        外部css 内部css 行内css  <span style={{ color: 'red' }}>权值行内css最高 其次内部css</span>
        <Stack spacing={4}>
          {content.map((item, idx) => (<React.Fragment key={idx}>
            <Card variant="outlined" style={{ paddingLeft: '2em' }}>
              <span style={{ fontSize: '2em', fontWeight: 'bold' }}>{item.title}</span>
              <span style={{ color: 'grey', marginLeft: '2em' }}>{item.subheader}</span>
              <div style={{}}>{item.content}</div>
              <div variant="body2" style={{ marginTop: '1.5em', whiteSpace: 'pre-line' }}>{item.ps}</div>
            </Card>
          </React.Fragment>))}
        </Stack>
      </>)
      }
    />
  )
}

export default Css
