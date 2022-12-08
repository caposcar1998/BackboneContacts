import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import GreenButton from "../../components/GenericButton/GenericButton";
import axios from "axios";
import { useContext, useEffect } from "react";
import { UrlContext } from "../../App";
import useRetrieveContact from "../../hooks/useRetrieveContact";
import { Grid, Typography } from "@mui/material";

function EditContact() {
  const contactsUrl = useContext(UrlContext);
  let { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const contact: any = useRetrieveContact(id, reset);

  const onSubmit = (data: any) => Edit(data);

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
        console.log("exito");
      })
      .catch((e) => {
        console.log(e);
      });
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
              <GreenButton text="Editar" action={onSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default EditContact;
