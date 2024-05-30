import { Box, Container, VStack, Text, Button, HStack, Flex, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { flightDetails, passengerInfo, bookingReference } = location.state;

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    // Mock email functionality
    alert("Confirmation details have been sent to your email.");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Booking Confirmation</Text>
        <Text fontSize="lg">Thank you for your booking!</Text>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg" fontWeight="bold">Flight Details</Text>
          <Text>Airline: {flightDetails.airline}</Text>
          <Text>Departure: {flightDetails.departure}</Text>
          <Text>Arrival: {flightDetails.arrival}</Text>
          <Text>Duration: {flightDetails.duration}</Text>
          <Text>Price: {flightDetails.price}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg" fontWeight="bold">Passenger Information</Text>
          <Text>Name: {passengerInfo.name}</Text>
          <Text>Email: {passengerInfo.email}</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg" fontWeight="bold">Booking Reference</Text>
          <Text>{bookingReference}</Text>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handlePrint}>Print</Button>
          <Button colorScheme="blue" onClick={handleEmail}>Email</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;