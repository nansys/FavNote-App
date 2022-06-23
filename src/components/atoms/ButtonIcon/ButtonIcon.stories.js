import React from 'react'
import styled from 'styled-components'
import ButtonIcon from './ButtonIcon'
import bulbIcon from 'assets/icons/bulb.svg'
import linkIcon from 'assets/icons/link.svg'
import logoutIcon from 'assets/icons/logout.svg'
import penIcon from 'assets/icons/pen.svg'
import plusIcon from 'assets/icons/plus.svg'
import twitterIcon from 'assets/icons/twitter.svg'

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>]
}

export const bulbIco = () => <ButtonIcon icon={bulbIcon}/>
export const bulbIcoActive = () => <ButtonIcon icon={bulbIcon} active/>
export const linkIco = () => <ButtonIcon icon={linkIcon}/>
export const logoutIco = () => <ButtonIcon icon={logoutIcon}/>
export const penIco = () => <ButtonIcon icon={penIcon}/>
export const plusIco = () => <ButtonIcon icon={plusIcon}/>
export const twitterIco = () => <ButtonIcon icon={twitterIcon}/>