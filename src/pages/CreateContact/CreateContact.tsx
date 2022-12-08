import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import GreenButton from "../../components/GenericButton/GenericButton";
import axios from "axios";
import { useContext } from "react";
import { UrlContext } from "../../App";
import { Grid, Typography } from "@mui/material";

type Contact = {
  firstName: string;
  lastName: string;
  email: string;
  phone: Number;
};

function CreateContact() {
  const contactsUrl = useContext(UrlContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => Create(data);

  function Create(contact: Contact) {
    axios
      .post(`${contactsUrl}`, {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
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
                label="Apellido"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
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
                label="Email"
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
                label="Numero"
                {...register("phone", {
                  required: true,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                })}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GreenButton text="Crear" action={onSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default CreateContact;
