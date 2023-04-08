import ComponentHeader from './Component_Header'
import ComponentSider from './Component_Sider'
import ComponentFooter from './Component_Footer'
import ComponentSpeedDial from './Component_SpeedDial'

import TemplateClipped from './Template_Clipped'
import TemplateResponsive from './Template_Responsive'
import TemplatePersistent from './Template_Persistent'

import { useState, useEffect } from 'react'

export {
  ComponentHeader, ComponentSider, ComponentFooter,
  TemplateClipped, TemplateResponsive, TemplatePersistent
}

export function Template ({ main, noTheme, ...other }) {
  const templateNameKey = 'TemplateName'

  let [templateName, setTemplateName] = useState('clipped')

  useEffect(() => {
    if (!noTheme) {
      setTemplateName(localStorage.getItem(templateNameKey) || 'clipped')
    }
  }, [])

  if (!noTheme) {
    main = <>{main} <ComponentSpeedDial content={[
      { icon: 'clip', tip: '', onClick: () => { localStorage.setItem(templateNameKey, 'clipped'); setTemplateName('clipped') } },
      { icon: 'resp', tip: '', onClick: () => { localStorage.setItem(templateNameKey, 'responsive'); setTemplateName('responsive') } },
      { icon: 'perst', tip: '', onClick: () => { localStorage.setItem(templateNameKey, 'Persistent'); setTemplateName('Persistent') } },
    ]} /></>
  }

  if (templateName === 'clipped') {
    return <TemplateClipped {...other} main={main} />
  } else if (templateName === 'responsive') {
    return <TemplateResponsive {...other} main={main} />
  } else if (templateName === 'Persistent') {
    return <TemplatePersistent {...other} main={main} />
  }
}
