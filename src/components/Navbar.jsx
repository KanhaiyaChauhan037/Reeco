import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <Box bg="green.800" padding={"10px"}>
      <Flex
        fontSize={"18px"}
        color="white"
        w="90%"
        m="auto"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex gap={"40px"} alignItems={"center"}>
          <Text fontFamily={"cursive"} fontSize={"27px"}>
            Reeco
          </Text>
          <Text>Store</Text>
          <Text>Orders</Text>
          <Text>Analytics</Text>
        </Flex>
        <Flex gap="40px" alignItems={"center"}>
          <IoCartOutline fontSize={"19px"} />
          <Text>Name, James </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
