import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Spacer, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box bg="blue.600" color="white" px={4} py={2}>
        <Flex align="center">
          <Text fontSize="2xl" fontWeight="bold">TravelBooking</Text>
          <Spacer />
          <HStack spacing={8}>
            <Link href="#" fontSize="lg">Home</Link>
            <Link href="#" fontSize="lg">Destinations</Link>
            <Link href="#" fontSize="lg">Bookings</Link>
            <Link href="#" fontSize="lg">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Search Bar */}
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4} width="100%">
          <Text fontSize="3xl" fontWeight="bold">Find Your Perfect Trip</Text>
          <HStack spacing={4} width="100%">
            <Input placeholder="Search for flights, hotels, car rentals..." size="lg" />
            <Button colorScheme="blue" size="lg">Search</Button>
          </HStack>
        </VStack>
      </Container>

      {/* Featured Destinations */}
      <Container maxW="container.xl" py={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Featured Destinations</Text>
        <Flex wrap="wrap" justify="space-around">
          <Box width="300px" mb={8}>
            <Image src="https://via.placeholder.com/300" alt="Destination 1" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 1</Text>
          </Box>
          <Box width="300px" mb={8}>
            <Image src="https://via.placeholder.com/300" alt="Destination 2" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 2</Text>
          </Box>
          <Box width="300px" mb={8}>
            <Image src="https://via.placeholder.com/300" alt="Destination 3" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">Destination 3</Text>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" wrap="wrap">
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>TravelBooking</Text>
              <Text>© 2023 TravelBooking. All rights reserved.</Text>
            </Box>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook size="24px" /></Link>
              <Link href="#"><FaTwitter size="24px" /></Link>
              <Link href="#"><FaInstagram size="24px" /></Link>
            </HStack>
            <HStack spacing={8}>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Privacy Policy</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;