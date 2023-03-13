import React from 'react';
import {AppBar , styled, Toolbar} from '@mui/material';


const Container = styled(AppBar)`
background : #060606;
height: 9vh;
`

const Header = () => {

   

    return (
       <Container position='static'>
        <Toolbar>
<img src='logo.jpg'   alt='logo ' style={{width:40}} />
        </Toolbar>
       </Container>
    );
};

export default Header;