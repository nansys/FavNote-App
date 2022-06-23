import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import withRouter from 'hoc/withRouter.js'
import GlobalStyle from 'theme/GlobalStyle.js'
import { theme } from 'theme/mainTheme.js'
import PageContext from 'context'

class MainTemplate extends React.Component {

  state = {
    pageType: 'notes'
  }

  componentDidMount() {
    this.setCurrentPage()
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState)
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['twitters', 'articles', 'notes']
    const {
      router: {
        location: { pathname }
      }
    } = this.props

    const [ currentPage ] = pageTypes.filter(page => pathname.includes(page))

    if(prevState.pageType !== currentPage) {
      this.setState({pageType: currentPage})
    }

  }

  render() {

    const { children } = this.props
    const { pageType } = this.state

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </PageContext.Provider>
      </div>
    )
  }

  
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
}

export default withRouter(MainTemplate)
