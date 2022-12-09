import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UrlContext } from "../../App";
import GenericAlert from "../../components/GenericAlert/GenericAlert";
import GenericButton from "../../components/GenericButton/GenericButton";
import useRetrieveContact from "../../hooks/useRetrieveContact";

function DeleteContact() {
  const contactsUrl = useContext(UrlContext);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState("hola crayola");
  const [alertVisibility, setAlertVisibility] = useState(false);
  let { id } = useParams();
  const contact: any = useRetrieveContact(id);

  function deleteC(id: string) {
    axios
      .delete(`${contactsUrl}/${id}`)
      .then((response) => {
        setAlertVisibility(true);
        setMessage(
          `Exito al eliminar al contacto ${response["data"]["firstName"]}`
        );
        setTypeAlert("success");
      })
      .catch((e) => {
        setAlertVisibility(true);
        setMessage(e["message"]);
        setTypeAlert("error");
      });
  }

  return (
    <>
      <Typography variant="h1">Eliminar Contacto</Typography>

      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Estas Seguro que deseas eliminar a este usuario?
          </Grid>
          <Grid item xs={6}>
            Nombre: {contact?.contact?.firstName}
          </Grid>
          <Grid item xs={6}>
            Apellido: {contact?.contact?.lastName}
          </Grid>
          <Grid item xs={6}>
            Correo: {contact?.contact?.email}
          </Grid>
          <Grid item xs={6}>
            Numero: {contact?.contact?.phone}
          </Grid>
          <Grid item xs={6}>
            <GenericButton
              text="Si"
              action={() => deleteC(contact?.contact?._id)}
            />
          </Grid>
          <Grid item xs={6}>
            <GenericButton
              text="No"
              action={() => console.log(contact)}
              color="#FF0000"
            />
          </Grid>
        </Grid>
      </Paper>

      {alertVisibility && (
        <GenericAlert
          typeAlert={typeAlert}
          message={message}
          setAlertVisibility={setAlertVisibility}
        />
      )}
    </>
  );
}

export default DeleteContact;
