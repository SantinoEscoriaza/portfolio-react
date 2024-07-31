import { Button, Flex, Img, Link, Text } from "@chakra-ui/react"

const Footer = () => {


    return(
        <Flex as='footer' 
        justify='space-around' 
        align='center' 
        bgColor='#000000' 
        color='#ffffff' 
        fontSize='16px' 
        h='120px'>

            <Link href="#">
                <Img w={{
                    base:'50px', 
                    '2xl':'60px', 
                    '3xl':'70px'}} src="icons/logoPortfolio.svg" alt="miLogo"/>
            </Link>

            <Text 
            textAlign={{base:'center', mid:'left'}} 
            fontSize={{
                base:'14px', 
                mid:'16px', 
                md:'20px',
                '2xl':'24px', 
                '3xl':'30px'}}>
                © Todos los derechos reservados | 2024
            </Text>

            <Link href="#inicio">
                <Button p={{
                    base:'8px', 
                    '2xl':'10px', 
                    '3xl':'12px'
                }} 
                border='1px solid #ffffff' 
                borderRadius='2px' 
                color='#ffffff' 
                bgColor='#000000' 
                _hover={{
                    color:'#000000',
                    bgColor:'#ffffff'
                }}><i className="bi bi-arrow-up"></i></Button>
            </Link>
        </Flex>
    )
}

export default Footer