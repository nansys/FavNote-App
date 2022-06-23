import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserPageTemplate from './UserPageTemplate'
import Input from 'components/atoms/Input/Input.js'
import Heading from 'components/atoms/Heading/Heading.js'
import withContext from 'hoc/withContext.js'
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.js'
import plusIcon from 'assets/icons/plus.svg'
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar.js'

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
  margin-left: 150px;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: [header-start] 100px [header-end] [content-start] auto [content-end];
  grid-gap: 85px;
`

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`

const StyledParagraph = styled(Heading)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`
const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`

class GridTemplate extends React.Component {

  state = {
    isNewItemBarVissible: false
  }

  toogleNewItem = () => {
    this.setState(prevState => ({ isNewItemBarVissible: !prevState.isNewItemBarVissible}))
  }

  render() {

    const { pageContext, children } = this.props
    const { isNewItemBarVissible } = this.state

    return (

      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder='Search'/>
            <StyledHeading big as="h1">{pageContext}</StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon onClick={this.toogleNewItem} icon={plusIcon} activeColor={pageContext} />
          <NewItemBar handleClose={this.toogleNewItem} isVisible={isNewItemBarVissible}/>
        </StyledWrapper>
      </UserPageTemplate>
    )
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
}

GridTemplate.defaultProp = {
  pageContext: 'notes'
}

export default withContext(GridTemplate)