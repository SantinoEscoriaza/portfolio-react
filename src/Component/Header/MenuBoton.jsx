
import { Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, EmailIcon, InfoIcon, ExternalLinkIcon, ChatIcon, StarIcon, ArrowUpIcon } from "@chakra-ui/icons";

const MenuBoton = () => {
  const MenuItemStyle = {
    fontSize:'18px',
    bgColor: 'transparent',
    transition: '0.2s',
    _hover: {
        color: '#f92139',
        fontSize:'20px'
    }}
    
return (
<Menu>
    <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        display={{ base: 'block', md: 'none' }}
        mr="60px"
        p="5px 15px"
        color="#ffffff"
        bgColor="transparent"
        border="solid 1px #ffffff"
        borderRadius="4px"
        transition="0.3s"
        _hover={{
          color: '#f92139',
          border: 'solid 1px #f92139'
        }}/>
            <MenuList 
            bgColor="#000000" 
            border='none' 
            w='100vw' 
            borderRadius='2px'>
                <MenuItem as="a" href="#inicio" sx={MenuItemStyle}><ArrowUpIcon mr='8px'/>Inicio</MenuItem>
                <MenuItem as="a" href="#aboutid" sx={MenuItemStyle}><InfoIcon mr='8px'/>Sobre mi</MenuItem>
                <MenuItem as="a" href="#skillsid" sx={MenuItemStyle}><StarIcon mr='8px'/>Habilidades</MenuItem>
                <MenuItem as="a" href="#portfolioid" sx={MenuItemStyle}><ExternalLinkIcon mr='8px'/> Proyectos</MenuItem>
                <MenuItem as="a" href="#testimoniosid" sx={MenuItemStyle}><ChatIcon mr='8px'/> Testimonios</MenuItem>
            <MenuItem as="a" href="#contactid" sx={MenuItemStyle}><EmailIcon mr='8px'/> Contáctame</MenuItem>
    </MenuList>
</Menu>
)
}

export { MenuBoton };