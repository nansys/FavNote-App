import React from 'react'
import styled from 'styled-components'
import Heading from 'components/atoms/Heading/Heading'
import logo from 'assets/icons/logo.svg'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
`

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logo} alt="FavNote logo"></StyledLogo>
    <Heading>Your new favorite online notes experience</Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
)

export default AuthTemplate