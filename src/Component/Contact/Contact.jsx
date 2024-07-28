import { Wrap, Text, Flex, Link, Button, Input, Textarea, FormControl } from '@chakra-ui/react'

const Contact = () => {

    const botonContact={
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        padding: '50px 0',
        bgColor:'#ffffff',
        border: 'solid 1px transparent',
        borderRadius: '2px',
        fontSize: '20px',
        fontWeight: '500',
        transition:'0.3s',
        _hover:{
            border:'1px solid gray',
            cursor:'pointer'
        }
    }

    const textInput={
        padding: '20px 15px 20px 15px',
        border: 'none',
        borderRadius: '0',
        borderBottom: '1px solid black',
        outline: 'transparent',
        _hover:{/*Reset hover*/},
        _focusVisible:{/*Reset hover*/}
    }

    return(
        <Wrap as='section' id="contactid"
        h='100%' p='90px 100px'
        justify='center'>
            <Text as ='h2' pb='20px'>Ponte En Contacto</Text>
            {/* <!-- BOTONES CONTACTO --> */}
            <Flex w='30%' direction='column' gap='12%'>
                <Link href="https://www.gmail.com" target="_blank" _hover={{textDecoration:'none'}}>
                <Button sx={botonContact}>
                    <i className="bi bi-envelope-fill"></i>
                    <Text>santinoescoriaza@gmail.com</Text>
                </Button></Link>
                <Link href="https://www.whatsapp.com" target="_blank" _hover={{textDecoration:'none'}}>
                <Button sx={botonContact}>
                    <i className="bi bi-telephone-fill"></i>
                    (+54) 261-264-1158
                </Button></Link>
             </Flex>
            {/* <!-- FORMULARIO CONTACTO --> */}
            <FormControl action="" 
            display='flex' 
            flexWrap='wrap' 
            justifyContent='space-between'
            w='50%' h='100%'>
                <Input type="text" placeholder="Tu nombre" name="nombre" sx={textInput} w='49%'/>
                <Input type="text" placeholder="Tu email" name="mail" sx={textInput} w='49%'/>
                <Input type="text" placeholder="Asunto" name="asunto" sx={textInput} w='100%'/>
                <Textarea placeholder="Mensaje" name="mensaje" sx={textInput} w='100%' h='120px' resize='none'/>
                <Button id='redButton' p='20px 0' w='100%' mt='20px'>Enviar mensaje</Button>
                    {/* <!-- ICONOS --> */}
                    <Flex className="icons">
                        <Link as='a' href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></Link>
                        <Link as='a' href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
                        <Link as='a' href="https://www.x.com" target="_blank"><i className="bi bi-twitter"></i></Link>
                        <Link as='a' href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i className="bi bi-linkedin"></i></Link>
                        <Link as='a' href="https://github.com/SantinoEscoriaza/" target="_blank"><i className="bi bi-github"></i></Link>
                    </Flex>
            </FormControl>
        </Wrap>
    )
}

export default Contact