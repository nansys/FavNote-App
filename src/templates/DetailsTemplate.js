import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import UserPageTemplate from './UserPageTemplate'
import Paragraph from 'components/atoms/Paragraph/Paragraph.js'
import Heading from 'components/atoms/Heading/Heading.js'
import Button from 'components/atoms/Button/Button'
import withContext from 'hoc/withContext.js'

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  margin-left: 150px;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
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
const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const DetailsTemplate = ({ pageContext, title, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageType={pageContext}>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">{title}</StyledHeading>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === 'articles' && <StyledLink href={articleUrl}>Open Article</StyledLink>}
      {pageContext === 'twitters' && <StyledImage alt={title} src={`https://unavatar.io/${twitterName}`}/>}
      <Button as={Link} to={`/${pageContext}`} activeColor={pageContext}>Close / Save</Button>
    </StyledWrapper>
  </UserPageTemplate>
)

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
}

export default withContext(DetailsTemplate)