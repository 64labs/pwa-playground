import {recipe} from '@vanilla-extract/recipes'
import {sprinkles} from '../../sprinkles.css'

export const stack = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      column: {flexDirection: 'column'},
      row: {flexDirection: 'row'},
    },
  },

  compoundVariants: [],

  defaultVariants: {
    direction: 'column',
  },
})
