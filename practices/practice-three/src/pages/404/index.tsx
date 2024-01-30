import { Box, Heading, Text, Center, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Center height="100vh">
      <Box>
        <Heading fontSize="6xl" color="red.500">
          404
        </Heading>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Page not found
        </Text>
        <Text fontSize="lg" color="gray.600">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link to={'/'}>
          <Button my="4" variant="solid">
            Back home page
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default NotFoundPage;
