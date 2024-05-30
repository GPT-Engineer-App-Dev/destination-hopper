import { Box, Container, VStack, Text, Input, Button, HStack, Flex, Spacer, Image, Link, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search results
    const results = [
      {
        airline: "Airline A",
        departure: "10:00 AM",
        arrival: "12:00 PM",
        duration: "2h",
        price: "$200",
      },
      {
        airline: "Airline B",
        departure: "2:00 PM",
        arrival: "4:00 PM",
        duration: "2h",
        price: "$250",
      },
    ];
    setSearchResults(results);
  };

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
            <Input placeholder="Departure City" size="lg" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
            <Input placeholder="Destination City" size="lg" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
          </HStack>
          <HStack spacing={4} width="100%">
            <Input type="date" placeholder="Departure Date" size="lg" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
            <Input type="date" placeholder="Return Date (optional)" size="lg" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </HStack>
          <HStack spacing={4} width="100%">
            <Select placeholder="Number of Passengers" size="lg" value={passengers} onChange={(e) => setPassengers(e.target.value)}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </Select>
            <Button colorScheme="blue" size="lg" onClick={handleSearch}>Search</Button>
          </HStack>
        </VStack>
      </Container>

      {/* Search Results */}
      <Container maxW="container.xl" py={10}>
        {searchResults.length > 0 && (
          <>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Search Results</Text>
            <VStack spacing={4} width="100%">
              {searchResults.map((result, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
                  <Text fontSize="lg" fontWeight="bold">{result.airline}</Text>
                  <Text>Departure: {result.departure}</Text>
                  <Text>Arrival: {result.arrival}</Text>
                  <Text>Duration: {result.duration}</Text>
                  <Text>Price: {result.price}</Text>
                </Box>
              ))}
            </VStack>
          </>
        )}
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