const white = '#fff'
const black = '#212121'
const blue = '#1e91ea'
const green = '#6dbc4a'
const yellow = '#ffcf3d'
const red = '#e25858'
const brand = '#ffc000'
const brandDark = '#ffb300'

// Grays
const gray100 = '#f3f3f3'
const gray200 = '#e2e2e2'
const gray300 = '#d8d8d8'
const gray400 = '#898989'
const gray500 = '#595959'

const darkBlue = '#1877c1'
const darkGreen = '#61a642'
const darkRed = '#d64343'

const lightGreen = '#6dbc4a08'
const lightRed = '#cc4b370d'
const lightYellow = '#ffcf3d08'

const space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 76, 80]

const sizes = { xSmall: 4, small: 12, medium: 24, large: 76, xLarge: 80 }

const theme = {
  borderRadius: '3px',

  fonts: {
    default: 'proxima-nova, sans-serif',
  },

  breakpoints: ['32em', '48em', '64em'],

  space,
  sizes,

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  fontWeights: [400, 600, 700],

  zIndex: [1, 2, 3, 4, 5],

  lineHeights: [1.5, 1.8],

  radii: [3],

  shadows: [
    '0px 1px 6px rgba(0, 0, 0, 0.1)',
    '0 2px 16px 2px rgba(0, 0, 0, 0.1)',
    '0 5px 5px rgba(0, 0, 0, 0.1)',
  ],

  colors: {
    white,
    black,

    grays: [gray100, gray200, gray300, gray400, gray500],

    brand,
    brandDark,

    blue,
    darkBlue,

    green,
    darkGreen,
    lightGreen,

    yellow,
    darkYellow: yellow,
    lightYellow,

    red,
    darkRed,
    lightRed,
  },
}

export default theme
