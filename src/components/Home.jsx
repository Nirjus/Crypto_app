import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/roket.png";
import img2 from "../assets/—Pngtree—business marketing 3d graphs diagrams_7555065.png";
import img3 from "../assets/—Pngtree—success with bitcoin_6599588.png";
import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <Box w={"full"} h={"full"}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant={"filled"}
      >
        <Image
          objectFit="contain"
          w={"40vw"}
          src={img1}
          alignSelf={"center"}
          alt="Roket"
          m={"5"}
          className="imge1"
        />

        <Stack>
          <CardBody>
            <Heading
              size={"3xl"}
              color={"blueviolet"}
              fontFamily={"fantasy"}
              fontWeight={"thin"}
              textTransform={"uppercase"}
              fontStyle={"italic"}
              p={"5"}
              mt={["2", "20"]}
            >
              Your Smart Crypto Market
            </Heading>

            <Text
              py="2"
              fontFamily={"cursive"}
              fontWeight={"bold"}
              m={"4"}
              p={["5", "10"]}
            >
              Buy and sell 250+ cryptocurrencies with USD and 20+ other fiat
              currencies using bank transfers or your credit/debit card.
            </Text>
          </CardBody>

          <CardFooter>
            <Button colorScheme={"whatsapp"}>
              <Link to={"/coins"}>Crypto</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <HStack w={"full"} h={"auto"} p={"4"}>
        <Image src={img3} w={"50%"} h={"full"} objectFit={"contain"} />
        <Image src={img2} w={"50%"} h={"full"} objectFit={"contain"} />
      </HStack>
      <Text
        fontSize={["2xl", "6xl"]}
        textAlign={"center"}
        fontWeight={"bold"}
        mt={"-10"}
        mr={["40%", "20%"]}
      >
        Crypto Buzz
      </Text>
    </Box>
  );
};

export default Home;
