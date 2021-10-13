/**
This file generates our atomic styles at build time. We specify all the CSS
properties we want to have and the available values for each one. We use our
theme variables to customize the output according to a given design.

https://vanilla-extract.style/documentation/sprinkles-api/

To get a better understanding, run `npm run build` and check out the generated
CSS file in the /dist directory. 
*/

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
