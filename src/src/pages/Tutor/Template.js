import { Layout } from 'antd'
import { ComponentHeader, ComponentFooter, ComponentSider } from '@/pages/Layout'

function Template (props) {
  return (
    <Layout>
      {/* header是fix 所以header下面需要再独立布局 */}
      <ComponentHeader />
      <Layout>
        <ComponentSider
          items={
            [
              {
                key: `/tutor/html`, label: 'HTML', children: [
                  { key: `/tutor/html?jumpto=jumptoLayout`, label: '布局', },
                  { key: `/tutor/html?jumpto=jumptoShow`, label: '显示', },
                  { key: `/tutor/html?jumpto=jumptoInputOutput`, label: '交互', },
                  { key: `/tutor/html?jumpto=jumptoMedia`, label: '多媒体', },
                  {
                    key: `/tutor/html#demo`, label: 'demo', children: [
                      { key: `/tutor/html#demotable`, label: 'table', },
                      { key: `/tutor/html#demoform`, label: 'form', },
                    ]
                  },
                ]
              },
              {
                key: `/tutor/css`, label: 'CSS', children: [
                  { key: `/tutor/css?jumpto=jumptoCss1`, label: 'css1', },
                ]
              },
            ]
          } />
        <Layout.Content style={{ marginTop: '64px', marginLeft: '200px' }}>
          {props.content}
        </Layout.Content>
      </Layout>
      <ComponentFooter style={{ marginTop: 'calc(100vh - 32px)' }} />
    </Layout >
  )
}

export default Template
