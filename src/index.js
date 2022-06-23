import React from 'react'
import { createRoot } from 'react-dom/client'

import Root from 'views/Root.js'

const rootElement = document.querySelector('#root')

const root = createRoot(rootElement)

root.render(<Root />)
