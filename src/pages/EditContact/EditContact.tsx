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
import { ContactType } from "../../types/Contact";
import { ResponseType } from "../../types/Responses";

function EditContact() {
  const contactsUrl = useContext(UrlContext);
  let { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const contact: any = useRetrieveContact(id, reset);

  const onSubmit = (data: any) => Edit(data);

  const [typeAlert, setTypeAlert] = useState("");
  const [message, setMessage] = useState("hola crayola");
  const [alertVisibility, setAlertVisibility] = useState(false);

  useEffect(() => {}, [reset]);

  function Edit(data: any) {
    const contact: ContactType = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };
    axios
      .put(`${contactsUrl}/${id}`, {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      })
      .then((response) => {
        const res: ResponseType = {
          message: response["data"]["firstName"],
          code: response["status"],
        };
        setAlertVisibility(true);
        setMessage(`Exito al editar al contacto ${res.message}`);
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
                defaultValue={contact?.contact?.lastName}
                {...register("lastName", { required: true })}
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
                defaultValue={contact?.contact?.email}
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
                defaultValue={contact?.contact?.phone}
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
