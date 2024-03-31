import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateTutor from './Template'
import Logo from '@/components/Logo'
import {
  Box, Button, Typography, Stack,
  Divider, List, ListItem, ListItemText, Card,
  Link
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { S, B } from '@/components/Layout'

/**
 * input:
 *   '#abc'   jump to id='abc'
 */
function ScrollTo (str) {
  const offset = 64 + 10   // 导航栏宽64px 再额外留点距离
  let item = null
  if (str[0] === '#') {
    item = document.getElementById(`${str.substring(1)}`)
  }
  if (item) {
    console.log(`scroll to ${str}`)
    window.scrollTo({ top: item.offsetTop - offset, behavior: 'smooth' })
  }
}

function DivJumpTo (props) {
  return (
    <Link
      onClick={() => {
        // console.log('jump to', props.jumpto)
        ScrollTo(props.jumpto || props.content)
      }}
      style={{ display: 'inline' }}
    >
      {props.content}
    </Link>
  )
}

function DivJumpToBlank ({ children, ...others }) {
  return (
    <div style={{ display: 'inline' }}>
      <a href={'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/' + others.jumpto} target="_blank" rel="noreferrer" {...others}>{children}</a>
    </div>
  )
}

function GenNav () {
  let quickjump = [
    { jumpTo: '#a', content: 'a' },
    { jumpTo: '#b', content: 'b' },
    { jumpTo: '#cite', content: 'c' },
    { jumpTo: '#del', content: 'd' },
    { jumpTo: '#em', content: 'e' },
    { jumpTo: '#form', content: 'f' },
    { jumpTo: '#header', content: 'h' },
    { jumpTo: '#i', content: 'i' },
    { jumpTo: '#label', content: 'l' },
    { jumpTo: '#map', content: 'm' },
    { jumpTo: '#nav', content: 'n' },
    { jumpTo: '#object', content: 'o' },
    { jumpTo: '#p', content: 'p' },
    { jumpTo: '#q', content: 'q' },
    { jumpTo: '#s', content: 's' },
    { jumpTo: '#table', content: 't' },
    { jumpTo: '#u', content: 'u' },
    { jumpTo: '#v', content: 'v' },
  ]
  return (
    <div id="navbar">

      <List>
        <Typography variant='h5' align='center' noWrap={true} sx={{ fontWeight: 'bold' }}>HTML 快速手册</Typography>
        <Divider />
        <Card sx={{ p: '5px' }}>
          <Typography variant='h6' align='center' noWrap={true}>快速导航</Typography>
          <Grid container spacing={0.5}>
            {
              quickjump.map((item, idx) => (
                <Button variant="text" key={idx} size="small" sx={{ width: '20px', minWidth: '20px' }} onClick={() => { ScrollTo(item.jumpTo) }}>{item.content}</Button>
              ))
              // quickjump.map((it, idx) =>
              //   <Grid item xs={1} href={it.href} target='_self' key={idx}>{it.content}</Grid>)
            }
          </Grid>
        </Card>
        <Divider />
        {[
          { label: '布局相关', jumpTo: '#jumptoLayout' },
          { label: '显示相关', jumpTo: '#jumptoShow' },
          { label: '交互', jumpTo: '#jumptoInputOutput' },
          { label: '多媒体', jumpTo: '#jumptoMedia' },
        ].map((item, idx) => (
          <div key={idx}>
            <ListItem button >
              {/* <ListItemButton href={item.jumpTo}> */}
              <ListItemText primary={item.label} onClick={() => { ScrollTo(item.jumpTo) }} />
              {/* </ListItemButton> */}
              {/* <Typography variant='h6' align='center' noWrap={true}>{item.label}</Typography> */}
            </ListItem>
            <Divider />
          </div>
        ))}
        <Divider></Divider>
        <ListItem>
          <S row spacing={2}>
            <Typography>示例</Typography>
            <Link href="#section-demo-table">table</Link>
            <Link href="#section-demo-form">form</Link>
          </S>
        </ListItem>
      </List >

    </div >
  )
}

function GenDetail (name, nameFull, desc, code, param, show) {
  return (
    <S
      id={name}
      column toTop alignLeft
      m1 p2
      sx={{
        backgroundColor: '#e6e8f4',
      }}
      spacing={2}
    >
      <B><Link
        href={'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/' + name}
        target="_black"
        sx={{
          fontSize: '1.8em',
          fontWeight: 'bold',
        }}
      >{name + (nameFull ? ` - ${nameFull}` : '')}</Link></B>
      <B >{desc}</B>
      <B sx={{
        fontSize: "20px",
        backgroundColor: "#f7f7f7",
        whiteSpace: "pre-line",
      }}>{code}</B>
      <B sx={{
        backgroundColor: "#f7f7f7",
        fontSize: "15px",
        lineHeight: "150%",
        paddingLeft: 2,
      }}>{param}</B>
      <B sx={{
        backgroundColor: "white",
      }}>{show}</B>
    </S>
  )
}

function GenArticle () {

  const allABC = (it) => {
    for (let i = 0; i < it.length; ++i) {
      if (!((it[i] >= 'a' && it[i] <= 'z') || (it[i] >= 'A' && it[i] <= 'Z'))) {
        return false
      }
    }
    console.log('check', it, 'true')
    return true
  }
  const GenQuickJumpTo = (a) => {
    return (
      <div>
        {a.map((it, idx) => {
          if (allABC(it))
            return (<DivJumpTo id={it} key={idx} content={it + ' '} jumpto={'#' + it} />)
          else
            return (<div key={idx} style={{ display: 'inline' }}>{it + ' '}</div>)
        })}
      </div>
    )
  }

  return (
    <div>
      <pre id="thanks">
        <div>感谢 mozilla w3c</div>
        <div>参考于 <a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a' target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a</a></div>
        <div>参考于 <a href="https://www.w3school.com.cn/html/html_quick.asp" target="_blank" rel="noreferrer">https://www.w3school.com.cn/html/html_quick.asp</a></div>
        <Typography variant='h6'>单标签 br hr img iput</Typography>
      </pre>
      <div></div>
      <hr />
      <Box>
        <Typography variant='h3' sx={{ textAlign: 'center', pb: 2 }}>索引</Typography>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <S column toTop alignLeft spacing={2}>
              <Card>
                <h2 style={{ display: 'inline' }} id='jumptoLayout'>布局相关</h2> <pre style={{ display: 'inline' }}>  布局相关的标签多为块级元素 本身不显示内容只是明确了布局</pre>
                {GenQuickJumpTo(['块', 'div'])}
                {GenQuickJumpTo(['行内元素', 'span'])}
                {GenQuickJumpTo(['添加其他网页', 'iframe'])}
                {GenQuickJumpTo(['导航', 'nav'])}
                {GenQuickJumpTo(['文章', 'article', '标题', 'header', '章节', 'section', '页脚', 'footer'])}
                {GenQuickJumpTo(['文章主体', 'main'])}
                {GenQuickJumpTo(['段落', 'p'])}
                {GenQuickJumpTo(['引用', 'q', 'blockquote'])}
              </Card>

              <Card>
                <h2 style={{ display: 'inline' }} id='jumptoInputOutput'>交互</h2> <pre style={{ display: 'inline' }}>  输入输出 带有键盘鼠标交互 带有数据交互</pre>
                {GenQuickJumpTo(['跳转', 'a'])}
                {GenQuickJumpTo(['图片', 'area', 'source'])}
                {GenQuickJumpTo(['表格', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'])}
                {GenQuickJumpTo(['表单', 'form'])}
                {GenQuickJumpTo(['input'])}
                {GenQuickJumpTo(['下拉菜单', 'select', 'optgroup', 'option'])}
                {GenQuickJumpTo(['文本编辑器', 'textgarea'])}
              </Card>

              <Card>
                <h2 style={{ display: 'inline' }} id='jumptoOther'>其他</h2> <pre style={{ display: 'inline' }}>  html的设置 或meta</pre>
                {GenQuickJumpTo(['base'])}
                {GenQuickJumpTo(['css外置', 'link'])}
                {GenQuickJumpTo(['css内置', 'style'])}
                {GenQuickJumpTo(['元数据', 'meta'])}
                {GenQuickJumpTo(['noscript'])}
              </Card>
            </S>
          </Grid>
          <Grid xs={6}>
            <S column toTop alignLeft spacing={2}>
              <Card>
                <h2 style={{ display: 'inline' }} id='jumptoShow'>显示相关</h2> <pre style={{ display: 'inline' }}>  基本显示类型 不影响布局</pre>
                {GenQuickJumpTo(['加粗', 'b', 'em', 'strong', '小写', 'small', 'sub', 'sup', '高亮', 'mark'])}
                {GenQuickJumpTo(['插入', 'ins', '删除', 's', 'del'])}
                {GenQuickJumpTo(['斜体', 'i'])}
                {GenQuickJumpTo(['文字显示顺序', 'bdo'])}
                {GenQuickJumpTo(['换行', 'br'])}
                {GenQuickJumpTo(['横线', 'hr'])}
                {GenQuickJumpTo(['引用', 'cite'])}
                {GenQuickJumpTo(['点击展开更多', 'details', 'summary'])}
                {GenQuickJumpTo(['图片', 'img', 'map', 'picture'])}
                {GenQuickJumpTo(['标签', 'label'])}
                {GenQuickJumpTo(['数字量化', 'meter', '进度条', 'progress'])}
                {GenQuickJumpTo(['外部', 'object'])}
                {GenQuickJumpTo(['列表', 'ol', 'ul', 'li'])}
                {GenQuickJumpTo(['预定义格式文本', 'pre'])}
                {GenQuickJumpTo(['变量名称', 'var', '计算机输出', 'samp', '用户操作结果', 'output'])}
                {GenQuickJumpTo(['占位符', 'slot'])}
                {GenQuickJumpTo(['时间', 'time'])}
                {GenQuickJumpTo(['网页标题', 'title'])}
                {GenQuickJumpTo(['下划线', 'u'])}
              </Card>

              <Card>
                <h2 style={{ display: 'inline' }} id='jumptoMedia'>多媒体</h2> <pre style={{ display: 'inline' }}>  h5的多媒体标签极大简化了音频视频的开发</pre>
                {GenQuickJumpTo(['音频', 'audio', 'source', 'track'])}
                {GenQuickJumpTo(['视频', 'video', 'source', 'track'])}
              </Card>
            </S>
          </Grid>
        </Grid>
      </Box>

      <br />
      <Divider></Divider>
      <br />

      <section>
        <h2>标签详情</h2>
        {GenDetail('a', 'anchor', '超链接',
          `<a href="https://example.com">Website</a>`,
          <>
            <Typography>href="#|#id|url"  跳转到顶部|跳转到指定id|跳转到url</Typography>
            <Typography>target="<b>_self</b> | _blank" 当前页面加载（默认）| 新页面加载</Typography>
          </>,
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" target="_blank" rel="noreferrer">点击查看效果</a>
        )}
        {GenDetail('abbr', 'abbreviation', '标记一个缩写',
          `<abbr title="abbreviation">abbr</abbr>`,
          <>
            <Typography>title="缩写的描述"</Typography>
          </>,
          <Typography>鼠标放置 查看<abbr title="abbreviation" target="_blank">abbr</abbr>的缩写</Typography>
        )}
        {GenDetail('area', '', '图片上定义一个可点击区域 点击后跳转 本身不显示任何图片',
          `<img src="https://www.w3school.com.cn/i/eg_planets.jpg" border="0" usemap="#abcmap"/>
					<map name="abcmap" id="abcmap">
					<area shape="circle" coords="180,139,14" href ="./images/A.png" target ="_blank" alt="A" />
					<area shape="circle" coords="129,161,10" href ="./images/B.png" target ="_blank" alt="B" />
					<area shape="rect" coords="0,0,110,260" href ="./images/C.png"  target ="_blank" alt="C" />
					</map>`,
          <>
            <Typography>shape="circle|rect" 点击区域圆形|矩形</Typography>
            <Typography>cords="x,y,m,n" 如果shape="circle"则xy表示坐标m表示半径。 如果shape="rect"则xy表示左上角mn表示右下角 </Typography>
          </>,
          <>
            <img src="./images/blank.png" border="0" usemap="#abcmap" alt="ABC" />
            <map name="abcmap" id="abcmap">
              <area shape="circle" coords="18,18,18" href="./images/A.png" target="_blank" alt="Venus" />
              <area shape="circle" coords="16,209,18" href="./images/B.png" target="_blank" alt="Mercury" />
              <area shape="rect" coords="112,91,140,121" href="./images/C.png" target="_blank" alt="Sun" />
            </map>
          </>
        )}
        {GenDetail('article', '', '文章 独立结构。 内容包含h section footer',
          `<article>
					<header></header>
					<section></section>
					<footer></footer>
					</article>`,
          <></>,
          <></>)}
        {GenDetail('audio', '', '音频',
          `<audio src="media/06.ogg" controls></audio>
          使用内嵌的元素提供不同的播放源。浏览器会使用第一个它支持的播放源
					<audio controls>
					<source src="media/06.ogg">
					<source src="media/06.mp3">
					</audio>
          `,
          <>
            <Typography>autoplay="autoplay" 自动播放音频</Typography>
            <Typography>controls="controls" 显示控制面板</Typography>
            <Typography>preload="none|auto|meta" 页面加载后是否预缓冲 无|有|只缓冲元数据</Typography>
          </>,
          <><audio controls src="media/06.ogg"></audio></>)}
        {GenDetail('b', '', '特别强调 粗体显示',
          ``, <><Typography></Typography></>, <><b>b</b></>)}
        {GenDetail('base', '', '指定文档中所有相对URL的根。 如果指定了多个 base，只会使用第一个 href 和 target 值，其余都会被忽略。',
          `<base target="_top" href="http://www.example.com/">`, <><Typography></Typography></>, <></>)}
        {GenDetail('bdo', 'Bi-Directional Override', '改写了文本的方向性',
          `<bdo dir="rtl">username</bdo>`,
          <><Typography>dir="auto|ltr|rlt"  auto|左至右|右至左</Typography></>,
          <><bdo dir="rtl">username</bdo></>)}

        {GenDetail('blockquote', '', '块级引用元素，通常在渲染时 这部分的内容会有一定的缩进',
          `<blockquote cite="https://www.huxley.net/bnw/four.html">
					<p>lorem</p>
					</blockquote>`,
          <><Typography>cite="URL" 引用来源。没有浏览器能够显示</Typography></>,
          <><blockquote cite="https://www.huxley.net/bnw/four.html">Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</blockquote></>)}

        {GenDetail('br', 'barter rabbet', '换行 没有</br> xhtml中写作<br/>',
          ``, <><Typography></Typography></>, <></>)}

        {GenDetail('cite', '', '展示为引用 实际可能是以斜体展示 没有其他实际功能。 通常配合a进行超链接',
          `<cite>
					<a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a>
					</cite>`,
          <><Typography></Typography></>,
          <><figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption></>)}

        {GenDetail('del', '', '表示一段被删除的内容',
          `<del>This text has been deleted</del>`,
          <><Typography>cite="URL" 资源解释作出修改的原因</Typography></>,
          <><p><del>This text has been deleted</del>, here is the rest of the paragraph.</p></>)}

        {GenDetail('details', '', '总结与详细信息展示。 如果没有summary 系统使用默认文字（中文是“详情”）。 展开后显示details内全部内容',
          `<details open>
					<summary>点击展开更多&lt;/summary>
					<spam>更多的内容&lt;/spam>
					</details>`,
          <><Typography>open <b>定义</b>后 自动展开</Typography></>,
          <>
            <details>
              <summary>点击展开更多</summary>
              <p>更多的内容</p>
            </details>
          </>)}
        {GenDetail('div', 'division', '块容器',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('em', 'emphasis', '着重强调',
          `<em>abc</em>`, <><Typography></Typography></>, <></>)}

        {GenDetail('footer', '', '页脚。通常包含 页脚 版权 文献',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('form', '', '提交后 会提交form里面所有带name的 for-id结构是为了标签被点击时与之关联的表单元素就会获得焦点',
          ``, <><Typography></Typography></>, <></>)}

        {GenDetail('header', '', '展示介绍性内容 通常用于包含周围部分的标题（h1 至 h6 元素）',
          `<header>
          <h1>Beagles</h1>
          <time>15.11.2020</time>
					</header>`,
          <><Typography></Typography></>,
          <>
            <header>
              <h1>Beagles</h1>
              <time>08.12.2014</time>
            </header>
          </>)}
        {GenDetail('hr', '', '横线 水平线 没有</hr> xhtml中写作<hr/> 表示段落元素之间的主题转换，如果想画一条横线 使用css',
          `<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>
					<hr>
					<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>`, <><Typography></Typography></>, <></>)}

        {GenDetail('i', 'italic', '斜体，表现因某些原因需要区分普通文本',
          `<i></i>`, <><Typography></Typography></>, <></>)}

        {GenDetail('iframe', 'inline frame', '将另一个 HTML 页面嵌入到当前页面中',
          `<iframe
						src="https://example.org"
						title="iframe Example 1"
						width="400" height="300">
          </iframe>`, <><Typography>参数多 参考链接</Typography></>,
          <>
            <iframe
              src="https://example.org"
              title="iframe Example 1"
              width="400" height="300">
            </iframe>
          </>)}

        {GenDetail('img', 'image', '图片',
          `<img src="./images/A.png" alt="Elephant at sunset">`,
          <>
            <Typography>src 图片路径</Typography>
            <Typography>alt 文本描述 不显示</Typography>
            <Typography>height width</Typography>
          </>, <></>)}

        {GenDetail('input', '', '交互式控件',
          `<input type="text" name="name">name</input>`,
          <>
            <table border="1" cellpadding="10">
              <tr>
                <th align="middle">type</th>
                <th align="middle">描述</th>
                <th align="middle">运行效果</th>
              </tr>
              <tr>
                <td align="middle" colspan="3">按钮相关</td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/button">button</a></td>
                <td align="left">没有默认行为的按钮，显示value属性的值，默认为空。</td>
                <td align="middle"><input type="button" value="aButton" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/reset">reset</a></td>
                <td align="left">此按钮将表单的所有内容重置为默认值。<b>不推荐</b></td>
                <td align="middle"><input type="reset" value="重置" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/submit">submit</a></td>
                <td align="left">用于提交表单的按钮</td>
                <td align="middle"><input type="submit" value="提交" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/image">image</a></td>
                <td align="left">带图像的 submit 按钮。图像源src，如果src缺失 alt属性就会显示</td>
                <td align="middle"><input type="image" alt="这是一个图像按钮" /></td>
              </tr>
              <tr>
                <td align="middle" colspan="3">时间</td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/date">date</a></td>
                <td align="left">年月日</td>
                <td align="middle"><input type="date" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/datetime-local">datetime-local</a></td>
                <td align="left">日期和时间</td>
                <td align="middle"><input type="datetime-local" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/time">time</a></td>
                <td align="left">时间</td>
                <td align="middle"><input type="time" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/week">week</a></td>
                <td align="left">年周</td>
                <td align="middle"><input type="week" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/month">month</a></td>
                <td align="left">年月</td>
                <td align="middle"><input type="month" /></td>
              </tr>
              <tr>
                <td align="middle" colspan="3">键盘输入</td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email">email</a></td>
                <td align="left">email</td>
                <td align="middle"><input type="email" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/number">number</a></td>
                <td align="left">number</td>
                <td align="middle"><input type="number" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/password">password</a></td>
                <td align="left">password</td>
                <td align="middle"><input type="password" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/search">search</a></td>
                <td align="left">search</td>
                <td align="middle"><input type="search" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/tel">tel</a></td>
                <td align="left">telephone</td>
                <td align="middle"><input type="tel" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/text">text</a></td>
                <td align="left">单行text， 多行输入使用<b>textarea</b></td>
                <td align="middle"><input type="text" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/url">url</a></td>
                <td align="left">url</td>
                <td align="middle"><input type="url" /></td>
              </tr>
              <tr>
                <td align="middle" colspan="3">鼠标点选</td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/range">range</a></td>
                <td align="left"></td>
                <td align="middle"><input type="range" min="10" max="99" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/checkbox">checkbox</a></td>
                <td align="left">复选框</td>
                <td align="middle"><label><input type="checkbox" />abc</label></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/color">color</a></td>
                <td align="left">color</td>
                <td align="middle"><input type="color" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file">file</a></td>
                <td align="left">选择文件</td>
                <td align="middle"><input type="file" accept=".doc,.docx" /></td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/radio">radio</a></td>
                <td align="left"></td>
                <td align="middle"><label><input type="radio" />abc</label></td>
              </tr>
              <tr>
                <td align="middle" colspan="3">其他</td>
              </tr>
              <tr>
                <td align="left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/hidden">hidden</a></td>
                <td align="left">显示的控件，其值仍会提交到服务器。通常是安全令牌 值通过代码可见</td>
                <td align="middle"><input type="hidden" value="asdf" /></td>
              </tr>
            </table>
          </>, <></>)}
        {GenDetail('ins', 'Inserted', '定义已经被插入文档中的文本',
          `<ins>
					<p>A wizard is never late ...</p>
					</ins>`, <><Typography>cite="http://developer.mozilla.org" 解释了文本被插入或修改的原因。<b>未被主流浏览器支持</b></Typography><Typography>datetime 修改发生的时间和日期</Typography></>,
          <>
            <ins>
              <p>A wizard is never late ...</p>
            </ins>
          </>)}
        {GenDetail('label', '', '标签，用于元素的说明',
          `<label>
					<input type="checkbox" name="peas"/>
					Do you like peas?
					</label>`, <><Typography>for 关联input的id。 可以将inpute直接放在label里 自动创建for-id</Typography></>, <></>)}

        {GenDetail('link', '', '规定当前文档与外部资源的关系，常用于链接css',
          `<link href="/styles/index.css" rel="stylesheet">`, <><Typography></Typography></>, <></>)}

        {GenDetail('main', '', '文档的主体部分，适用于内容直达 或 阅读模式',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('map', '', '定义图像映射 与area一起使用',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('mark', '', '高亮',
          `<mark>高亮</mark>`, <><Typography></Typography></>, <><mark>高亮</mark></>)}
        {GenDetail('meta', '', '元数据 描述数据的数据',
          `<meta name="keywords" content="HTML,ASP,PHP,SQL">`,
          <>
            <Typography>charset="utf-8"</Typography>
            <Typography>name="keywords" content="HTML,ASP,PHP,SQL" key-value类型数据，name可选参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name">链接</a></Typography>
            <Typography>http-equiv="" 预定义指令 参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv">链接</a></Typography>
          </>,
          <></>)}
        {GenDetail('meter', '', '显示标记量',
          `<meter min="200" max="500" value="350">350 degrees</meter>`,
          <>
            <Typography>min max value 最小值默认0 最大值默认1 当前值</Typography>
            <Typography>low  value如果低于此值 会有特殊效果显示</Typography>
            <Typography>high value如果高于此值 会有特殊效果显示</Typography>
            <Typography>optimum 最佳值 无实际效果</Typography>
          </>,
          <>
            <meter min="1" low="20" high="80" max="100" value="10" optimum="50">80 precent</meter></>)}
        {GenDetail('nav', '', '导航',
          `
          <nav>
					<ol>
					<li><a href="#">Bikes</a></li>
					<li><a href="#">BMX</a></li>
					<li>Jump Bike 3000</li>
					</ol>
					</nav>
          `,
          <><Typography></Typography></>,
          <>
            <nav>
              <ol>
                <li>Bikes</li>
                <li>BMX</li>
                <li>Jump Bike 3000</li>
              </ol>
            </nav>
          </>)}
        {GenDetail('noscript', '', '脚本不被支持时执行',
          `<noscript>
					<p>浏览器不支持脚本</p>
					</noscript>`, <><Typography></Typography></>, <></>)}
        {GenDetail('object', '', '引入一个外部在源',
          `<object type="image/png"
					data="./images/A.png"
					width="60" height="60">
					</object>`,
          <>
            <Typography>type 参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types">链接</a></Typography>
            <Typography>data="URL" 资源地址</Typography>
            <Typography>width height</Typography>
          </>,
          <>
            <object type="image/png"
              data="./images/A.png"
              width="60" height="60">
            </object></>)}
        {GenDetail('ol', 'ordered list', '有序列表',
          ``,
          <>
            <Typography>reversed 定义使用</Typography>
            <Typography>start="1" 编号的起始值</Typography>
            <Typography>type="a|A|i|I|1"</Typography>
          </>, <></>)}
        {GenDetail('optgroup', 'option group', '为select创建分组',
          `<select>
					<optgroup label="ABC">
					<option>A</option>
					<option>B</option>
					</optgroup>
					<optgroup label="123">
					<option>1</option>
					<option>2</option>
					</optgroup>
					</select>`,
          <>
            <Typography>disables 定义使用， 定义后不能选择这个选项组的任何选项，通常置灰</Typography>
            <Typography>label 选项组的名字</Typography>
          </>,
          <>
            <select>
              <optgroup label="Group 1">
                <option>Option 1.1</option>
              </optgroup>
              <optgroup label="Group 2">
                <option>Option 2.1</option>
                <option>Option 2.2</option>
              </optgroup>
              <optgroup label="Group 3" disabled>
                <option>Option 3.1</option>
                <option>Option 3.2</option>
                <option>Option 3.3</option>
              </optgroup>
            </select>
          </>)}
        {GenDetail('option', '', '用于在select optgroup datalist中定义选项',
          `<select>
					<option value="dog">DOG</option>
					<option value="cat">CAT</option>
					</select>`,
          <>
            <Typography>disables 定义使用， 定义后不能选择这个选项，通常置灰</Typography>
            <Typography>selected 定义使用， 定义后默认被选中</Typography>
            <Typography>value 该选项被选中时提交给表单的值，如果没有定义 该值通常就是元素的内容</Typography>
          </>, <></>)}
        {GenDetail('output', '', '表示计算或用户操作的结果',
          `<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
					<input type="number" name="b" value="50" /> +
					<input type="number" name="a" value="10" /> =
					<output name="result"></output>
					</form>`,
          <><Typography></Typography></>,
          <>
            <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
              <input type="number" name="b" value="50" /> + <input type="number" name="a" value="10" /> = <output name="result"></output>
            </form>
          </>)}
        {GenDetail('p', 'paragraph', '段落',
          `<p>这是第一个段落。这是第一个段落。这是第一个段落。这是第一个段落。</p>
					<p>这是第二个段落。这是第二个段落。这是第二个段落。这是第二个段落。</p>`,
          <><Typography></Typography></>,
          <>
            <p>这是第一个段落。这是第一个段落。 这是第一个段落。这是第一个段落。</p>
            <p>这是第二个段落。这是第二个段落。 这是第二个段落。这是第二个段落。</p>
          </>)}
        {GenDetail('picture', '', (<div><div>为不同的场景 显示最匹配图片，包含多个source和一个img</div><div>media媒体条件</div> <div>type类型条件</div></div>),
          `<picture>
					<source srcset="./images/A.png" media="(min-width:600px)"/>
					<source srcset="./images/C.png" type="image/svg+xml"/>
					<img src="./images/B.png" alt="B"/>
					</picture>`,
          <><Typography></Typography></>,
          <>
            <picture>
              <source srcset="./images/A.png" media="(min-width:600px)" />
              <source srcset="./images/C.png" type="image/svg+xml" />
              <img src="./images/B.png" alt="B" />
            </picture>
          </>)}
        {GenDetail('pre', '', '预定义格式文本',
          `<pre>
					text
					</pre>`,
          <><Typography></Typography></>,
          <>
            <pre>
              \  ^__^
              \  (oo)\_______
              \  (__)\       )\/\
              \      ||----w |
              \      ||     ||
            </pre>
          </>)}
        {GenDetail('progress', '', '进度条',
          `<progress max="100" value="70"></progress>`,
          <>
            <Typography>max 最大进度</Typography>
            <Typography>value 当前进度</Typography>
          </>,
          <>
            <progress max="100" value="70"></progress>
          </>)}
        {GenDetail('q', 'quotation', (<div>引用 短的行内引用 自动添加引号。 长引用使用<DivJumpToBlank jumpto='#blockquote'>blockquote</DivJumpToBlank></div>),
          `<p>Everytime Kenny is killed, Stan will announce
					<q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">Oh my God, you/they killed Kenny!</q>.
					</p>`,
          <><Typography>cite="URL" 引用来源。没有浏览器能够显示</Typography></>,
          <>
            <p>Everytime Kenny is killed, Stan will announce
              <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">Oh my God, you/they killed Kenny!</q>.
            </p>
          </>)}
        {GenDetail('s', 'strikethrough', '删除渲染文本表示不再相关或不再准确。 文本编辑提倡使用del',
          `<s>Today's Special: Salmon</s> SOLD OUT
					<span style="text-decoration:line-through;">Today's Special: Salmon</span> SOLD OUT`,
          <><Typography></Typography></>,
          <>
            <s>Today's Special: Salmon</s> SOLD OUT
            <span style={{ textDecoration: "line-through;" }}>Today's Special: Salmon</span> SOLD OUT
          </>)}
        {GenDetail('samp', 'sample', '计算机输出',
          `<p>Regular text. <samp>This is sample text.</samp> Regular text.</p>`,
          <><Typography></Typography></>,
          <>
            <p>Regular text. <samp>This is sample text.</samp> Regular text.</p>
          </>)}
        {GenDetail('section', '', (<div><div>独立章节</div><div>当该元素的内容可以作为一个独立的作品在多个媒体上发表，使用 &lt;article&gt; 是一个更好的选择。</div><div>当内容包含代表与主要内容一同展示的有用的切入信息，但不是直接的一部分（如相关链接，作者简历等），请使用 &lt;main&gt;。</div><div>当内容代表文档中的主要内容区域，请使用 &lt;main&gt;。</div><div>将该元素作为一个样式包装时，请使用 &lt;div&gt;。一般来说，&lt;section&gt; 应该出现在文档大纲中。</div></div>),
          `<section>
					<h2>Introduction</h2>
					<p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
					</section>`,
          <><Typography></Typography></>,
          <>
            <section>
              <h2>Introduction</h2>
              <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
            </section>
          </>)}
        {GenDetail('select', '', '下拉菜单',
          `<select name="pets" id="pet-select">
					<option value="">--Please choose an option--</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					</select>`,
          <>
            <Typography>autocomplete 定义使用</Typography>
            <Typography>autofocus 定义使用 一个文档中只有一个对象可以有这个属性</Typography>
            <Typography>disabled 定义使用</Typography>
            <Typography>form="id" 关联form，如果未设置 则自动关联外层的form</Typography>
            <Typography>multiple 定义使用 多选</Typography>
            <Typography>name="" 控件名字</Typography>
            <Typography>required 定义使用</Typography>
            <Typography>size="10" 可见行数 在定义了multiple后才有效</Typography>
          </>,
          <>
            <select name="pets" id="pet-select">
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </>)}
        {GenDetail('slot', '', '占位符',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('small', '', '使用小号字体',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('source', '', '为 picture audio video 提供媒体资源',
          ``,
          <>
            <Typography>src="URL" 源地址</Typography>
            <Typography>type="video/ogg" 参考<a href="https://tools.ietf.org/html/rfc4281">链接</a></Typography>
          </>,
          <>展示<a href="#picture">链接</a></>)}

        {GenDetail('span', '', (<div>通用容器 行内容。 块内容使用<DivJumpTo content='div' /></div>),
          `<span>
						a span
					</span>`,
          <><Typography></Typography></>,
          <><span>a span</span></>)}
        {GenDetail('strong', '', '粗体 十分重要',
          ``, <><Typography></Typography></>, <><strong>strong</strong></>)}
        {GenDetail('style', '', '内嵌css 可多次定义',
          `<style media="all and (max-width: 500px)">
          p {
            color: white;
          }
        </style>`,
          <>
            <Typography>style="text/css" 默认</Typography>
            <Typography>media="all" 默认 使用条件</Typography>
          </>,
          <></>)}
        {GenDetail('sub', 'subscripted', (<div>文本 更低更小， 更高更小使用<DivJumpTo content='sup' /></div>),
          `<p>The chemical formula of water: H<sub>2</sub>O</p>`,
          <><Typography></Typography></>,
          <>
            <p>The chemical formula of water: H<sub>2</sub>O</p>
          </>)}

        {GenDetail('summary', '', (<div><DivJumpTo content='details' />的内容摘要</div>),
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('sup', 'superscripted', (<div>文本 更高更小， 更低更小使用<DivJumpTo content='sub' /></div>),
          `<p>This text is <sup>superscripted</sup></p>`,
          <><Typography></Typography></>,
          <>
            <p>This text is <sup>superscripted</sup></p>
          </>)}
        {GenDetail('table', '', (
          <div>按照这个顺序：
            <ol>
              <li>一个可选的 &lt;caption&gt; 元素</li>
              <li>零个或多个的 &lt;colgroup&gt; 元素</li>
              <li>一个可选的 &lt;thead&gt; 元素</li>
              <li>下列任意一个：
                <ol>
                  <li>零个或多个 &lt;tbody&gt;</li>
                  <li>零个或多个 &lt;tr&gt;</li>
                </ol>
              </li>
              <li>一个可选的 &lt;tfoot&gt; 元素</li>
            </ol>
          </div>
        ),
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('tbody', 'table body', (<div><div>table的body部分</div><div>如果table中含thead 那么tbody必须紧随它</div><div>如果使用了tbody 那么tr必须在tbody内</div></div>),
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('td', 'table data', 'table的单元格数据',
          ``,
          <>
            <Typography>colspan="1" 列跨度</Typography>
            <Typography>rowspan="1" 行跨度</Typography>
          </>, <></>)}
        {GenDetail('textarea', '', '纯文本编辑器',
          `<textarea name="story" id="story" cols="30" rows="10"></textarea>`,
          <>
            <Typography>autocomplete="off"</Typography>
            <Typography>autofocus 定义使用</Typography>
            <Typography>cols="30" rows="10" 30列10行</Typography>
            <Typography>disabled 定义使用</Typography>
            <Typography>form 指定表单，默认上级form</Typography>
            <Typography>minlength="10" maxlength="20" 最小最大长度</Typography>
            <Typography>placeholder="提示占位" 占位</Typography>
            <Typography>readonly 定义使用</Typography>
            <Typography>required 定义使用</Typography>
            <Typography>spellcheck="true" 拼写检查</Typography>
            <Typography>wrap="hard|soft" 自动换行|不自动</Typography>
          </>,
          <>
            <textarea name="story" id="story" cols="30" rows="10"></textarea>
          </>)}
        {GenDetail('tfoot', '', 'table的汇总行',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('th', 'table header', 'table的表头',
          ``,
          <>
            <Typography>rowspan="1" colspan="1" 行列跨度</Typography>
            <Typography>headers="" 与th的id对应</Typography>
            <Typography>scope="row|col|rowgroup|colgroup|auto" 关联一行所有单元格|关联一列所有单元格</Typography>
          </>, <></>)}
        {GenDetail('thead', '', 'table的表头 使用thead则必须成套使用tbody tfoot，不允许tr同级',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('time', '', '显示 时间 日期， 方便搜索引擎 没有任何效果',
          `<p>This article was created on <time>2011-01-28</time>.</p>`,
          <><Typography></Typography></>,
          <>This article was created on <time>2011-01-28</time>.</>)}
        {GenDetail('title', '', '网页标题 写在head中 方便搜索引擎',
          `<title>Amazing！</title>`, <><Typography></Typography></>, <></>)}
        {GenDetail('tr', 'table row', '',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('track', '', '媒体元素 audio和video的子元素，允许指定时序文本字幕',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('u', 'underline', '下划线',
          `<p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>`,
          <><Typography></Typography></>,
          <>
            <p>This paragraph includes a <u class="spelling">wrnogly</u> spelled word.</p>
          </>)}
        {GenDetail('ul', 'unordered list', '无序列表',
          ``, <><Typography></Typography></>, <></>)}
        {GenDetail('var', '', '变量名称 通常斜体显示',
          `<p> A simple equation: <var>x</var> = <var>y</var> + 2 </p>`,
          <><Typography></Typography></>,
          <>
            <p> A simple equation: <var>x</var> = <var>y</var> + 2 </p>
          </>)}
        {GenDetail('video', '', '视频',
          `<video controls width="250">
					<source src="./images/A.png" type="video/webm">
					<source src="./images/B.png" type="video/mp4">
					Download the
					<a href="./images/A.png">WEBM</a>
					or
					<a href="./images/B.png">MP4</a>video.
					</video>`,
          <>
            <Typography>autoplay 定义使用 视频会尽快自动模仿 不会等全部数据加载完</Typography>
            <Typography>controls 定义使用 显示控制面板</Typography>
            <Typography>crossorigin="anonymous|use-credentials" 匿名访问资源|使用凭证访问资源</Typography>
            <Typography>height="100" width="100"</Typography>
            <Typography>loop="true"</Typography>
            <Typography>mute="true" 视频默认是否静音</Typography>
            <Typography>playsinline="true" 内联播放 即在元素的播放区域内</Typography>
            <Typography>poster="URL" 视频的海报 如果没有则使用第一帧</Typography>
            <Typography>preload="none|auto|metadata" 页面加载后是否预缓冲 无|有|只缓冲元数据</Typography>
            <Typography>src="URL"</Typography>
          </>,
          <></>)}
      </section>
      <hr />

      <section>
        <h2>demo</h2>
        <section id="section-demo">
          <B id="section-demo-table">
            <S row toTop spacing={4}>
              <B w50>
                <pre>
                  {`
<table border="1" cellpadding="10" bgcolor="grey">
  <caption></caption>
  <tr>
    <th align="left">列名1 自动加黑加粗</th>
    <th align="right">列名2</th>
  </tr>
  <tr>
    <td align='left' rowspan="2" bgcolor="yellow">row 1, cell 1</td>
    <td align="right">row 1, cell 2</td>
  </tr>
  <tr>
    <td align="right">row 2, cell 2</td>
  </tr>
</table>`}
                </pre>
              </B>
              <table border="1" cellpadding="10" bgcolor="grey">
                <caption></caption>
                <tr>
                  <th align="left">列名1 自动加黑加粗</th>
                  <th align="right">列名2</th>
                </tr>
                <tr>
                  <td align='left' rowspan="2" bgcolor="yellow">row 1, cell 1</td>
                  <td align="right">row 1, cell 2</td>
                </tr>
                <tr>
                  <td align="right">row 2, cell 2</td>
                </tr>
              </table>
            </S>
          </B>
          <B id="section-demo-form" pt4>
            <Typography>form表单用于收集用户输入, 可应用input 复选框 单选框 提交按钮 参考 <Link href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input</Link></Typography>
            <Typography>提交后 <strong>会提交form里面所有带name的</strong> 如下的例子会发送 {'{'}name, gender, cars, message{'}'}</Typography>
            <S row toTop spacing={4}>
              <B w50>
                <pre>
                  {`
<form action="http://127.0.0.1:3000" method="POST" target="_top" autocomplete="on">
  <fieldset>
    <legend>这是一个form</legend>
    <input type="text" name="name" />name
    <br />
    <input type="text" />not send this
    <br />
    <input type="number" name="quantity" min="1" max="5" />input number
    <br />
    <legend>Choose your gender</legend>
    <label><input type="radio" name="gender" value="1" checked />male</label>
    <label><input type="radio" name="gender" value="2" />female</label>
    <br />
    <legend>choose your vehicle</legend>
    <lable><input type="checkbox" name="vehicle" value="bike" />i have a bike</lable>
    <lable><input type="checkbox" name="vehicle" value="car" />i have a car</lable>
    <br />
    <select name="cars">
      <option value="volvo" selected>volvo</option>
      <option value="saab">saab</option>
    </select>
    <br />
    <textarea name="message" id="msg" cols="30" rows="10"> the cat was playing in the garden.</textarea>
    <br />
    <input type="submit" value="提交" />
    <input type="submit" value="提交另一个api" formaction="http://127.0.0.1:3000/api2" method="GET" />
  </fieldset>
</form>`}
                </pre>
              </B>
              <form action="http://127.0.0.1:3000" method="POST" target="_top" autocomplete="on">
                <fieldset>
                  <legend>这是一个form</legend>
                  <input type="text" name="name" />name
                  <br />
                  <input type="text" />not send this
                  <br />
                  <input type="number" name="quantity" min="1" max="5" />input number
                  <br />
                  <legend>Choose your gender</legend>
                  <label><input type="radio" name="gender" value="1" checked />male</label>
                  <label><input type="radio" name="gender" value="2" />female</label>
                  <br />
                  <legend>choose your vehicle</legend>
                  <lable><input type="checkbox" name="vehicle" value="bike" />i have a bike</lable>
                  <lable><input type="checkbox" name="vehicle" value="car" />i have a car</lable>
                  <br />
                  <select name="cars">
                    <option value="volvo" selected>volvo</option>
                    <option value="saab">saab</option>
                  </select>
                  <br />
                  <textarea name="message" id="msg" cols="30" rows="10"> the cat was playing in the garden.</textarea>
                  <br />
                  <input type="submit" value="提交" />
                  <input type="submit" value="提交另一个api" formaction="http://127.0.0.1:3000/api2" method="GET" />
                </fieldset>
              </form>
            </S>
          </B>
        </section>
      </section>
    </div >
  )
}

export default function Html () {
  const navigate = useNavigate()
  return (
    <TemplateTutor
      sider={GenNav()}
      main={GenArticle()}
    />
  )
}
