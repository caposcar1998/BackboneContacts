import { Container, Grid, Paper } from '@mui/material';
import TableContacts from './components/TableContacts/TableContacts';


function Contacts(){
    return(
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Container>
            <Paper elevation={3} >
                <TableContacts/>
            </Paper>
        </Container>
        </Grid>
    )
}

export default Contacts