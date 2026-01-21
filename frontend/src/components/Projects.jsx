import React, { useEffect, useRef } from 'react'
import { Box, Heading, Text, SimpleGrid, Badge, Button, Flex, Image, Link } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VanillaTilt from 'vanilla-tilt'

gsap.registerPlugin(ScrollTrigger)

const projectList = [
  {
    title: "SwasthyaSetu",
    desc: "A comprehensive health awareness platform bridging the gap between medical info and the public.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/apurb2509/SwasthyaSetu.git",
    color: "green.400"
  },
  {
    title: "CiviQ",
    desc: "Civic reporting platform empowering citizens to report and track local infrastructure issues.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/apurb2509/civiqapp",
    color: "orange.400"
  },
  {
    title: "Simplix AI",
    desc: "Chrome extension that uses AI to summarize and process web content via smart cropping.",
    tech: ["JavaScript", "Chrome API", "OpenAI API"],
    github: "https://github.com/apurb2509/simplixai",
    color: "cyan.400"
  },
  {
    title: "CarCareAI",
    desc: "Centralized platform for automotive service stations with AI-driven diagnostics.",
    tech: ["MERN Stack", "TensorFlow.js", "Tailwind"],
    github: "https://github.com/apurb2509/CarCareAI.git",
    color: "red.400"
  },
  {
    title: "Wai-Wai",
    desc: "AI-powered job description generator and recruitment assistant tool.",
    tech: ["Next.js", "GPT-4", "Tailwind CSS"],
    github: "https://github.com/apurb2509", // Placeholder
    color: "purple.400"
  }
]

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Initialize VanillaTilt for 3D hover effect
    VanillaTilt.init(cardsRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.05
    })

    // GSAP Scroll Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(".project-card",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} w="100%" py={10} id="projects">
      <Heading 
        as="h2" 
        size="xl" 
        mb={12} 
        textAlign="center" 
        color="brand.100"
        textShadow="0 0 10px rgba(0,240,255,0.5)"
      >
        Featured Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projectList.map((project, idx) => (
          <Box
            key={project.title}
            ref={el => cardsRef.current[idx] = el}
            className="project-card"
            bg="rgba(20, 20, 30, 0.6)"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            p={6}
            border="1px solid rgba(255,255,255,0.1)"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '5px',
              bg: project.color
            }}
          >
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="md" color="white">{project.title}</Heading>
              <Link href={project.github} isExternal>
                <Box as={FaGithub} size="24px" color="gray.400" _hover={{ color: "white" }} />
              </Link>
            </Flex>

            <Text color="gray.400" fontSize="sm" mb={6} minH="60px">
              {project.desc}
            </Text>

            <Flex wrap="wrap" gap={2} mb={6}>
              {project.tech.map(t => (
                <Badge key={t} colorScheme="whiteAlpha" variant="outline" fontSize="xs">
                  {t}
                </Badge>
              ))}
            </Flex>

            <Button 
              as={Link} 
              href={project.github} 
              isExternal
              size="sm" 
              width="full" 
              rightIcon={<FaExternalLinkAlt />}
              colorScheme="cyan" 
              variant="outline"
              _hover={{ bg: "brand.100", color: "black" }}
            >
              View Code
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects