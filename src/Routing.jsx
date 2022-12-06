import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './pages/Contacts/Contacts';

function Routing(){
    return(
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <BrowserRouter>
          <Routes>
            <Route
                exact path='/'
                element={<Contacts/>}
              />
              <Route
                path='create'
                element={<h1>create</h1>}
              />
              <Route
                path='edit/:id'
                element={<h1>edit</h1>}
              />
              <Route
                path='delete/:id'
                element={<h1>delete</h1>}
              />
              <Route path="*" element={<h1>This page does not exists</h1>} />
          </Routes>
        </BrowserRouter>
      </Grid>
    )
}

export default Routing;