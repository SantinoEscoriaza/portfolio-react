import { Button, Flex, Img, Link, Text } from "@chakra-ui/react"

const Footer = () => {


    return(
        <Flex as='footer' justify='space-around' align='center' bgColor='#000000' color='#ffffff' fontSize='16px' h='120px'>
            <Link href="#"><Img w='50px' src="icons/logoPortfolio.svg" alt="miLogo"/></Link>
            <Text>© Todos los derechos reservados | 2024</Text>
            <Link href="#headerid">
                <Button p='8px' 
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