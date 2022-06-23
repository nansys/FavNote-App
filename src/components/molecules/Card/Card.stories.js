import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card
}

export const Primary = () => <Card />
export const Secondary = () => <Card cardType={"twitters"} />
export const Tertiary = () => <Card cardType={"articles"} />