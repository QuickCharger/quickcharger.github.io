import { SpeedDial, SpeedDialAction } from '@mui/material'

/**
 * props.content = [
    { key: `${base}/css`, icon: 'icon', tip: 'HTML' },
    { key: `${base}/html`, icon: <DiffOutlined />, label: 'CSS' },
  ]
 */

function TemplateSpeedDial ({ content }) {

  return <SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    icon={'Theme'}
  >
    {content.map((item, idx) => (
      <SpeedDialAction
        key={idx}
        sx={{ fill: 'parent' }}
        icon={item.icon}
        tooltipTitle={item.name}
        onClick={() => { item.onClick && item.onClick() }}
      />
    ))
    }
  </SpeedDial >
}

export default TemplateSpeedDial
