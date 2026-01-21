import React, { useEffect, useRef, useState } from 'react'
import { Box, Heading, Text, VStack, Input, Textarea, Button, HStack, IconButton, useToast, Container, Flex } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const toast = useToast()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
      variant: "solid"
    })
    
    setFormData({ name: '', email: '', message: '' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/apurb2509", color: "gray.200" },
    { icon: FaLinkedin, link: "https://linkedin.com/in", color: "#0077b5" },
    { icon: FaTwitter, link: "https://twitter.com", color: "#1DA1F2" },
    { icon: FaInstagram, link: "https://instagram.com", color: "#E1306C" },
    { icon: FaEnvelope, link: "mailto:your-email@gmail.com", color: "#EA4335" }
  ]

  return (
    <Box ref={sectionRef} w="100%" py={16} id="contact">
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} gap={10} justify="center">
          
          <Box flex={1} className="contact-content">
            <Heading as="h2" size="2xl" mb={4} color="brand.100" textShadow="0 0 10px rgba(0,240,255,0.5)">
              Let's Connect
            </Heading>
            <Text fontSize="lg" color="gray.400" mb={8}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </Text>
            <HStack spacing={4} mt={4}>
              {socialLinks.map((social, idx) => (
                <IconButton
                  key={idx}
                  as="a"
                  href={social.link}
                  target="_blank"
                  aria-label="Social Link"
                  icon={<social.icon size="24px" />}
                  bg="rgba(255,255,255,0.05)"
                  color={social.color}
                  _hover={{ bg: social.color, color: "white", transform: "translateY(-3px)", boxShadow: `0 0 15px ${social.color}` }}
                  borderRadius="full"
                  size="lg"
                  transition="all 0.3s"
                />
              ))}
            </HStack>
          </Box>

          <Box flex={1} as="form" onSubmit={handleSubmit} className="contact-content" bg="rgba(11, 11, 11, 0.6)" backdropFilter="blur(10px)" p={8} borderRadius="xl" border="1px solid rgba(255,255,255,0.1)">
            <VStack spacing={4}>
              <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} bg="whiteAlpha.100" border="none" _focus={{ boxShadow: "0 0 0 2px #00F0FF", bg: "whiteAlpha.200" }} />
              <Input placeholder="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} bg="whiteAlpha.100" border="none" _focus={{ boxShadow: "0 0 0 2px #00F0FF", bg: "whiteAlpha.200" }} />
              <Textarea placeholder="Write your message..." name="message" value={formData.message} onChange={handleChange} bg="whiteAlpha.100" border="none" rows={5} _focus={{ boxShadow: "0 0 0 2px #00F0FF", bg: "whiteAlpha.200" }} />
              <Button type="submit" width="full" colorScheme="cyan" variant="solid" bgGradient="linear(to-r, brand.100, brand.200)" _hover={{ bgGradient: "linear(to-r, brand.200, brand.100)", boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }} color="black">
                Send Message
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Contact