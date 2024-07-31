
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
                p={{base:'6px 6px', md:'12px 12px'}}
                m={{base:'0px 30px 10px 0px', md:'0'}}
                border='1px solid #ffffff'
                borderRadius='50%'>
                    <Img w={{base:'30px', mid:'50px', md:'70px', lg:'80px', '2xl':'100px', '3xl':'120px'}} src={img} alt="skillLogo"/>
                </Box>
                {/* // TITULO // */}
                <Text as='h3' fontSize={{base:'30px', '2xl':'36px', '3xl':'54px'}} m='10px 0px'>
                    {name}
                </Text>
                <Text textAlign='justify' fontSize={{base:'14px', '2xl':'24px', '3xl':'32px'}}>{descripcion}</Text>
            </Flex>
        </>
    )
}

export default ReusableSkill