import React, { useEffect, useRef } from 'react'
import { Box, Heading, Text, VStack, HStack, Circle, Flex, Badge, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    id: 1,
    role: "Web Development Lead",
    company: "Odisha Preps",
    type: "Internship",
    date: "May 2025 – July 2025",
    location: "Remote",
    description: [
      "Boosted user engagement by 40% with a 3D interactive landing page.",
      "Engineered a RAG chatbot improving response efficiency by 35% (automating 500+ queries).",
      "Reduced code redundancy by 50% through modular architecture.",
      "Led a 4-member Agile team, accelerating delivery by 25%."
    ],
    tech: ["React", "3D Web", "RAG", "Agile"]
  },
  {
    id: 2,
    role: "AI/ML Research Assistant",
    company: "NIT Rourkela",
    type: "Research Internship",
    date: "Dec 2024 – Feb 2025",
    location: "Rourkela, India",
    description: [
      "Architected a CNN model for Retinal Blood Vessel Segmentation achieving 0.92 AUC.",
      "Preprocessed 300+ fundus images using CLAHE and gamma correction.",
      "Co-authored a research paper submitted to an IEEE conference."
    ],
    tech: ["Python", "CNN", "OpenCV", "TensorFlow"]
  }
]

const Work = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".work-card", 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.3, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} w="100%" py={10} id="work">
      <Heading 
        as="h2" 
        size="xl" 
        mb={10} 
        textAlign="center" 
        color="brand.100" 
        textShadow="0 0 10px rgba(0,240,255,0.5)"
      >
        Work Experience
      </Heading>

      <VStack spacing={8} align="stretch" maxW="900px" mx="auto">
        {experiences.map((exp) => (
          <Flex 
            key={exp.id} 
            className="work-card" 
            bg="rgba(255, 255, 255, 0.03)" 
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="xl" 
            p={6} 
            position="relative"
            _hover={{ 
              borderColor: 'brand.200', 
              boxShadow: '0 0 20px rgba(112, 0, 255, 0.2)',
              transform: 'translateY(-5px)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Timeline Line (Visual Only) */}
            <Box 
              position="absolute" 
              left="-20px" 
              top="50%" 
              h="80%" 
              w="2px" 
              bgGradient="linear(to-b, brand.100, brand.200)" 
              transform="translateY(-50%)" 
              display={{ base: 'none', md: 'block' }} 
            />

            <Box w="100%">
              <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
                <Box>
                  <Heading size="md" color="white">{exp.role}</Heading>
                  <Text fontSize="lg" color="brand.100" fontWeight="bold">{exp.company}</Text>
                </Box>
                <Badge colorScheme="purple" p={2} borderRadius="md" variant="subtle">
                  {exp.date}
                </Badge>
              </Flex>

              <List spacing={2} mb={4}>
                {exp.description.map((item, idx) => (
                  <ListItem key={idx} color="gray.400" fontSize="sm" display="flex" alignItems="start">
                    <ListIcon as={MdCheckCircle} color="brand.300" mt={1} />
                    {item}
                  </ListItem>
                ))}
              </List>

              <HStack spacing={2} wrap="wrap">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="outline" colorScheme="cyan" fontSize="xs">
                    {t}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  )
}

export default Work