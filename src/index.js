import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import cStudio from './reducers'
import Root from './components/Root'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = createStore(
  cStudio,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
