import { useRef } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { AddIcon } from "@chakra-ui/icons";
import homeService, { Group } from "../../pages/home/services/homeService";

interface Props {
  onAddGroup: (group: Group) => void;
}

function AddGroup({ onAddGroup }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef<HTMLInputElement>(null);

  const onSaveGroup = () => {
    homeService
      .addGroup(initialRef.current?.value as string)
      .then(({ data: { data } }) => {
        onAddGroup({
          __v: data?.__v,
          _id: data?._id,
          title: data?.title,
        });
        onClose();
      });
  };

  return (
    <>
      <Box
        onClick={onOpen}
        bg="gray.500"
        borderRadius="50%"
        width={30}
        height={30}
        placeItems={"center"}
        textAlign={"center"}
        position="sticky"
        left="100%"
        top="10px"
        marginBottom={1}
        opacity={"0.5"}
      >
        <AddIcon />
      </Box>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="title" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSaveGroup}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddGroup;
