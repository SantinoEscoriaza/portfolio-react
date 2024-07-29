
import { Box, Flex, Img, Text } from '@chakra-ui/react'

const ReusableSkill = ({name, img, descripcion}) => {



    return(
        <>
            {/* // CONTENEDOR // */}
            <Flex as='section'
            w={{base:'100%',md:'45%', lg:'32%'}} 
            p='15px 20px' 
            m='0px 5px 15px 5px'
            direction={{base:'row', md:'column'}} 
            justify={{base:'', md:'center'}}
            alignItems='center'
            wrap={{base:'wrap', md:'nowrap'}}
            border='1px solid #000000'
            fontWeight='500'
            transition='0.3s'
            _hover={{
                border:'1px solid #f92139'
            }}>
                {/* // CONTENEDOR DEL LOGO // */}
                <Box as='container'
                w='fit-content'
                p='12px 12px'
                m={{base:'0px 30px 10px 0px', md:'0'}}
                border='1px solid #ffffff'
                borderRadius='50%'>
                    <Img w='80px' src={img} alt="skillLogo"/>
                </Box>
                {/* // TITULO // */}
                <Text as='h3' fontSize='30px' m='10px 0px'>
                    {name}
                </Text>
                <Text textAlign='justify' fontSize='14px'>{descripcion}</Text>
            </Flex>
        </>
    )
}

export default ReusableSkill