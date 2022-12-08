import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import CardOptions from "./CardOptions/CardOptions";

function Save() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Paper elevation={3}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={8}
          >
            <Grid item xs={6} spacing={4}>
              <CardOptions
                titleCard="Crear contacto"
                descriptionCard="En esta opción puedes crear un nuevo contacto"
                urlDirection="/create"
                titleButton="crear"
              />
            </Grid>
            <Grid item xs={6} spacing={4}>
              <CardOptions
                titleCard="Eliminar contacto"
                descriptionCard="En esta opción puedes eliminar un contacto"
                urlDirection="delete"
                titleButton="eliminar"
              />
            </Grid>
            <Grid item xs={6} spacing={4}>
              <CardOptions
                titleCard="Editar contacto"
                descriptionCard="En esta opción puedes editar un contacto"
                urlDirection="edit/sad"
                titleButton="editar"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
}

export default Save;
