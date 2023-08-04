import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome,} from "react-icons/ai"
import { BsCurrencyExchange } from "react-icons/bs"
import { FaBitcoin } from 'react-icons/fa'
const Header = () => {
  return (
   <HStack p={"4"} shadow={"base"} bgColor={"whatsapp.500"}>
      <Link to={"/"}><Button variant={"ghost"} flexDirection={"column"}>
        <AiFillHome size={25}/><Text fontSize={"10px"}>Home</Text>
      </Button></Link>
      <Link to={"/exchanges"}><Button variant={"ghost"} flexDirection={"column"} >
        <BsCurrencyExchange size={25}/><Text fontSize={"10px"}>Exchange</Text>
      </Button></Link>
      <Link to={"/coins"}><Button variant={"ghost"} flexDirection={"column"}>
       <FaBitcoin size={25}/><Text fontSize={"10px"}>Coins</Text>
      </Button></Link>
   </HStack>
  )
}

export default Header