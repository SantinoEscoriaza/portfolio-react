import { Text, Img, Box, Flex, Wrap } from "@chakra-ui/react"


const ReusableTestimonio = ({name, image, testimonio}) => {


    return(
        // CONTENEDOR PRINCIPAL
        <Flex as='section'
        justify='space-between' 
        w={{base:'100%', md:'48%'}} 
        mb='10px'
        border='1px solid transparent'
        transition='0.3s'
        _hover={{
            border:'1px solid #000000'
        }}
        role="group">
            {/* CONTENEDOR IMAGEN */}
            <Box as='container' 
            w='30%' 
            display={{base:'none', mid:'block'}}
            transition='0.3s'
            _groupHover={{w:'32%'}}>
                <Img src={image} alt='ceo_image'/>
            </Box>

            {/* CONTENEDOR TEXTO */}
            <Wrap as='container' 
            w={{base:'100%', mid:'65%'}} 
            p={{base:'12px' , mid:'12px 10px 0px 0px'}}>
                <Text className="defaultText" 
                mb='0'
                transition='0.3s'
                _groupHover={{fontSize:{base:'18px', lg:'20px'}}}>
                    {testimonio}
                </Text>
                <Text as='h3' 
                fontWeight='500' 
                textAlign='right' 
                w='100%'
                transition='0.3s'
                _groupHover={{fontSize:{base:'18px', lg:'18px'}}}>
                    {name}
                </Text>
            </Wrap>
        </Flex>
    )
}

export default ReusableTestimonio