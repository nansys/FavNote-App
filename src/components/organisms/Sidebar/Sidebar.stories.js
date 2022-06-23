import React from 'react'

import Sidebar from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    actions: {
      handles: ['onclick', 'click'],
    },
  }
}

export const sidebar = () => <Sidebar />