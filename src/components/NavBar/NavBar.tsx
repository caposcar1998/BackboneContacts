import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../media/backboneLogo.svg';
import GreenButton from '../GenericButton/GenericButton';

function NavBar(){

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar 
            position="fixed"
            sx={{backgroundColor: "black"}}
            >
          <Toolbar>
                <Grid container>
                    <Grid item xs={4}
                    alignItems="center"
                    justifyContent="center"
                    >
                        <img src={logo} style={{maxWidth: 200}} alt="Backbone Systems" />       
                    </Grid>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <GreenButton
                        text='Contact Us'
                        action={() => console.log()}
                        /> 
                    </Grid>                
                </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    )


}

export default NavBar