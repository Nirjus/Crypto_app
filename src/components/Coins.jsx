import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import Loader from "../components/Loader";
import CoinCard from "./CoinCard";
import { toast } from "react-toastify";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const pagination = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        toast.error("Error while loading content");
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);


  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup defaultValue="2" onChange={setCurrency} p={"8"}>
            <Stack spacing={5} direction="row">
              <Radio colorScheme="red" value="inr">
              INR
              </Radio>
              <Radio colorScheme="green" value="usd">
                USD
              </Radio>
              <Radio colorScheme="blue" value="eur">
                EUR
              </Radio>
            </Stack>
          </RadioGroup>
          <Text position={"absolute"} top={"24"} right={"10"} fontSize={"20px"} fontWeight={"extrabold"}>PAGE-{page}</Text>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.id}
                id={i.id}
                name={i.name}
                image={i.image}
                symbol={i.symbol}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"70%"} m={"auto"} overflow={"auto"} p={"8"}>
            {pagination.map((item, index) => (
              <Button
              key={index}

                bgColor={"whatsapp.500"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};


export default Coins;
