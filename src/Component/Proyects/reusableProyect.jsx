import { Box, Img, Link, Text } from "@chakra-ui/react"


const ReusableProyect = ({name, desc, url, image}) => {


    return(
        // CONTENEDOR / LINK AL PROYECTO //
        <Link display='flex' 
        w='49%' h='100%'  
        justifyContent='space-between' 
        flexWrap='wrap' 
        border='1px solid transparent' 
        color='#000000' 
        transition='0.3s'
        _hover={{
            color:'#f92139',
            border:'1px solid #000000'
        }}
        href={url} 
        target="_blank">
                <Box w='45%' p='15px 15px 20px 25px'>
                    <Text as='h3' 
                    color='#000000'  
                    fontWeight='500' 
                    fontSize='22px' 
                    mb='12px'>
                        {name}
                    </Text>
                    <Text className="defaultText" fontSize='16px' mb='70px'>{desc}</Text>
                    <Text as='span' textDecoration='underline' textUnderlineOffset='8px' fontWeight='500'>Ver proyecto</Text>
                </Box>
                <Img w='50%' h='100%' src={image} alt="proyect-img"/>
        </Link>
    )
}

export default ReusableProyect