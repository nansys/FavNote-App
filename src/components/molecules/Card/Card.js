import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { deleteItem as removeItemAction } from 'reducers'

import Paragraph from 'components/atoms/Paragraph/Paragraph.js'
import Heading from 'components/atoms/Heading/Heading.js'
import Button from 'components/atoms/Button/Button.js'
import LinkIco from 'assets/icons/link.svg'
import withContext from 'hoc/withContext'

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 9999;
  }

  ${({flex}) =>
  flex && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}

`

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold };
  font-size: ${({ theme }) => theme.fontSize.xs };
`

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50px;
`

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIco}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`

class Card extends React.Component {

  state = {
    redirect: false
  }

  handleCardClick = () => this.setState({redirect: true})

  render() {
    const { _id, pageContext, title, created, twitterName, articleUrl, content, deleteItem } = this.props

    if(this.state.redirect) {
      return <Navigate replace to={`/${pageContext}/${_id}`} />
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
    <InnerWrapper activeColor={pageContext}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {pageContext === 'twitters' && <StyledAvatar src={`https://unavatar.io/${twitterName}`} />}
      {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button onClick={() => deleteItem({pageContext, _id})} secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
    )
  }
}

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
}

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null
}

const mapDispatchToProps = dispatch => ({
  deleteItem: (itemType, id) => dispatch(removeItemAction(itemType, id))
})

export default connect(null, mapDispatchToProps)(withContext(Card))