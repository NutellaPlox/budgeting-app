import { createTheme, createTokens } from 'tamagui'
import { color, radius, size, space, zIndex, themes } from '@tamagui/themes'

export const tokens = createTokens({
  color: {
    ...color,
    black: '#000000',
  },
  space,
  size,
  radius,
  zIndex,
})

export const customThemes = {
  ...themes,
  dark: {
    ...themes.dark,
    background: tokens.color.black,
  },
}
