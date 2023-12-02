import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Table,
  Th,
  Tr,
  Thead,
  Td,
  Tbody,
  Image,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import img from "../Avocado Hass.jpg";
import { useSelector, useDispatch } from "react-redux";
import { editdata, getdata } from "../redux/action";
import { CiSearch } from "react-icons/ci";
import { FaPrint } from "react-icons/fa";
import AddItem from "./AddItem";

const OrderPage = () => {
  const data = useSelector((state) => state.get);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductId1, setSelectedProductId1] = useState(null);
  const [da, setda] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  const openDialog = (productId) => {
    setSelectedProductId(productId);
    const opendata = data.find((el) => el.id === productId);
    console.log("open", opendata);
    setda(opendata);
    setSelectedProductId1(productId);
    onOpen();
  };

  const closeDialog = () => {
    setSelectedProductId(null);
    onClose();
  };

  const handleConfirm = (status, id) => {
    const updatedData = { ...da, status };
    dispatch(editdata(id, updatedData));

    closeDialog();
  };

  const handleConfirm1 = (status) => {
    const updatedData = { ...da, status };
    dispatch(editdata(selectedProductId1, updatedData));

    closeDialog();
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSearch = useRef(
    debounce((value) => {
      const results = data.filter(
        (el) =>
          el.title.toLowerCase().includes(value.toLowerCase()) ||
          el.brand.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }, 500)
  ).current;

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "green";
      case "missing":
        return "tomato";
      case "missing-urgent":
        return "red";
      default:
        return "inherit";
    }
  };

  return (
    <Box
      w="90%"
      // h="100vh"
      border={"1px solid rgb(172, 168, 168)"}
      m="auto"
      borderRadius={"10px"}
      mt="20px"
      padding="20px"
    >
      <Flex justifyContent={"space-between"}>
        <InputGroup w="40%">
          <Input type="text" placeholder="search by product name"  
            value={searchTerm}
            onChange={handleSearchChange}
          borderRadius={"20px"} />
          <InputRightAddon
            children={<CiSearch />}
            borderRadius={"0 20px 20px 0"}
          />
        </InputGroup>
        <Flex alignItems={"center"} gap={"30px"}>
         
        <Button  bg={"none"}
            h="33px"
            color="green.800"
            borderRadius={"20px"}
            border="1px solid green" >Add Item</Button>
        
          <FaPrint fontSize={"25px"} color="green" />
        </Flex>
      </Flex>

      <Table size="sm" mt="20px">
        <Thead>
          <Tr>
            <Th> </Th>
            <Th>Product Name</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
         {(searchTerm ? searchResults : data).map((el) => (
            <Tr key={el.id}>
              <Td>
                <Image w="45px" src={img} />
              </Td>
              <Td>{el.title}</Td>
              <Td>{el.brand}</Td>
              <Td>${el.Price}</Td>
              <Td>{el.quantity}</Td>
              <Td>${el.Price * el.quantity}</Td>
              <Td w="200px"
              >
                <Box  textAlign={"center"} style={{ backgroundColor: getStatusColor(el.status) }}
                fontSize={"15px"}
                color="white"
                // h="20px"
                padding="10px"
                borderRadius={"20px"}
                >

                {el.status}{" "}
                </Box>
              </Td>
              <Td>
                <Flex alignItems={"center"} gap="10px">
                  <FaCheck
                    fontSize={"20px"}
                    cursor={"pointer"}
                    onClick={() => handleConfirm("approved", el.id)}
                    style={{ color: getStatusColor(el.status) === "green" ? "green" : "inherit" }}
                  />
                  <RxCross2
                    fontSize={"20px"}
                    cursor={"pointer"}
                    onClick={() => openDialog(el.id)}
                    style={{
                      color: getStatusColor(el.status) === "red" || getStatusColor(el.status) === "tomato"
                        ? "red"
                        : "inherit"
                    }}
                  />
                <AddItem/>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Status
            </AlertDialogHeader>

            <AlertDialogBody>
              {`Do you want to mark the product as ${
                selectedProductId ? "Missing" : "Missing – Urgent"
              }?`}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => handleConfirm1("missing")}>
                No
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleConfirm1("missing-urgent")}
                ml={3}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default OrderPage;
