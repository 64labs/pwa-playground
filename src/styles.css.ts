import {style, styleVariants} from '@vanilla-extract/css'
import {sprinkles} from './sprinkles.css'

export const base = sprinkles({
  display: 'flex',
  flexDirection: 'column',
})

export const variants = styleVariants({
  primary: {background: 'blue'},
  secondary: {background: 'aqua'},
})
