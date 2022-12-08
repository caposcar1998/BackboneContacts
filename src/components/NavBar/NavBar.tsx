import React from "react";
import { AppBar, Grid, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../media/backboneLogo.svg";
import GenericButton from "../GenericButton/GenericButton";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <a href="https://www.backbonesystems.io/">
                <img
                  src={logo}
                  style={{ maxWidth: 200 }}
                  alt="Backbone Systems"
                />
              </a>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <a href="https://github.com/caposcar1998">
                <GenericButton text="Contact Us" />
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
