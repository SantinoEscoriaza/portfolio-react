import { Text, Img, Box, Link, Wrap } from "@chakra-ui/react"


const ReusableTestimonio = ({name, image, testimonio}) => {


    return(
        // CONTENEDOR PRINCIPAL
        <Link as='section'
        display='flex'
        justifyContent='space-between' 
        w='48%' 
        mb='10px'
        border='1px solid transparent'
        transition='0.3s'
        _hover={{
            border:'1px solid #000000'
        }}>
            {/* CONTENEDOR IMAGEN */}
            <Box as='container' w='30%'>
                <Img src={image} alt='ceo_image'/>
            </Box>

            {/* CONTENEDOR TEXTO */}
            <Wrap as='container' w='65%' p='12px 10px 0px 0px'>
                <Text className="defaultText" mb='0'>{testimonio}</Text>
                <Text as='h3' fontWeight='500' textAlign='right' w='100%'>{name}</Text>
            </Wrap>
        </Link>
    )
}

export default ReusableTestimonio