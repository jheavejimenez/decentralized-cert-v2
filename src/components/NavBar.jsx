import {Avatar, Box, Button, Flex, HStack, Menu, MenuButton, useColorModeValue,} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import React from "react";
import {UserContext} from "../context/UserContext";

const Links = {
    Dashboard: {
        href: "/",
    },
    Certificates: {
        href: "/certificates",
    }
}

function NavigationBar() {
    const {user} = React.useContext(UserContext);
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><strong>XPERTO</strong></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Object.entries(Links).map(([name, {href}]) => (
                                <Link
                                    to={href}
                                    key={name}
                                >{name}</Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {user.id ? (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                </MenuButton>
                            </Menu>
                        ) : (
                            <Button
                                as={Link}
                                to="/sign-in"
                            >
                                Sign In
                            </Button>
                        )
                        }
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default NavigationBar;
