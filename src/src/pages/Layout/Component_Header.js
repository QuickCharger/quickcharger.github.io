import { useNavigate } from 'react-router-dom'
// import { Layout, Menu, Row, Col, } from 'antd'
// import { CaretDownOutlined } from '@ant-design/icons'

function TemplateHeader (props) {
  let navigate = useNavigate()

  return (
    <>header</>
    // <Layout.Header
    //   theme='light'
    //   style={{ width: '100vw', backgroundColor: 'white', paddingInline: '1% 1%', position: 'fixed', zIndex: 1 }}
    // >
    //   {/* 如果不用Row 窗口变窄后Menu会移动到下面 */}
    //   <Row justify="space-between">
    //     <Col span={4}>
    //       <div style={{
    //         // marginTop: (64 - 14) / 2,   // 一级导航高度64px 文字14px
    //         textAlign: 'center'
    //         // margin: 'calc((64 - 53) / 2) auto 0'
    //       }} >
    //         是个LOGO
    //       </div>
    //     </Col>

    //     <Col span={10}>
    //       <Menu
    //         theme="light"
    //         mode="horizontal"
    //         style={{ float: 'right', width: '40%' }}
    //         items={[
    //           { key: '首页', label: '首页', jumpto: '/' },
    //           {
    //             key: 'HTML', label: <>HTML笔记<CaretDownOutlined /></>, children: [
    //               { key: 'tutorhtml', label: 'html', jumpto: '/tutor/html' },
    //               { key: 'tutorcss', label: 'css', jumpto: '/tutor/css' },
    //             ]
    //           },
    //         ]}
    //         onSelect={(item, key, keyPath, selectedKeys, domEvent) => {
    //           if (item.item.props.jumpto.startsWith('/')) {
    //             navigate(item.item.props.jumpto)
    //           } else {
    //             const offset = 64   // 导航栏宽64px
    //             let label = document.querySelector(`#${item.item.props.jumpto}`)
    //             if (label)
    //               window.scrollTo({ top: label.offsetTop - offset, behavior: 'smooth' })
    //           }
    //         }}
    //       >
    //       </Menu>
    //     </Col>
    //   </Row>
    // </Layout.Header>
  )
}

export default TemplateHeader
