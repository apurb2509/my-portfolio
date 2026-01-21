import React, { useEffect, useRef } from 'react'
import { Box, Heading, Text, Badge, Stack, Flex, Button } from '@chakra-ui/react'
import { gsap } from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  
  const techStack = [
    "React", "Node.js", "Next.js", "Java", "Python", "AI/ML"
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-content", 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Flex 
      ref={containerRef}
      minH="90vh" // Takes up almost full screen height
      align="center"
      justify="space-between"
      direction={{ base: 'column', md: 'row' }}
      px={{ base: 4, md: 0 }}
    >
      {/* Left Content */}
      <Box maxW="600px" className="hero-content">
        <Text color="brand.100" fontSize="xl" fontWeight="bold" mb={2}>
          Hi, I am
        </Text>
        <Heading 
          as="h1" 
          size="4xl" 
          fontWeight="extrabold" 
          lineHeight="1.1"
          mb={4}
          color="white"
        >
          Apurb Susobhit Baba
        </Heading>
        <Heading 
          as="h2" 
          size="lg" 
          color="gray.400" 
          fontWeight="normal"
          mb={6}
        >
          Building intelligent <Text as="span" color="brand.200">Software</Text> & <Text as="span" color="brand.300">AI Solutions</Text>.
        </Heading>

        <Text color="gray.400" fontSize="lg" mb={8} maxW="500px">
          Electronics & Instrumentation Engineer at NIT Rourkela. I bridge the gap between complex backend systems and beautiful user interfaces.
        </Text>

        <Stack direction="row" spacing={4} mb={8}>
            <Button 
                as="a" 
                href="#projects" 
                size="lg" 
                colorScheme="cyan" 
                variant="solid"
                bgGradient="linear(to-r, brand.100, brand.200)"
                _hover={{ bgGradient: "linear(to-r, brand.200, brand.100)" }}
            >
                View Projects
            </Button>
            <Button 
                as="a" 
                href="#contact" 
                size="lg" 
                colorScheme="gray" 
                variant="outline"
                _hover={{ bg: "whiteAlpha.200" }}
            >
                Contact Me
            </Button>
        </Stack>

        <Stack direction="row" wrap="wrap" spacing={2}>
            {techStack.map(tech => (
                <Badge 
                    key={tech} 
                    px={3} py={1} 
                    borderRadius="full" 
                    colorScheme="purple"
                    variant="subtle"
                    textTransform="none"
                    fontSize="0.9em"
                >
                    {tech}
                </Badge>
            ))}
        </Stack>
      </Box>

      {/* Right Content - Visual decoration to fill empty space */}
      <Box 
        className="hero-content"
        w={{ base: "100%", md: "400px" }}
        h="400px"
        bg="rgba(255, 255, 255, 0.02)"
        borderRadius="2xl"
        border="1px solid rgba(255, 255, 255, 0.1)"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        backdropFilter="blur(5px)"
      >
        <Text color="gray.600" textAlign="center">
           [ 3D Model / Avatar Placeholder ] <br/>
           (Replacing empty space)
        </Text>
      </Box>
    </Flex>
  )
}

export default Hero