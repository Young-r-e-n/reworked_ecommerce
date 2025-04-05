import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bg} color={textColor} mt={10}>
      <Divider />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        px={{ base: 4, md: 10 }}
        py={10}
      >
        {/* About */}
        <Box mb={{ base: 6, md: 0 }} flex="1">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Didi
          </Text>
          <Text fontSize="sm">
            Your trusted online store for electronics, fashion, and more. Experience hassle-free shopping with great deals every day.
          </Text>
        </Box>
  
        {/* Customer Service */}
        <Stack spacing={2} mb={{ base: 6, md: 0 }} flex="1">
          <Text fontWeight="bold" mb={2}>
            Customer Service
          </Text>
          <Link href="#">Contact Us</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Shipping Info</Link>
          <Link href="#">FAQs</Link>
        </Stack>
  
        {/* Categories */}
        <Stack spacing={2} mb={{ base: 6, md: 0 }} flex="1">
          <Text fontWeight="bold" mb={2}>
            Categories
          </Text>
          <Link href="#">Electronics</Link>
          <Link href="#">Fashion</Link>
          <Link href="#">Home & Garden</Link>
          <Link href="#">Toys</Link>
        </Stack>
  
        {/* Services & Reservations */}
        <Stack spacing={2} mb={{ base: 6, md: 0 }} flex="1">
          <Text fontWeight="bold" mb={2}>
            Services & Reservations
          </Text>
          <Link href="#">Book an Appointment</Link>
          <Link href="#">Schedule a Service</Link>
          <Link href="#">Consultation</Link>
          <Link href="#">Spa & Wellness</Link>
        </Stack>
  
        {/* Social Media */}
        <Stack spacing={2} flex="1">
          <Text fontWeight="bold" mb={2}>
            Follow Us
          </Text>
          <Flex gap={2}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              as="a"
              href="#"
              variant="ghost"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              as="a"
              href="#"
              variant="ghost"
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              as="a"
              href="#"
              variant="ghost"
            />
          </Flex>
        </Stack>
      </Flex>
      <Box textAlign="center" py={4} fontSize="sm" color="gray.500">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </Box>
    </Box>
  );
}  

export default Footer;
