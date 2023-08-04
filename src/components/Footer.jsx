import { Avatar, Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import avatarSrc from "../assets/5556468.png"
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"}color={"whiteAlpha.900"}
      minH={"48"} px={"16"} py={["16","8"]}
    >
     <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center","flex-start"]}>
      <Text fontWeight={"bold"}>About us</Text>
      <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>Best Experiences ever! Make in INDIA app.
        Sbscribe for more.
      </Text>
      <HStack p={"2"}>
    <a href='https://facebook.com' target='_blank'> <AiFillFacebook size={"25"}/></a>
    <a href='https://instagram.com' target='_blank'> <AiFillInstagram  size={"25"}/> </a>
    <a href='https://linkedin.com' target='_blank'> <AiFillLinkedin size={"25"}/> </a>
    <a href='https://twitter.com' target='_blank'>  <AiFillTwitterSquare size={"25"}/> </a>

      </HStack>
        </VStack>
        <VStack w={["full","50%"]}>
  <Avatar boxSize={"28"} mt={["4","0"]} src={avatarSrc}/>
  <Text textTransform={"uppercase"}> Nirjus karmakar</Text>
        </VStack>
     </Stack>
    </Box>
  )
}

export default Footer