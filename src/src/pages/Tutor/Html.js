import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateTutor from './Template'
import Logo from '@/components/Logo'
import {
  Box, Button, Typography, Grid, Stack, Divider, List, ListItem, ListItemText, Card,
} from '@mui/material'

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
    <div
      onClick={() => {
        ScrollTo(props.jumpto || props.content)
      }}
      style={{ display: 'inline' }}
    >
      {props.content}
    </div>
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
        ))
        }
      </List >

    </div >
  )
}

function GenDetail (name, nameFull, desc, code, param, show) {
  return (
    <div className='label'>
      <div id={name}></div>
      <div className='label-name' ><a href={'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/' + name} target="_black">{name + (nameFull ? ` - ${nameFull}` : '')}</a></div>
      {/* {
        typeof desc === 'string'? <div>{desc}</div> : <div>{desc}</div>
      } */}
      <div className='label-desc' >{desc}</div>
      <div className='label-code' >{code}</div>
      <div className='label-param'>{param}</div>
      <div className='label-show' >{show}</div>
    </div>
  )
}

function GenArticle () {

  const GenQuickJumpTo = (a) => {
    return (
      <div>
        {a.map((it, idx) => {
          let ret = null
          if (it >= 'a' && it <= 'z')
            ret = (<DivJumpTo key={idx} content={it + ' '} jumpto={it} />)
          else
            ret = (<div key={idx} style={{ display: 'inline' }}>{it + ' '}</div>)
          return ret
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
      </pre>
      <div></div>
      <hr />
      <section>
        <h2 style={{ display: 'inline' }} id='jumptoLayout'>布局相关</h2> <pre style={{ display: 'inline' }}>  布局相关的标签多为块级元素 本身不显示内容只是明确了布局</pre>
        {GenQuickJumpTo(['块', 'div'])}
        {GenQuickJumpTo(['行内元素', 'span'])}
        {GenQuickJumpTo(['添加其他网页', 'iframe'])}
        {GenQuickJumpTo(['导航', 'nav'])}
        {GenQuickJumpTo(['文章', 'article', '标题', 'header', '章节', 'section', '页脚', 'footer'])}
        {GenQuickJumpTo(['文章主体', 'main'])}
        {GenQuickJumpTo(['段落', 'p'])}
        {GenQuickJumpTo(['引用', 'q', 'blockquote'])}
      </section>
      <hr />

      <section>
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
      </section>
      <hr />

      <section>
        <h2 style={{ display: 'inline' }} id='jumptoInputOutput'>交互</h2> <pre style={{ display: 'inline' }}>  输入输出 带有键盘鼠标交互 带有数据交互</pre>
        {GenQuickJumpTo(['跳转', 'a'])}
        {GenQuickJumpTo(['图片', 'area', 'source'])}
        {GenQuickJumpTo(['表格', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'])}
        {GenQuickJumpTo(['表单', 'form'])}
        {GenQuickJumpTo(['input'])}
        {GenQuickJumpTo(['下拉菜单', 'select', 'optgroup', 'option'])}
        {GenQuickJumpTo(['文本编辑器', 'textgarea'])}
      </section>
      <hr />

      <section>
        <h2 style={{ display: 'inline' }} id='jumptoMedia'>多媒体</h2> <pre style={{ display: 'inline' }}>  h5的多媒体标签极大简化了音频视频的开发</pre>
        {GenQuickJumpTo(['音频', 'audio', 'source', 'track'])}
        {GenQuickJumpTo(['视频', 'video', 'source', 'track'])}
      </section>
      <hr />

      <section>
        <h2 style={{ display: 'inline' }} id='jumptoOther'>其他</h2> <pre style={{ display: 'inline' }}>  html的设置 或meta</pre>
        {GenQuickJumpTo(['base'])}
        {GenQuickJumpTo(['css外置', 'link'])}
        {GenQuickJumpTo(['css内置', 'style'])}
        {GenQuickJumpTo(['元数据', 'meta'])}
        {GenQuickJumpTo(['noscript'])}
      </section>
      <hr />

      <section>
        <h2>标签详情</h2>
        {GenDetail('a', 'anchor', '超链接',
          (<div>&lt;a href="https://example.com"&gt;Website&lt;/a&gt;</div>),
          [(<div key={1}>href="#|#id|url"  跳转到顶部|跳转到指定id|跳转到url</div>), (<div key={2}>target="<b>_self</b> | _blank" 当前页面加载（默认）| 新页面加载</div>)],
          (<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" target="_blank" rel="noreferrer">点击查看效果</a></div>)
        )}
        {GenDetail('abbr', 'abbreviation', '标记一个缩写', 'code', 'param', 'show')}
        {GenDetail('area', '', '图片上定义一个可点击区域 点击后跳转 本身不显示任何图片', 'code', 'param', 'show')}
        {GenDetail('article', '', '文章 独立结构。 内容包含h section footer', 'code', 'param', 'show')}
        {GenDetail('audio', '', '音频', 'code', 'param', 'show')}
        {GenDetail('b', '', '特别强调 粗体显示', 'code', 'param', 'show')}
        {GenDetail('base', '', '指定文档中所有相对URL的根。 如果指定了多个 base，只会使用第一个 href 和 target 值，其余都会被忽略。', 'code', 'param', 'show')}
        {GenDetail('bdo', 'Bi-Directional Override', '改写了文本的方向性', 'code', 'param', 'show')}
        {GenDetail('blockquote', '', '块级引用元素，通常在渲染时 这部分的内容会有一定的缩进', 'code', 'param', 'show')}
        {GenDetail('br', 'barter rabbet', '换行 没有</br> xhtml中写作<br/>', 'code', 'param', 'show')}
        {GenDetail('cite', '', '展示为引用 实际可能是以斜体展示 没有其他实际功能。 通常配合a进行超链接', 'code', 'param', 'show')}
        {GenDetail('del', '', '表示一段被删除的内容', 'code', 'param', 'show')}
        {GenDetail('details', '', '总结与详细信息展示。 如果没有summary 系统使用默认文字（中文是“详情”）。 展开后显示details内全部内容', 'code', 'param', 'show')}
        {GenDetail('div', 'division', '块容器', 'code', 'param', 'show')}
        {GenDetail('em', 'emphasis', '着重强调', 'code', 'param', 'show')}
        {GenDetail('footer', '', '页脚。通常包含 页脚 版权 文献', 'code', 'param', 'show')}
        {GenDetail('form', '', '提交后 会提交form里面所有带name的', 'code', 'param', 'show')}
        {GenDetail('header', '', '展示介绍性内容 通常用于包含周围部分的标题（h1 至 h6 元素）', 'code', 'param', 'show')}
        {GenDetail('hr', '', '横线 水平线 没有</hr> xhtml中写作<hr/> 表示段落元素之间的主题转换，如果想画一条横线 使用css', 'code', 'param', 'show')}
        {GenDetail('i', 'italic', '斜体，表现因某些原因需要区分普通文本', 'code', 'param', 'show')}
        {GenDetail('iframe', 'inline frame', '将另一个 HTML 页面嵌入到当前页面中', 'code', 'param', 'show')}
        {GenDetail('img', 'image', '图片', 'code', 'param', 'show')}
        {GenDetail('input', '', '交互式控件', 'code', 'param', 'show')}
        {GenDetail('ins', 'Inserted', '定义已经被插入文档中的文本', 'code', 'param', 'show')}
        {GenDetail('label', '', '标签，用于元素的说明', 'code', 'param', 'show')}
        {GenDetail('link', '', '规定当前文档与外部资源的关系，常用于链接css', 'code', 'param', 'show')}
        {GenDetail('main', '', '文档的主体部分，适用于内容直达 或 阅读模式', 'code', 'param', 'show')}
        {GenDetail('map', '', '定义图像映射 与area一起使用', 'code', 'param', 'show')}
        {GenDetail('mark', '', '高亮', 'code', 'param', 'show')}
        {GenDetail('meta', '', '元数据 关于数据的数据', 'code', 'param', 'show')}
        {GenDetail('meter', '', '显示标记量', 'code', 'param', 'show')}
        {GenDetail('nav', '', '导航', 'code', 'param', 'show')}
        {GenDetail('noscript', '', '脚本不被支持时执行', 'code', 'param', 'show')}
        {GenDetail('object', '', '引入一个外部在源', 'code', 'param', 'show')}
        {GenDetail('ol', 'ordered list', '有序列表', 'code', 'param', 'show')}
        {GenDetail('optgroup', 'option group', '为select创建分组', 'code', 'param', 'show')}
        {GenDetail('option', '', '用于在select optgroup datalist中定义选项', 'code', 'param', 'show')}
        {GenDetail('output', '', '表示计算或用户操作的结果', 'code', 'param', 'show')}
        {GenDetail('p', 'paragraph', '段落', 'code', 'param', 'show')}
        {GenDetail('picture', '', (<div><div>为不同的场景 显示最匹配图片，包含多个source和一个img</div><div>media媒体条件</div> <div>type类型条件</div></div>), 'code', 'param', 'show')}
        {GenDetail('pre', '', '预定义格式文本', 'code', 'param', 'show')}
        {GenDetail('progress', '', '进度条', 'code', 'param', 'show')}
        {GenDetail('q', 'quotation', (<div>引用 短的行内引用 自动添加引号。 长引用使用<DivJumpToBlank jumpto='#blockquote'>blockquote</DivJumpToBlank></div>), 'code', 'param', 'show')}
        {GenDetail('s', 'strikethrough', '删除渲染文本表示不再相关或不再准确。 文本编辑提倡使用del', 'code', 'param', 'show')}
        {GenDetail('samp', 'sample', '计算机输出', 'code', 'param', 'show')}
        {GenDetail('section', '', (<div><div>独立章节</div><div>当该元素的内容可以作为一个独立的作品在多个媒体上发表，使用 &lt;article&gt; 是一个更好的选择。</div><div>当内容包含代表与主要内容一同展示的有用的切入信息，但不是直接的一部分（如相关链接，作者简历等），请使用 &lt;main&gt;。</div><div>当内容代表文档中的主要内容区域，请使用 &lt;main&gt;。</div><div>将该元素作为一个样式包装时，请使用 &lt;div&gt;。一般来说，&lt;section&gt; 应该出现在文档大纲中。</div></div>), 'code', 'param', 'show')}
        {GenDetail('select', '', '下拉菜单', 'code', 'param', 'show')}
        {GenDetail('slot', '', '占位符', 'code', 'param', 'show')}
        {GenDetail('small', '', '使用小号字体', 'code', 'param', 'show')}
        {GenDetail('source', '', '为 picture audio video 提供媒体资源', 'code', 'param', 'show')}
        {GenDetail('span', '', (<div>通用容器 行内容。 块内容使用<DivJumpTo content='div' /></div>), 'code', 'param', 'show')}
        {GenDetail('strong', '', '粗体 十分重要', 'code', 'param', 'show')}
        {GenDetail('style', '', '内嵌css 可多次定义', 'code', 'param', 'show')}
        {GenDetail('sub', 'subscripted', (<div>文本 更低更小， 更高更小使用<DivJumpTo content='sup' /></div>), 'code', 'param', 'show')}
        {GenDetail('summary', '', (<div><DivJumpTo content='details' />的内容摘要</div>), 'code', 'param', 'show')}
        {GenDetail('sup', 'superscripted', (<div>文本 更高更小， 更低更小使用<DivJumpTo content='sub' /></div>), 'code', 'param', 'show')}
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
        ), 'code', 'param', 'show')}
        {GenDetail('tbody', 'table body', (<div><div>table的body部分</div><div>如果table中含thead 那么tbody必须紧随它</div><div>如果使用了tbody 那么tr必须在tbody内</div></div>), 'code', 'param', 'show')}
        {GenDetail('td', 'table data', 'table的单元格数据', 'code', 'param', 'show')}
        {GenDetail('textarea', '', '纯文本编辑器', 'code', 'param', 'show')}
        {GenDetail('tfoot', '', 'table的汇总行', 'code', 'param', 'show')}
        {GenDetail('th', 'table header', 'table的表头', 'code', 'param', 'show')}
        {GenDetail('thead', '', 'table的表头 使用thead则必须成套使用tbody tfoot，不允许tr同级', 'code', 'param', 'show')}
        {GenDetail('time', '', '显示 时间 日期， 方便搜索引擎 没有任何效果', 'code', 'param', 'show')}
        {GenDetail('title', '', '网页标题 写在head中 方便搜索引擎', 'code', 'param', 'show')}
        {GenDetail('tr', 'table row', '', 'code', 'param', 'show')}
        {GenDetail('track', '', '媒体元素 audio和video的子元素，允许指定时序文本字幕', 'code', 'param', 'show')}
        {GenDetail('u', 'underline', '下划线', 'code', 'param', 'show')}
        {GenDetail('ul', 'unordered list', '无序列表', 'code', 'param', 'show')}
        {GenDetail('var', '', '变量名称 通常斜体显示', 'code', 'param', 'show')}
        {GenDetail('video', '', '视频', 'code', 'param', 'show')}
      </section>
      <hr />

      <section>
        <h2>demo</h2>

      </section>
    </div>
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
