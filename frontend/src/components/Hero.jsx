import React, { useEffect, useRef } from 'react'
import { Box, Heading, Text, Badge, Wrap, WrapItem } from '@chakra-ui/react'
import { gsap } from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)

  const techStack = [
    "React", "Node.js", "Next.js", "Java", "Python", "C++", "AI/ML", "GSAP", "Three.js"
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the container fade in
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Stagger animate text elements
      gsap.fromTo(".hero-text",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)", delay: 0.5 }
      )
      
      // Animate badges
      gsap.fromTo(".tech-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, delay: 1.2, ease: "elastic.out(1, 0.5)" }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box 
      ref={containerRef}
      w="100%" 
      minH="80vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Box 
        p={8} 
        borderRadius="xl" 
        bg="rgba(11, 11, 11, 0.6)" 
        backdropFilter="blur(10px)" 
        border="1px solid rgba(0, 240, 255, 0.2)"
        boxShadow="0 0 20px rgba(0, 240, 255, 0.1)"
        maxW="800px"
      >
        <Heading 
          as="h1" 
          size="2xl" 
          className="hero-text" 
          bgGradient="linear(to-r, brand.100, brand.200)" 
          bgClip="text"
          mb={2}
        >
          Apurb Susobhit Baba
        </Heading>

        <Heading as="h2" size="md" color="gray.300" className="hero-text" mb={4}>
          Software Developer & AI Enthusiast
        </Heading>

        <Text fontSize="lg" color="gray.400" className="hero-text" mb={2}>
          B.Tech in Electronics and Instrumentation Engineering
        </Text>
        
        <Text fontSize="md" color="brand.100" className="hero-text" mb={6} fontWeight="bold">
          NIT Rourkela
        </Text>

        <Text className="hero-text" mb={3} color="gray.500" fontSize="sm">
          TECH STACK
        </Text>

        <Wrap spacing={3} className="hero-text">
          {techStack.map((tech) => (
            <WrapItem key={tech}>
              <Badge 
                className="tech-badge"
                colorScheme="cyan" 
                variant="outline" 
                fontSize="0.9em" 
                p={2} 
                borderRadius="md"
                _hover={{ bg: 'brand.100', color: 'black', transform: 'scale(1.1)', transition: 'all 0.2s' }}
                cursor="default"
              >
                {tech}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  )
}

export default Hero