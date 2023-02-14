import './App.css';
import {HashRouter, Router, Route, NavLink, Link, Redirect, Switch} from 'react-router-dom'
import * as React from 'react'

function DivJumpTo(props) {
	function handleClick() {
		let ele = document.getElementById(props.jumpTo || props.content)
		if(ele)
			ele.scrollIntoView();
	}

	return (
		<div onClick = {handleClick} className='Inline'>
			{props.content}
		</div>
	)
}

function DivJumpToBlank(props) {
	return (
		<div className='Inline'>
			<a href={'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/'+props.jumpTo} target="_blank" rel="noreferrer" {...props}></a>
		</div>
	)
}

class Html extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	GenNav() {
		let quickjump = [
			{href:'#a', content:'a'},
			{href:'#b', content:'b'},
			{href:'#cite', content:'c'},
			{href:'#del', content:'d'},
			{href:'#em', content:'e'},
			{href:'#form', content:'f'},
			{href:'#header', content:'h'},
			{href:'#i', content:'i'},
			{href:'#label', content:'l'},
			{href:'#map', content:'m'},
			{href:'#nav', content:'n'},
			{href:'#object', content:'o'},
			{href:'#p', content:'p'},
			{href:'#q', content:'q'},
			{href:'#s', content:'s'},
			{href:'#table', content:'t'},
			{href:'#u', content:'u'},
			{href:'#v', content:'v'},
		]
		return (
			<div id="navbar">
				<header>HTML 快速手册</header>
				<hr/>
				<div className='Nav-link'>
					{quickjump.map((it) => <a href={it.href} target='_self' key={it.content}>{it.content}</a>)}
				</div>
				<DivJumpTo  content='布局相关'  jumpTo='idSectionLayout' />
				<DivJumpTo  content='显示相关'  jumpTo='idSectionShow'   />
				<DivJumpTo  content='交互'      jumpTo='idSectionInOut'  />
				<DivJumpTo  content='多媒体'    jumpTo='idSectionMedia'  />
				<hr/>
				<hr/>
				<div className="nav-link">
					示例
					<DivJumpTo  content='table'  jumpTo='idDemoTable' />
					<DivJumpTo  content='form'   jumpTo='idDemoForm'  />
				</div>
			</div>
		)
	}

	GenQuickJumpTo(a) {
		return (
			<div>				
				{a.map((it) => {
					let ret = null
					if(it >= 'a' && it<='z')
						ret = (<DivJumpTo content={it + ' '} jumpTo={it}/>)
					else
						ret = (<div className='Inline'>{it + ' '}</div>)
					return ret
				})}
			</div>
		)
	}

	GenDetail(name, nameFull, desc, code, param, show) {
		return (
			<div class='label'>
				<div id={name}></div>
				<div class='label-name' ><a href={'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/'+name} target="_black">{name + (nameFull?` - ${nameFull}`:'')}</a></div>
				{/* {
					typeof desc === 'string'? <div>{desc}</div> : <div>{desc}</div>
				} */}
				<div class='label-desc' >{desc}</div>
				<div class='label-code' >{code}</div>
				<div class='label-param'>{param}</div>
				<div class='label-show' >{show}</div>
			</div>
		)
	}

	GenArticle() {
		return (
<div id="main-doc">
	<pre id="thanks">
	<div>感谢 mozilla w3c</div>
	<div>参考于 <a href='https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a' target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a</a></div>
	<div>参考于 <a href="https://www.w3school.com.cn/html/html_quick.asp" target="_blank" rel="noreferrer">https://www.w3school.com.cn/html/html_quick.asp</a></div>
	</pre>
	<div></div>
	<hr/>
	<section id="section-layout">
		<h2 className='Inline' id='idDivLayout'>布局相关</h2> <pre className='Inline'>  布局相关的标签多为块级元素 本身不显示内容只是明确了布局</pre>
		{this.GenQuickJumpTo(['块', 'div'])}
		{this.GenQuickJumpTo(['行内元素', 'span'])}
		{this.GenQuickJumpTo(['添加其他网页', 'iframe'])}
		{this.GenQuickJumpTo(['导航', 'nav'])}
		{this.GenQuickJumpTo(['文章', 'article', '标题', 'header', '章节', 'section', '页脚', 'footer'])}
		{this.GenQuickJumpTo(['文章主体', 'main'])}
		{this.GenQuickJumpTo(['段落', 'p'])}
		{this.GenQuickJumpTo(['引用', 'q', 'blockquote'])}
	</section>
	<hr/>

	<section>
		<h2 className='Inline'>显示相关</h2> <pre className='Inline'>  基本显示类型 不影响布局</pre>
		{this.GenQuickJumpTo(['加粗', 'b', 'em', 'strong', '小写', 'small', 'sub', 'sup', '高亮', 'mark'])}
		{this.GenQuickJumpTo(['插入', 'ins', '删除', 's', 'del'])}
		{this.GenQuickJumpTo(['斜体', 'i'])}
		{this.GenQuickJumpTo(['文字显示顺序', 'bdo'])}
		{this.GenQuickJumpTo(['换行', 'br'])}
		{this.GenQuickJumpTo(['横线', 'hr'])}
		{this.GenQuickJumpTo(['引用', 'cite'])}
		{this.GenQuickJumpTo(['点击展开更多', 'details', 'summary'])}
		{this.GenQuickJumpTo(['图片', 'img', 'map', 'picture'])}
		{this.GenQuickJumpTo(['标签', 'label'])}
		{this.GenQuickJumpTo(['数字量化', 'meter', '进度条', 'progress'])}
		{this.GenQuickJumpTo(['外部', 'object'])}
		{this.GenQuickJumpTo(['列表', 'ol', 'ul', 'li'])}
		{this.GenQuickJumpTo(['预定义格式文本', 'pre'])}
		{this.GenQuickJumpTo(['变量名称', 'var', '计算机输出', 'samp', '用户操作结果', 'output'])}
		{this.GenQuickJumpTo(['占位符', 'slot'])}
		{this.GenQuickJumpTo(['时间', 'time'])}
		{this.GenQuickJumpTo(['网页标题', 'title'])}
		{this.GenQuickJumpTo(['下划线', 'u'])}
	</section>
	<hr/>

	<section>
		<h2 className='Inline'>交互</h2> <pre className='Inline'>  输入输出 带有键盘鼠标交互 带有数据交互</pre>
		{this.GenQuickJumpTo(['跳转', 'a'])}
		{this.GenQuickJumpTo(['图片', 'area', 'source'])}
		{this.GenQuickJumpTo(['表格', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'])}
		{this.GenQuickJumpTo(['表单', 'form'])}
		{this.GenQuickJumpTo(['input'])}
		{this.GenQuickJumpTo(['下拉菜单', 'select', 'optgroup', 'option'])}
		{this.GenQuickJumpTo(['文本编辑器', 'textgarea'])}
	</section>
	<hr/>

	<section>
		<h2 className='Inline'>多媒体</h2> <pre className='Inline'>  h5的多媒体标签极大简化了音频视频的开发</pre>
		{this.GenQuickJumpTo(['音频', 'audio', 'source', 'track'])}
		{this.GenQuickJumpTo(['视频', 'video', 'source', 'track'])}
	</section>
	<hr/>

	<section>
		<h2 className='Inline'>其他</h2> <pre className='Inline'>  html的设置 或meta</pre>
		{this.GenQuickJumpTo(['base'])}
		{this.GenQuickJumpTo(['css外置', 'link'])}
		{this.GenQuickJumpTo(['css内置', 'style'])}
		{this.GenQuickJumpTo(['元数据', 'meta'])}
		{this.GenQuickJumpTo(['noscript'])}
	</section>
	<hr/>

	<section>
		<h2>标签详情</h2>
		{this.GenDetail('a', 'anchor', '超链接', 
			(<div>&lt;a href="https://example.com"&gt;Website&lt;/a&gt;</div>),
			[(<div>href="#|#id|url"  跳转到顶部|跳转到指定id|跳转到url</div>),(<div>target="<b>_self</b> | _blank" 当前页面加载（默认）| 新页面加载</div>)],
			(<div><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" target="_blank">点击查看效果</a></div>)
		)}
		{this.GenDetail('abbr', 'abbreviation', '标记一个缩写', 'code', 'param', 'show')}
		{this.GenDetail('area', '', '图片上定义一个可点击区域 点击后跳转 本身不显示任何图片', 'code', 'param', 'show')}
		{this.GenDetail('article', '', '文章 独立结构。 内容包含h section footer', 'code', 'param', 'show')}
		{this.GenDetail('audio', '', '音频', 'code', 'param', 'show')}
		{this.GenDetail('b', '', '特别强调 粗体显示', 'code', 'param', 'show')}
		{this.GenDetail('base', '', '指定文档中所有相对URL的根。 如果指定了多个 base，只会使用第一个 href 和 target 值，其余都会被忽略。', 'code', 'param', 'show')}
		{this.GenDetail('bdo', 'Bi-Directional Override', '改写了文本的方向性', 'code', 'param', 'show')}
		{this.GenDetail('blockquote', '', '块级引用元素，通常在渲染时 这部分的内容会有一定的缩进', 'code', 'param', 'show')}
		{this.GenDetail('br', 'barter rabbet', '换行 没有</br> xhtml中写作<br/>', 'code', 'param', 'show')}
		{this.GenDetail('cite', '', '展示为引用 实际可能是以斜体展示 没有其他实际功能。 通常配合a进行超链接', 'code', 'param', 'show')}
		{this.GenDetail('del', '', '表示一段被删除的内容', 'code', 'param', 'show')}
		{this.GenDetail('details', '', '总结与详细信息展示。 如果没有summary 系统使用默认文字（中文是“详情”）。 展开后显示details内全部内容', 'code', 'param', 'show')}
		{this.GenDetail('div', 'division', '块容器', 'code', 'param', 'show')}
		{this.GenDetail('em', 'emphasis', '着重强调', 'code', 'param', 'show')}
		{this.GenDetail('footer', '', '页脚。通常包含 页脚 版权 文献', 'code', 'param', 'show')}
		{this.GenDetail('form', '', '提交后 会提交form里面所有带name的', 'code', 'param', 'show')}
		{this.GenDetail('header', '', '展示介绍性内容 通常用于包含周围部分的标题（h1 至 h6 元素）', 'code', 'param', 'show')}
		{this.GenDetail('hr', '', '横线 水平线 没有</hr> xhtml中写作<hr/> 表示段落元素之间的主题转换，如果想画一条横线 使用css', 'code', 'param', 'show')}
		{this.GenDetail('i', 'italic', '斜体，表现因某些原因需要区分普通文本', 'code', 'param', 'show')}
		{this.GenDetail('iframe', 'inline frame', '将另一个 HTML 页面嵌入到当前页面中', 'code', 'param', 'show')}
		{this.GenDetail('img', 'image', '图片', 'code', 'param', 'show')}
		{this.GenDetail('input', '', '交互式控件', 'code', 'param', 'show')}
		{this.GenDetail('ins', 'Inserted', '定义已经被插入文档中的文本', 'code', 'param', 'show')}
		{this.GenDetail('label', '', '标签，用于元素的说明', 'code', 'param', 'show')}
		{this.GenDetail('link', '', '规定当前文档与外部资源的关系，常用于链接css', 'code', 'param', 'show')}
		{this.GenDetail('main', '', '文档的主体部分，适用于内容直达 或 阅读模式', 'code', 'param', 'show')}
		{this.GenDetail('map', '', '定义图像映射 与area一起使用', 'code', 'param', 'show')}
		{this.GenDetail('mark', '', '高亮', 'code', 'param', 'show')}
		{this.GenDetail('meta', '', '元数据 关于数据的数据', 'code', 'param', 'show')}
		{this.GenDetail('meter', '', '显示标记量', 'code', 'param', 'show')}
		{this.GenDetail('nav', '', '导航', 'code', 'param', 'show')}
		{this.GenDetail('noscript', '', '脚本不被支持时执行', 'code', 'param', 'show')}
		{this.GenDetail('object', '', '引入一个外部在源', 'code', 'param', 'show')}
		{this.GenDetail('ol', 'ordered list', '有序列表', 'code', 'param', 'show')}
		{this.GenDetail('optgroup', 'option group', '为select创建分组', 'code', 'param', 'show')}
		{this.GenDetail('option', '', '用于在select optgroup datalist中定义选项', 'code', 'param', 'show')}
		{this.GenDetail('output', '', '表示计算或用户操作的结果', 'code', 'param', 'show')}
		{this.GenDetail('p', 'paragraph', '段落', 'code', 'param', 'show')}
		{this.GenDetail('picture', '', (<div><div>为不同的场景 显示最匹配图片，包含多个source和一个img</div><div>media媒体条件</div> <div>type类型条件</div></div>), 'code', 'param', 'show')}
		{this.GenDetail('pre', '', '预定义格式文本', 'code', 'param', 'show')}
		{this.GenDetail('progress', '', '进度条', 'code', 'param', 'show')}
		{this.GenDetail('q', 'quotation', (<div>引用 短的行内引用 自动添加引号。 长引用使用<DivJumpToBlank jumpTo='#blockquote'>blockquote</DivJumpToBlank></div>), 'code', 'param', 'show')}
		{this.GenDetail('s', 'strikethrough', '删除渲染文本表示不再相关或不再准确。 文本编辑提倡使用del', 'code', 'param', 'show')}
		{this.GenDetail('samp', 'sample', '计算机输出', 'code', 'param', 'show')}
		{this.GenDetail('section', '', (<div><div>独立章节</div><div>当该元素的内容可以作为一个独立的作品在多个媒体上发表，使用 &lt;article&gt; 是一个更好的选择。</div><div>当内容包含代表与主要内容一同展示的有用的切入信息，但不是直接的一部分（如相关链接，作者简历等），请使用 &lt;main&gt;。</div><div>当内容代表文档中的主要内容区域，请使用 &lt;main&gt;。</div><div>将该元素作为一个样式包装时，请使用 &lt;div&gt;。一般来说，&lt;section&gt; 应该出现在文档大纲中。</div></div>), 'code', 'param', 'show')}
		{this.GenDetail('select', '', '下拉菜单', 'code', 'param', 'show')}
		{this.GenDetail('slot', '', '占位符', 'code', 'param', 'show')}
		{this.GenDetail('small', '', '使用小号字体', 'code', 'param', 'show')}
		{this.GenDetail('source', '', '为 picture audio video 提供媒体资源', 'code', 'param', 'show')}
		{this.GenDetail('span', '', (<div>通用容器 行内容。 块内容使用<DivJumpTo content='div'/></div>), 'code', 'param', 'show')}
		{this.GenDetail('strong', '', '粗体 十分重要', 'code', 'param', 'show')}
		{this.GenDetail('style', '', '内嵌css 可多次定义', 'code', 'param', 'show')}
		{this.GenDetail('sub', 'subscripted', (<div>文本 更低更小， 更高更小使用<DivJumpTo content='sup' /></div>), 'code', 'param', 'show')}
		{this.GenDetail('summary', '', (<div><DivJumpTo content='details' />的内容摘要</div>), 'code', 'param', 'show')}
		{this.GenDetail('sup', 'superscripted', (<div>文本 更高更小， 更低更小使用<DivJumpTo content='sub' /></div>), 'code', 'param', 'show')}
		{this.GenDetail('table', '', (
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
		{this.GenDetail('tbody', 'table body', (<div><div>table的body部分</div><div>如果table中含thead 那么tbody必须紧随它</div><div>如果使用了tbody 那么tr必须在tbody内</div></div>), 'code', 'param', 'show')}
		{this.GenDetail('td', 'table data', 'table的单元格数据', 'code', 'param', 'show')}
		{this.GenDetail('textarea', '', '纯文本编辑器', 'code', 'param', 'show')}
		{this.GenDetail('tfoot', '', 'table的汇总行', 'code', 'param', 'show')}
		{this.GenDetail('th', 'table header', 'table的表头', 'code', 'param', 'show')}
		{this.GenDetail('thead', '', 'table的表头 使用thead则必须成套使用tbody tfoot，不允许tr同级', 'code', 'param', 'show')}
		{this.GenDetail('time', '', '显示 时间 日期， 方便搜索引擎 没有任何效果', 'code', 'param', 'show')}
		{this.GenDetail('title', '', '网页标题 写在head中 方便搜索引擎', 'code', 'param', 'show')}
		{this.GenDetail('tr', 'table row', '', 'code', 'param', 'show')}
		{this.GenDetail('track', '', '媒体元素 audio和video的子元素，允许指定时序文本字幕', 'code', 'param', 'show')}
		{this.GenDetail('u', 'underline', '下划线', 'code', 'param', 'show')}
		{this.GenDetail('ul', 'unordered list', '无序列表', 'code', 'param', 'show')}
		{this.GenDetail('var', '', '变量名称 通常斜体显示', 'code', 'param', 'show')}
		{this.GenDetail('video', '', '视频', 'code', 'param', 'show')}
	</section>
	<hr/>

	<section>
		<h2>demo</h2>

	</section>
</div>
	)}

	render(prop) {
		return (
		<div>
			{prop}
			{this.GenNav()}
			{this.GenArticle()}
		</div>
	)}
}

class Css extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>aCss div</div>
		)
	}
}

function App() {
	return (
		<HashRouter>
			<div className='HeadNav'>
				<div><Link to='/html'>HTML相关</Link></div>
				<div><Link to='/css' >CSS相关</Link></div>
			</div>

			<Switch>
				<Route path='/html' component={Html}></Route>
				<Route path='/css' component={Css}></Route>
			</Switch>
		</HashRouter>
	);
}

export default App;
