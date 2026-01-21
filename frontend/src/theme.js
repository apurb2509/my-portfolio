import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: '#0b0b0b',
      color: 'whiteAlpha.900',
      overflowX: 'hidden',
    },
    a: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}

const colors = {
  brand: {
    100: '#00F0FF',
    200: '#7000FF',
    300: '#00FF94',
    900: '#1A202C',
  },
}

const theme = extendTheme({ config, styles, colors })

export default theme