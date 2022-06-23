import React from 'react'
import Input from './Input'

export default {
  title: 'Input',
  component: Input
}

export const Normal = () => <Input name="search" placeholder="search"></Input>
export const Search = () => <Input name="login" placeholder="login" search></Input>