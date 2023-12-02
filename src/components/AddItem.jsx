import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Button,FormControl,Input,FormLabel,Text
  } from '@chakra-ui/react'
const AddItem=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        {/* <Button  bg={"none"}
            h="33px"
            color="green.800"
            borderRadius={"20px"}
            border="1px solid green" onClick={onOpen}>Add Item</Button> */}
            <Text onClick={onOpen}>Edit</Text>
      
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={"center"}>Edit price</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
             Edit functionality
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddItem;