import React from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('rgb(255,253,247)'),
        }}
        >
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    return (
        <div style={{"z-index":"1", position :"sticky", top :"0"}}>
            <Box bg={useColorModeValue("rgb(255,253,247)")} px={4} w="100%">
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Box onClick={() => { navigate("/") }}>
                        <Image w='110px' src="https://i.pcmag.com/imagery/reviews/03ma1UjS5TueJFtNVB4ElDn-8.fit_scale.size_1028x578.v1649255757.png" alt="logo"/>
                    </Box>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Text>
                            <Link to="/plans">Plans & Menu</Link>
                        </Text>
                        <Text>How it Works</Text>
                        <Text>Gifts</Text>
                        <Text>Refer a Friend</Text>
                        <Text>Help</Text>
                    </HStack>
                    <Flex gap="5" alignItems={"center"}>
                        <Text>
                            <Link to="/login">Login</Link>
                        </Text>
                        <Button
                            variant={"solid"}
                            colorScheme={"blue"}
                            size={"sm"}
                            mr={4}
                            borderRadius="none"
                        >
                            Sign Up
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            <Text>Plans & Menu</Text>
                            <Text>How it Works</Text>
                            <Text>Gifts</Text>
                            <Text>Refer a Friend</Text>
                            <Text>Help</Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </div>
    );
}
