import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import GenericButton from "../../components/GenericButton/GenericButton";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UrlContext } from "../../App";
import useRetrieveContact from "../../hooks/useRetrieveContact";
import { Grid, Typography } from "@mui/material";
import GenericAlert from "../../components/GenericAlert/GenericAlert";

function EditContact() {
  const contactsUrl = useContext(UrlContext);
  let { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const contact: any = useRetrieveContact(id, reset);

  const onSubmit = (data: any) => Edit(data);

  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState("hola crayola");
  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(() => {}, [reset]);

  function Edit(data: any) {
    axios
      .put(`${contactsUrl}/${id}`, {
        firstName: data["firstName"],
        lastName: data["lastName"],
        email: data["email"],
        phone: data["phone"],
      })
      .then((response) => {
        setAlertVisibility(true);
        setMessage(
          `Exito al editar al contacto ${response["data"]["firstName"]}`
        );
        setTypeAlert("success");
      })
      .catch((e) => {
        setAlertVisibility(true);
        setMessage(e["message"]);
        setTypeAlert("error");
      });
  }

  function closeEditScreen() {
    setAlertVisibility(true);
    setMessage("Regresando a home");
    setTypeAlert("info");
  }

  return (
    <>
      <Typography variant="h1">Editar contacto</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                defaultValue={contact?.contact?.firstName}
                {...register("firstName", { required: true, maxLength: 20 })}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                defaultValue={contact?.contact?.lastName}
                {...register("lastName", { required: true })}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                defaultValue={contact?.contact?.email}
                {...register("email", {
                  required: true,
                  pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/i,
                })}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                defaultValue={contact?.contact?.phone}
                {...register("phone", {
                  required: true,
                  pattern:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                })}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GenericButton text="Editar" action={onSubmit} />
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
                text="Cancelar"
                action={closeEditScreen}
                color="#FF0000"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
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

export default EditContact;
