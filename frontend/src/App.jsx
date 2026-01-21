import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import { Box, Container, VStack } from '@chakra-ui/react'

// Styles
import './styles/App.css'

// Components (We will create these next)
import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
// import Socials from './components/Socials'

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00f0ff,       // Brand Cyan
        backgroundColor: 0x0b0b0b, // Dark Background
        points: 10.00,
        maxDistance: 20.00,
        spacing: 16.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Box ref={vantaRef} minH="100vh" w="100%" overflowX="hidden">
      <Container maxW="container.xl" pt={10} pb={10} position="relative" zIndex={1}>
        <VStack spacing={20} align="stretch">
          {/* <Hero /> */}
          {/* <Work /> */}
          {/* <Projects /> */}
          {/* <Blogs /> */}
          {/* <Contact /> */}
        </VStack>
      </Container>
      
      {/* <Socials /> */}
    </Box>
  )
}

export default App