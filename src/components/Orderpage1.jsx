import React from "react";
import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react";
const Orderpage1 = () => {
  return (
    <Box
    
      h="100px"
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    >
      <Box  h="100px" m="auto" w="90%" padding={"10px"}>
        <Text fontWeight={"500"} color={"gray"}>
          Orders{" > "}
          <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
        </Text>
        <Flex mt="18px" alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"23px"} fontWeight={"bold"}>
            Order 32457ABC
          </Text>
          <Flex alignItems={"center"} gap="15px">
            {" "}
            <Button
              bg={"none"}
              width={"80px"}
              h="33px"
              color="green.800"
              borderRadius={"20px"}
              border="1px solid green"
            >
              Back
            </Button>
            <Button
              bg="green.800"
              color="white"
              h="33px"
              fontSize={"15px"}
              borderRadius={"20px"}
              border="1px solid gray"
            >
              Approve order
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Orderpage1;
