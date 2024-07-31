import { Wrap, Text, Flex, Link, Button, Input, Textarea, FormControl } from '@chakra-ui/react'
import { Formik } from 'formik'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
            /*/////////////////////////
                    LEER README 
            /////////////////////////*/
    const form = useRef();
    const sendEmail = () => {
        emailjs.sendForm('service_mihheud','template_ql1lhzb',form.current,'MDi0-I9sD9dcf6jU')
        .then(
          () => {
            console.log('SUCCESS');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };

    const botonContact={
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: {
            base:'50px 0', 
            '2xl':'60px', 
            '3xl':'70px'
        },
        bgColor:'#ffffff',
        border: 'solid 1px transparent',
        borderRadius: '2px',
        fontSize: {
            base:'16px', 
            md:'20px', 
            '2xl':'24px', 
            '3xl':'30px'
        },
        fontWeight: '500',
        transition:'0.3s',
        _hover:{
            border:'1px solid gray',
            cursor:'pointer'
        }
    }

    const textInput={
        padding: {
            base:'20px 15px', 
            '2xl':'25px 20px', 
            '3xl':'30px 25px'
        },
        fontSize: {base:'16px', 
            '2xl':'20px', 
            '3xl':'28px'
        },
        border: 'none',
        borderRadius: '0',
        borderBottom: '1px solid black',
        outline: 'transparent',
        _hover:{/*Reset hover*/},
        _focusVisible:{/*Reset hover*/}
    }

    return(
        <Wrap as='section' id="contactid"
        h='100%' p={{base:'60px 20px',  lg:'90px 100px'}}
        justify='center'>
            <Text as ='h2' pb='20px'>Ponte En Contacto</Text>
            
            {/* // BOTONES CONTACTO // */}
            <Flex w={{
                base:'100%', 
                md:'40%', 
                '2xl':'35%', 
                '3xl':'30%'
            }}
            direction={{base:'column', mid:'row', md:'column'}}
            h='fit-content'
            align='center' 
            gap='12%' 
            pr={{base:'0px', md:'16px'}}>

                <Link href="mailto:santinoescoriaza@gmail.com" target="_blank" 
                w={{base:'80%', 
                    mid:'45%', 
                    md:'90%'
                }} 
                _hover={{textDecoration:'none'}}
                mb='18px'>
                <Button sx={botonContact}>
                    <i className="bi bi-envelope-fill"></i>
                    santinoescoriaza@gmail.com

                </Button></Link>


                <Link href="https://wa.link/02wmyp" target="_blank" 
                w={{base:'80%', mid:'45%', md:'90%'}} 
                _hover={{textDecoration:'none'}}
                mb='18px'>
                    
                <Button sx={botonContact}>
                    <i className="bi bi-telephone-fill"></i>
                    (+54) 261-264-1158
                    
                </Button></Link>

             </Flex>

            {/* // FORMULARIO CONTACTO // */}
            {/* ///////////////////// 
                    LEER README 
            ///////////////////// */}
            <Formik initialValues={{
                from_name:'',
                user_email:'',
                to_name:'',
                message:''
            }}
            onSubmit={(values, { setSubmitting }) => {
                sendEmail(values);
                setSubmitting(false);
              }}>
            {({
                values,
                handleChange, 
                handleSubmit,
            })=>(
                <FormControl ref={form} action="" onSubmit={handleSubmit}
                display='flex' 
                flexWrap='wrap' 
                justifyContent='space-between'
                w={{base:'100%', md:'50%'}} h='100%'>

                    <Input type="text" placeholder="Tu nombre" name="from_name" sx={textInput} w='49%' value={values.from_name} onChange={handleChange}/>
                    <Input type="text" placeholder="Tu email" name="user_email" sx={textInput} w='49%' value={values.user_email} onChange={handleChange}/>
                    <Input type="text" placeholder="Asunto" name="to_name" sx={textInput} w='100%' value={values.to_name} onChange={handleChange}/>
                    <Textarea placeholder="Mensaje" name="message" sx={textInput} w='100%' h='120px' resize='none' value={values.message} onChange={handleChange}/>
                    <Button type='submit' id='redButton' p='20px 0' w='100%' mt='20px'>Enviar mensaje</Button>

                        {/* <!-- ICONOS --> */}
                        <Flex className="icons">
                            <Link as='a' href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></Link>
                            <Link as='a' href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></Link>
                            <Link as='a' href="https://www.x.com" target="_blank"><i className="bi bi-twitter"></i></Link>
                            <Link as='a' href="https://www.linkedin.com/in/santino-escoriaza-6833b8311/" target="_blank"><i className="bi bi-linkedin"></i></Link>
                            <Link as='a' href="https://github.com/SantinoEscoriaza/" target="_blank"><i className="bi bi-github"></i></Link>
                        </Flex>

                </FormControl>
            )}
            </Formik>
        </Wrap>
    )
}

export default Contact