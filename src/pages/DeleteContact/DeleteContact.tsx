import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UrlContext } from "../../App";
import GenericAlert from "../../components/GenericAlert/GenericAlert";
import GenericButton from "../../components/GenericButton/GenericButton";
import useRetrieveContact from "../../hooks/useRetrieveContact";
import { ResponseType } from "../../types/Responses";

function DeleteContact() {
  const contactsUrl = useContext(UrlContext);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);
  let { id } = useParams();
  const contact: any = useRetrieveContact(id);

  function deleteC() {
    console.log(`${contactsUrl}/${id}`);
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
        const error: ResponseType = {
          message: e["message"],
          code: e["code"],
        };
        setAlertVisibility(true);
        setMessage(error.message);
        setTypeAlert("error");
      });
  }

  function closeDeleteScreen() {
    setAlertVisibility(true);
    setMessage("Regresando a home");
    setTypeAlert("info");
  }

  return (
    <>
      <Typography variant="h1">Eliminar Contacto</Typography>

      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              Estas Seguro que deseas eliminar a este usuario?
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              Nombre: {contact?.contact?.firstName}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              Apellido: {contact?.contact?.lastName}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              Correo: {contact?.contact?.email}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              Numero: {contact?.contact?.phone}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GenericButton text="Si" action={deleteC} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GenericButton
                text="No"
                action={closeDeleteScreen}
                color="#FF0000"
              />
            </Grid>
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
