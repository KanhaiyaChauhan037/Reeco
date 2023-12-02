import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiPen } from "react-icons/ci";
const Orderpage2 = () => {
  return (
    <Box mt={"25px"}>
      <Flex m="auto" alignItems={"center"} justifyContent={"space-between"} padding="10px" border={"1px solid rgb(172, 168, 168)"} borderRadius={"10px"} w="90%" h="100px">
        <Box w="15%"  borderRight={"1px solid gray"} padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Suplier</Text>
          <Text fontSize={"17px"} fontWeight={"bold"}>East Cast Fruits & Vagetables </Text>
        </Box>
        <Box w="15%" h="70px"  borderRight={"1px solid gray"} padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Shipping Date</Text>
          <Text fontSize={"17px"} fontWeight={"bold"}>Thu, 10 Feb </Text>
        </Box> <Box w="15%" h="70px"  borderRight={"1px solid gray"} padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Total</Text>
          <Text fontSize={"17px"} fontWeight={"bold"}>15,098 </Text>
        </Box> <Box w="15%" h="70px"  borderRight={"1px solid gray"} padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Category</Text>
          {/* <Text fontSize={"17px"} fontWeight={"bold"}>East Cast Fruits & Vagetables </Text> */}
          <Flex mt="5px" alignItems={"center"} gap="25px">
          <CiPen /><CiPen /><CiPen /><CiPen /> 
          
          </Flex>
          <Flex mt="5px" alignItems={"center"} gap="25px">
          <CiPen /><CiPen /><CiPen /><CiPen /> 
          
          </Flex>

        </Box> <Box w="15%" h="70px"  borderRight={"1px solid gray"} padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Department</Text>
          <Text fontSize={"17px"} fontWeight={"bold"}>300 444 478 </Text>
        </Box> <Box w="15%"  padding={"0px 10px"}>
          <Text color={"gray"} fontWeight={"bold"} fontSize={"15px"}>Status</Text>
          <Text fontSize={"17px"}  fontWeight={"bold"}>Waiting for approval </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Orderpage2;
