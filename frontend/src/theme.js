import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: '#0b0b0b', // Deep dark background as fallback for Vanta
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
    100: '#00F0FF', // Cyber Cyan
    200: '#7000FF', // Neon Purple
    300: '#00FF94', // Matrix Green
    900: '#1A202C',
  },
}

const theme = extendTheme({ config, styles, colors })

export default theme