import React, { useEffect, useRef } from 'react'
import { Box, Heading, Text, SimpleGrid, Link, Tag, HStack, Image, Flex } from '@chakra-ui/react'
import { FaMedium, FaArrowRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blogPosts = [
  {
    id: 1,
    title: "AI in Healthcare: Bridging the Gap",
    summary: "Exploring how machine learning models like the one used in SwasthyaSetu can revolutionize rural healthcare diagnostics.",
    date: "Oct 15, 2025",
    platform: "Medium",
    link: "#", // Replace with actual link
    tags: ["AI", "Healthcare", "Tech"]
  },
  {
    id: 2,
    title: "Understanding React Fiber Architecture",
    summary: "A deep dive into how React handles rendering and reconciliation to create smooth, responsive user interfaces.",
    date: "Nov 22, 2025",
    platform: "Dev.to",
    link: "#", // Replace with actual link
    tags: ["React", "Frontend", "Performance"]
  },
  {
    id: 3,
    title: "Building Scalable Chrome Extensions",
    summary: "Lessons learned from developing Simplix AI: Handling DOM manipulation and API integration efficiently.",
    date: "Jan 10, 2026",
    platform: "Hashnode",
    link: "#", // Replace with actual link
    tags: ["JavaScript", "Chrome", "Extensions"]
  }
]

const Blogs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} w="100%" py={10} id="blogs">
      <Heading 
        as="h2" 
        size="xl" 
        mb={10} 
        textAlign="center" 
        color="brand.100"
        textShadow="0 0 10px rgba(0,240,255,0.5)"
      >
        Recent Thoughts
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {blogPosts.map((post) => (
          <Link 
            key={post.id} 
            href={post.link} 
            isExternal 
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              className="blog-card"
              bg="rgba(11, 11, 11, 0.8)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={6}
              height="100%"
              transition="all 0.3s ease"
              _hover={{ 
                transform: 'translateY(-10px)', 
                borderColor: 'brand.200',
                boxShadow: '0 10px 30px -10px rgba(112, 0, 255, 0.3)' 
              }}
            >
              <Flex justify="space-between" align="center" mb={4}>
                <Tag size="sm" colorScheme="purple">{post.platform}</Tag>
                <Text fontSize="xs" color="gray.500">{post.date}</Text>
              </Flex>

              <Heading size="md" mb={3} color="white" _hover={{ color: "brand.100" }}>
                {post.title}
              </Heading>

              <Text fontSize="sm" color="gray.400" mb={4} noOfLines={3}>
                {post.summary}
              </Text>

              <HStack spacing={2} mb={4}>
                {post.tags.map(tag => (
                  <Tag key={tag} size="sm" variant="subtle" colorScheme="cyan" opacity={0.7}>
                    #{tag}
                  </Tag>
                ))}
              </HStack>

              <Flex align="center" color="brand.100" fontSize="sm" fontWeight="bold">
                Read Article <Box as={FaArrowRight} ml={2} />
              </Flex>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Blogs