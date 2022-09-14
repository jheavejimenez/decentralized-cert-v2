import React from "react";
import {Stack, Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function CustomButton({title, path}) {
    const navigate = useNavigate();
    return(
        <Stack spacing={4} direction={{base: 'column', md: 'row'}} w={'full'}>
            <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                flex={'1 0 auto'}
                _hover={{bg: 'blue.500'}}
                _focus={{bg: 'blue.500'}}
                onClick={() => navigate(path)}
            >
                {title}
            </Button>
        </Stack>
    )
}

export default CustomButton;