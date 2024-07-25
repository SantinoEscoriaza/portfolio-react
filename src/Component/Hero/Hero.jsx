import { Box, Flex, Img, Text, Button } from '@chakra-ui/react'

const Hero = () => {


    return(
        <Flex as='section' id="inicio" justify='space-between'>
            <Box p='60px 120px 0px 120px'>
                <Text as='h1' fontSize='48px' fontWeight='500' lineHeight='60px'>Hola! Soy Santino Escoriaza</Text>
                <Text className="defaultText">Soy estudiante de programación y en esta página encontrarás todo lo que necesitas saber sobre mi desempeño en la programación, mis proyectos y mis redes sociales.</Text>
                <Button id="redButton">Descargar CV</Button>
            </Box>
            <Img src="./img/imgFondoHero.png" 
            alt="Imagen de presentacion" 
            display={{ base:'none', md:'block'}}
            w='35%'
            h='100%'/>
        </Flex>
    )
}

export default Hero