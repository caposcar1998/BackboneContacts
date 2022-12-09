import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import GenericButton from "../../components/GenericButton/GenericButton";
import axios from "axios";
import { useContext, useState } from "react";
import { UrlContext } from "../../App";
import { Grid, Typography } from "@mui/material";
import GenericAlert from "../../components/GenericAlert/GenericAlert";

function CreateContact() {
  const contactsUrl = useContext(UrlContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => Create(data);
  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);

  function Create(contact: any) {
    axios
      .post(`${contactsUrl}`, {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      })
      .then((response) => {
        setAlertVisibility(true);
        setMessage(
          `Exito al crear al contacto ${response["data"]["firstName"]}`
        );
        setTypeAlert("success");
      })
      .catch((e) => {
        console.log(e);
        setAlertVisibility(true);
        setMessage(e["message"]);
        setTypeAlert("error");
      });
  }

  return (
    <>
      <Typography variant="h1">Crear nuevo contacto</Typography>
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
                label="Nombre"
                {...register("firstName", { required: true, maxLength: 20 })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors?.firstName && <p role="alert">Nombre requerido</p>}
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
                label="Apellido"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors?.lastName && <p role="alert">Apellido requerido</p>}
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
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p role="alert">Email formato incorrecto</p>}
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
                label="Numero"
                {...register("phone", {
                  required: true,
                  pattern:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors?.phone && <p role="alert">Numero formato incorrecto</p>}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GenericButton text="Crear" />
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

export default CreateContact;
