import {recipe} from '@vanilla-extract/recipes'

/**
Here we're using the Recipes API to create the variant styling for a 
simple Stack component. More things to play with here, very much WIP.

https://vanilla-extract.style/documentation/recipes-api/
 */

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
