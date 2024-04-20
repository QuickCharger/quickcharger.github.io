// 这个文件的作用是翻译 public/libevent的

const fs = require('fs')
const cheerio = require('cheerio')

function doTranslate (filename, translations) {
  fs.readFile(filename, 'utf8', (err, html) => {
    if (err) {
      console.error(err)
      return
    }

    const $ = cheerio.load(html)

    // 先删除所有class为translate的元素
    $('.translate').remove()

    translations.forEach(item => {
      // 使用contains选择器查找包含特定文本的段落
      const paragraph = $(`p:contains('${item.EN}')`)
      // 删除旧的翻译（如果存在）
      paragraph.next('.translate').remove()
      // 添加新的翻译
      paragraph.after(`<p class="translate">${item.CN}</p>`)
    })

    // 更新translate样式
    let styleTag = $('head style#translation-style')
    if (styleTag.length) {
      styleTag.remove()
    }
    $('head').append('<style id="translation-style"></style>')
    styleTag = $('head style#translation-style')
    styleTag.text(`
      .translate {
        background-color: #f0f0f0; /* 浅灰色背景 */
        color: black;             /* 黑色文本 */
        font-weight: bold;        /* 加粗字体 */
      }
    `)

    const updatedHtml = $.html()

    // 写入新的HTML文件
    fs.writeFile(filename, updatedHtml, 'utf8', (err) => {
      if (err) {
        console.error(filename, '写入失败！！！')
      } else {
        console.log(filename, '翻译完成')
      }
    })
  })
}

doTranslate(
  './public/Libevent_R10_Using_the_built-in_HTTP_server.html',
  [
    { EN: "The plain network-based Libevent interface is usefu", CN: 'Libevent的简单网络接口在您想要构建原生应用程序时很有用，但基于HTTP协议和加载页面的网络应用程序的开发日渐普遍，这种页面通常会动态地重新加载信息。' },
    { EN: "To use the Libevent service", CN: '要使用Libevent服务，您可以使用已经描述的主网络事件模型的相同基本结构，但是不需要处理网络接口，HTTP包装器会为您处理。HTTP包装器将整个过程转变为四个函数调用（初始化、启动HTTP服务器、设置HTTP回调函数、进入事件循环），加上回调函数的内容，该函数将发送数据回来。在列表中提供了一个非常简单的示例：' },
    { EN: 'Given the previous example', CN: '基于前面的例子，这里的代码基础应该相对容易理解。主要元素包括evhttp_set_gencb()函数，其设置了在接收到HTTP请求时要使用的回调函数，以及generic_request_handler()回调函数本身，它用一个简单的消息填充响应缓冲区以显示成功。' },
    { EN: 'The HTTP wrapper provides a wealth of different functionality', CN: 'HTTP包装器提供了丰富的不同功能。例如，有一个请求解析器，它会从典型请求中提取查询参数（就像您在HTTP请求中使用的那样），并且您还可以设置不同的处理程序来触发不同请求路径下的操作。' },
    { EN: 'Let’s extend this example act Libevent', CN: '让我们扩展这个示例，使Libevent充当类似Nginx的服务器来托管静态内容：' },
    {
      EN: 'After that it decoded URI string from something', CN: `如您所见，我们用特定的send_file_to_user()处理程序替换了generic_request_handler()，它用来处理传入的请求：<br>1.首先它检查HTTP命令是否等于GET或HEAD。<br>2.然后它解析请求URI，通过一对evhttp_request_get_uri()/evhttp_uri_parse()函数提取请求路径，并确定我们应当处理的文件路径。<br>3.之后，它将URI字符串从类似folder%2Fmy%20doc.txt的编码形式解码为普通的folder/my doc.txt。`
    },
  ]
)
