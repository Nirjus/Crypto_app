import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Card,
  CardBody,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setErrors(false);
          toast.error("Error while loading Exchanges");
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);


  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                image={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, image, rank, url }) => (
  <a href={url} target="blank">
    <Card
    variant={"filled"}
      w={"52"}
      transition={"all 0.28s"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      m={"4"}
    >
      <CardBody
        shadow={"lg"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={image} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md" alignSelf={"center"}>
            {rank}
          </Heading>
          <Divider />
          <Text noOfLines={1}>{name}</Text>
        </Stack>
      </CardBody>
    </Card>
  </a>
);

export default Exchanges;
