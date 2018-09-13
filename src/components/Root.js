import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Projects from './Projects'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Root
