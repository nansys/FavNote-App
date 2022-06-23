import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon'
import bulbIcon from 'assets/icons/bulb.svg'
import linkIcon from 'assets/icons/link.svg'
import logoutIcon from 'assets/icons/logout.svg'
import penIcon from 'assets/icons/pen.svg'
import plusIcon from 'assets/icons/plus.svg'
import twitterIcon from 'assets/icons/twitter.svg'
import logoIcon from 'assets/icons/logo.svg'
import withContext from 'hoc/withContext'

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLogoLink as={NavLink} to="/" />
    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclassname="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclassname="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclassname="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} activeclassname="active" />
  </StyledWrapper>
)

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
}

Sidebar.defaultProp = {
  pageContext: 'notes'
}

export default withContext(Sidebar)