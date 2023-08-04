import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
     <Box transform={"scale(3)"}>
     <Spinner
  thickness='4px'
  speed='0.4s'
  emptyColor='gray.200'
  color="whatsapp.500"
  size='xl'
/>
     </Box>
    </VStack>
  )
}

export default Loader