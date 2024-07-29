import { Box, Img, Link, Text } from "@chakra-ui/react"


const ReusableProyect = ({name, desc, url, image}) => {


    return(
        // CONTENEDOR / LINK AL PROYECTO //
        <Link display='flex' 
        w={{base:'100%', md:'49%'}} h='100%'  
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
                <Box w={{base:'100%', mid:'45%'}} p='15px 15px 20px 25px'>
                    <Text as='h3' 
                    color='#000000'  
                    fontWeight='500' 
                    fontSize='22px' 
                    mb='12px'>
                        {name}
                    </Text>
                    <Text className="defaultText" fontSize='16px' mb={{base:'20px', lg:'30px', xl:'70px'}}>{desc}</Text>
                    <Text as='span' textDecoration='underline' textUnderlineOffset='8px' fontWeight='500'>Ver proyecto</Text>
                </Box>
                <Img src={image}
                w={{base:'40%', md:'50%'}} h='100%' 
                display={{base:'none', mid:'block'}}
                alt="proyect-img"/>
        </Link>
    )
}

export default ReusableProyect