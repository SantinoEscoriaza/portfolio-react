import { Box, Flex, Img, Text, Button, Link } from '@chakra-ui/react'

const Hero = () => {

        const curriculumPath = '../../public/files/CurriculumEjemplo.pdf'

    return(
        <Flex as='section' id="inicio" 
        justify='space-between' 
        pt='80px'>
            <Box as='section' p={{
                base:'10px 30px 10px 40px',
                sm:'20px 50px 20px 50px',
                lg:'60px 120px 20px 120px'
                }}>
                <Text as='h1' 
                fontSize={{base:'28px', sm:'32px', mid:'48px'}} 
                fontWeight='500' 
                lineHeight={{base:'36px', sm:'48px', mid:'60px'}}>Hola! Soy Santino Escoriaza</Text>
                <Text className="defaultText">
                    Soy estudiante de programación y en esta página encontrarás todo lo que necesitas saber sobre mi desempeño en la programación, mis proyectos y mis redes sociales.
                </Text>
                <Link href={curriculumPath} download><Button id="redButton">Descargar CV</Button></Link>
            </Box>
            <Img src="./img/imgFondoHero.png" 
            alt="Imagen de presentacion" 
            display={{ base:'none', md:'block'}}
            w='40%'
            h='100%'/>
        </Flex>
    )
}

export default Hero