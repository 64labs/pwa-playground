/**
This file defines all of our global theme variables. These will be built in to
our atomic stylesheet and made available throughout the system.

https://vanilla-extract.style/documentation/styling-api/
*/

import {createGlobalTheme} from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0px',
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
    21: '84px',
    22: '88px',
    23: '92px',
    24: '96px',
    25: '100px',
  },
  color: {
    white: '#fff',
    black: '#000',
    primary: 'salmon',
    secondary: 'purple',
  },
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: {
    small: '1em',
    medium: '1.4em',
    large: '1.8em',
  },
  gridRepeat: {
    '4x': 'repeat(4, 1fr)',
  },
})
