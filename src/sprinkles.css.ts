import {defineProperties, createSprinkles} from '@vanilla-extract/sprinkles'
import {vars} from './vars.css'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {'@media': 'screen and (min-width: 768px)'},
    desktop: {'@media': 'screen and (min-width: 1024px)'},
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    width: vars.space,
    height: vars.space,
    display: ['none', 'block', 'inline', 'flex', 'inline-flex'],
    flexDirection: ['row', 'column'],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    boxSize: ['width', 'height'],
  },
})

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {'@media': '(prefers-color-scheme: dark)'},
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    background: vars.color,
    backgroundColor: vars.color,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)
