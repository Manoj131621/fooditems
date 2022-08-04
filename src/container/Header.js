import React from 'react'
import {Container, FormControl, Navbar, NavbarBrand} from 'react-bootstrap'
import {BiUserCircle,BiCalendarWeek} from 'react-icons/bi'

const Header = () => {
  return(
    <div>
     <Navbar bg='warning' variant='dark'>
    <Container>
        <NavbarBrand>Food order</NavbarBrand>
        <Navbar.Text className='search'>
            <FormControl style={{width:500}}
        placeholder= 'Search Item' className='m-auto'/>
        </Navbar.Text>
        <BiUserCircle className='menuIcon' />
    </Container>
  </Navbar>
  <Navbar bg='white' variant='white'>
  <Container>
       <NavbarBrand>Buffet</NavbarBrand>
        
       <BiCalendarWeek className='menuIcon2' />
  </Container>
</Navbar>
<br></br>
</div>
  );
}

export default Header