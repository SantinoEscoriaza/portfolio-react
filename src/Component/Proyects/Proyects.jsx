import { Button, Flex, Link, Text, Wrap } from "@chakra-ui/react"
import ReusableProyect from "./reusableProyect.jsx"

const Proyects = () => {


    return(
        // CONTENEDOR PRINCIPAL //
        <Wrap id="portfolioid" h='100%'
        p='100px 120px 30px 120px'
        justify='space-between'>

            {/* CONTENEDOR TEXTOS Y BOTON SUPERIOR */}
            <Flex as='section'
            w='100%' h='100%'
            pb='60px'
            justify='space-around'
            align='center'>
                <Text as='h2' w='40%' m='0' textAlign='left'>Échale un vistazo a mis proyectos</Text>
                <Text className="defaultText" w='32%' m='0px 50px 0px 20px' textAlign='justify'>
                    Estos son algunos ejemplos de proyectos que he desarrollado. Revisandolos podrás entender mejor la forma en la que trabajo el código y los resultados alcanzados
                </Text>
                <Link href="https://github.com/SantinoEscoriaza" target="_blank">
                    <Button id='redButton' p='16px 20px'>Ver más</Button>
                </Link>
            </Flex>

            {/* // PROYECTO 1 // */}
            <ReusableProyect
            name='Landing Page Nº1' 
            desc='Proyecto basado en recrear un diseño de referencia usando Html5 y Css3'
            image='img/imgProyect1.png'
            url='https://santinoescoriaza.github.io/image-based-web-project/'/>
            
            {/* // PROYECTO 2 // */}
            <ReusableProyect 
            name='Landing Page Nº2'
            desc='Proyecto basado en recrear un diseño de referencia usando Html5 y Css3'
            image='img/imgProyect2.png'
            url='https://santinoescoriaza.github.io/image-based-web-project2/'/>
        </Wrap>
    )
}

export default Proyects