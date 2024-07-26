
import { Box, Flex, Img, Text } from '@chakra-ui/react'

const ReusableSkill = ({name, img, descripcion}) => {



    return(
        <>
            {/* <!-- HTML SKILL --> */}
            <Flex as='section'
            w='28%' p={'15px 20px'} m={'0px 5px 15px 5px'}
            direction='column' justify='center' alignItems='center'
            border='1px solid #000000'
            fontWeight='500'
            transition='0.3s'
            _hover={{
                border:'1px solid #f92139'
            }}>
                <Box as='container'
                w='fit-content'
                p='12px 12px'
                border='1px solid #ffffff'
                borderRadius='50%'>
                    <Img w='80px' src={img} alt="skillLogo"/>
                </Box>
                <Text as='h3' fontSize='30px' m='10px 0px'>
                    {name}
                </Text>
                <Text textAlign='justify' fontSize='14px'>{descripcion}</Text>
            </Flex>
        </>
    )
}

export default ReusableSkill