import { Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard = ({id, name, image, symbol,price,currencySymbol="₹" }) => (
    <Link to={`/coin/${id}`}>
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
          <Image src={image} width={"28"} alt={name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" alignSelf={"center"}>
              {symbol}
            </Heading>
            <Divider />
            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price? `${currencySymbol}${price}`:`NA`}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );

export default CoinCard