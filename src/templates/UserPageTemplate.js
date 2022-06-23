import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from 'components/organisms/Sidebar/Sidebar.js'

const UserPageTemplate = ({ children }) => (
  <>
  <Sidebar/>
  {children}
  </>
)

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default UserPageTemplate