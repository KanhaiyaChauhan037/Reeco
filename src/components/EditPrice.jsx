import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import img from "../Avocado Hass.jpg";
import { editprice } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
const EditPrice = ({ data, id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [price, setPrice] = useState(data.find((el) => el.id === id).Price);
  const [price, setPrice] = useState(() => {
    const product = data.find((el) => el.id === id);
    return product["updated-price"] !== null
      ? product["updated-price"]
      : product.Price;
  });

  const [quantity, setQuantity] = useState(
    data.find((el) => el.id === id).quantity
  );
  const [selectedReason, setSelectedReason] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  // console.log("data", data, id);

  const filterdata = data.find((el) => el.id === id);
  // console.log("filter", filterdata);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    const da = {
      ...filterdata,
      "updated-price": price,
      reason: selectedReason,
      quantity
      
    };
    dispatch(editprice(id, da));
    console.log("Updated Price:", price);
    console.log("Updated Quantity:", quantity);
    console.log("Selected Reason:", selectedReason);
    onClose();
  };

  return (
    <>
      <Text cursor={"pointer"} onClick={onOpen}>
        Edit
      </Text>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"2xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit price</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <Box>
                <Text fontSize={"18px"} fontWeight={"bold"}>
                  {filterdata.title}
                </Text>
                <Text fontSize={"15px"} fontWeight={"bold"} color="gray">
                  {filterdata.brand}
                </Text>
              </Box>
              <Flex gap="10px" mt="10px">
                <Box>
                  <Image w="150px" src={img} />
                </Box>
                <Box>
                  <Flex alignItems={"center"} gap="60px">
                    <FormLabel>Price:</FormLabel>
                    <Input
                      value={price}
                      type="number"
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Flex>
                  <Flex mt="20px" gap="40px">
                    <FormLabel>Quantity:</FormLabel>
                    <Flex alignItems={"center"} gap="10px">
                      <Box
                        bg="green"
                        fontWeight={"bold"}
                        color="white"
                        borderRadius={"50%"}
                        padding="5px"
                        onClick={handleDecrement}
                      >
                        -
                      </Box>
                      <Input
                        w="100px"
                        value={quantity}
                        type="number"
                        placeholder="quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <Box
                        fontWeight={"bold"}
                        bg="green"
                        color="white"
                        borderRadius={"50%"}
                        padding="5px"
                        onClick={handleIncrement}
                      >
                        +
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex mt="20px" gap="60px">
                    <FormLabel>Total:</FormLabel>
                    <Text>${price * quantity}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text fontWeight={"bold"} color="black">
                Choose Reason
              </Text>
              <Flex mt="10px" gap="10px">
                <Text
                  border="1px solid gray"
                  padding="3px 10px 3px 10px"
                  borderRadius="20px"
                  fontSize="14px"
                  onClick={() => setSelectedReason("Missing Product")}
                  style={{
                    backgroundColor:
                      selectedReason === "Missing Product"
                        ? "green"
                        : "transparent",
                  }}
                >
                  Missing Product
                </Text>
                <Text
                  border="1px solid gray"
                  padding="3px 10px 3px 10px"
                  borderRadius="20px"
                  fontSize="14px"
                  onClick={() => setSelectedReason("Price is not the same")}
                  style={{
                    backgroundColor:
                      selectedReason === "Price is not the same"
                        ? "green"
                        : "transparent",
                  }}
                >
                  Price is not the same
                </Text>
                <Text
                  border="1px solid gray"
                  padding="3px 10px 3px 10px"
                  borderRadius="20px"
                  fontSize="14px"
                  onClick={() => setSelectedReason("Quantity is not the same")}
                  style={{
                    backgroundColor:
                      selectedReason === "Quantity is not the same"
                        ? "green"
                        : "transparent",
                  }}
                >
                  Quantity is not the same
                </Text>
                <Text
                  border="1px solid gray"
                  padding="3px 10px 3px 10px"
                  borderRadius="20px"
                  fontSize="14px"
                  onClick={() => setSelectedReason("Other")}
                  style={{
                    backgroundColor:
                      selectedReason === "Other" ? "green" : "transparent",
                  }}
                >
                  Other
                </Text>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPrice;
