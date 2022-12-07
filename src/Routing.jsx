import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './pages/Contacts/Contacts';
import CreateContact from './pages/CreateContact/CreateContact';
import DeleteContact from './pages/DeleteContact/DeleteContact';
import EditContact from './pages/EditContact/EditContact';

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
                exact path='create'
                element={<CreateContact/>}
              />
              <Route
                exact path='edit/:id'
                element={<EditContact/>}
              />
              <Route
                exact path='delete/:id'
                element={<DeleteContact/>}
              />
              <Route path="*" element={<h1>This page does not exists</h1>} />
          </Routes>
        </BrowserRouter>
      </Grid>
    )
}

export default Routing;