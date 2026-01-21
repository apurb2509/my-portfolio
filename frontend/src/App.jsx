import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min' // CHANGED IMPORT
import { Box, Container, VStack } from '@chakra-ui/react'

import './styles/App.css'
import Hero from './components/Hero'
import Work from './components/Work'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x1a59,       // Deep Blue Base
        backgroundColor: 0x131a43, // Dark Navy Background
        size: 1.5,
        amplitudeFactor: 1.0,
        xOffset: 0.1,             // Shift slightly right so text on left is clear
        yOffset: 0.1
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <Box ref={vantaRef} minH="100vh" w="100%" overflowX="hidden">
      <Container maxW="container.xl" pt={4} pb={10} position="relative" zIndex={1}>
        <VStack spacing={12} align="stretch"> {/* Reduced spacing to 12 */}
          <Hero />
          <Work />
          <Projects />
          <Blogs />
          <Contact />
        </VStack>
      </Container>
    </Box>
  )
}

export default App