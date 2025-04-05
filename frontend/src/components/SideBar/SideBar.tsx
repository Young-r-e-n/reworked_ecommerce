import React, { useState } from 'react';
import { Box, Button, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, useBreakpointValue } from '@chakra-ui/react';

const SideBar = () => {
  // Use breakpoint value to toggle sidebar visibility on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const displaySidebar = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    <Box
      position="fixed"
      top="0"
      left={isSidebarOpen || displaySidebar === 'block' ? '0' : '-250px'}
      width="250px"
      height="100vh"
      backgroundColor="teal.500"
      transition="0.3s ease"
      p={4}
      zIndex="10"
    >
      {/* Toggle button */}
      <Button
        display={{ md: 'none' }}
        position="absolute"
        top="20px"
        left="20px"
        onClick={toggleSidebar}
        colorScheme="teal"
      >
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </Button>

      {/* Sidebar content */}
      <VStack align="start" spacing={6}>
        <Accordion allowToggle width="100%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text color="white" fontSize="lg" fontWeight="bold">
                    Category 1
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={2}>
                <Text color="white" fontSize="sm">Subcategory 1.1</Text>
                <Text color="white" fontSize="sm">Subcategory 1.2</Text>
                <Text color="white" fontSize="sm">Subcategory 1.3</Text>
              </VStack>
              <VStack align="start" spacing={2} mt={4}>
                <Text color="white" fontSize="sm">Service 1.1</Text>
                <Text color="white" fontSize="sm">Service 1.2</Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text color="white" fontSize="lg" fontWeight="bold">
                    Category 2
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={2}>
                <Text color="white" fontSize="sm">Subcategory 2.1</Text>
                <Text color="white" fontSize="sm">Subcategory 2.2</Text>
              </VStack>
              <VStack align="start" spacing={2} mt={4}>
                <Text color="white" fontSize="sm">Service 2.1</Text>
                <Text color="white" fontSize="sm">Service 2.2</Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default SideBar;
