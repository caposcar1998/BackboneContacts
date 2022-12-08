import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TableContacts from "./components/TableContacts/TableContacts";

function Contacts() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">Contactos</Typography>
      <Container>
        <Paper elevation={3}>
          <Button onClick={() => navigate("create")}>
            Crear nuevo registro
          </Button>
          <TableContacts />
        </Paper>
      </Container>
    </Grid>
  );
}

export default Contacts;
