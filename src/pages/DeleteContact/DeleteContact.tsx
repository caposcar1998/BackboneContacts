import { Grid, Paper, Typography } from "@mui/material"
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UrlContext } from "../../App";
import GenericAlert from "../../components/GenericAlert/GenericAlert";
import GenericButton from "../../components/GenericButton/GenericButton";
import useRetrieveContact from "../../hooks/useRetrieveContact";


function DeleteContact(){

    const contactsUrl = useContext(UrlContext);
    const [typeAlert, setTypeAlert] = useState()
    const [message, setAlert] = useState("hola crayola")
    const [alertVisibility, setAlertVisibility] = useState(false)
    let { id } = useParams();
    const contact: any = useRetrieveContact(id)

    


    function deleteC(id: string){
        axios.delete(`${contactsUrl}/${id}`)
          .then(response => {
              console.log(response)
              setAlertVisibility(true)
          })
          .catch(e => {
              console.log(e)
              setAlertVisibility(true)
          })
      }


    return(
        <>
              
            <Typography variant="h1">Eliminar Contacto</Typography>
            
            <GenericAlert
                typeAlert={typeAlert}
                message={message}
                alertVisibility={alertVisibility}
                setAlertVisibility={setAlertVisibility}
            />
            
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
        </>
    )
}


export default DeleteContact