import { Grid, Paper } from "@mui/material"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenericAlert from "../../components/GenericAlert/GenericAlert";
import GreenButton from "../../components/GenericButton/GenericButton";


function DeleteContact(){

    const deleteContactsUrl = process.env.REACT_APP_URL_CLIENTS || ""
    const [contact, setContact] = useState()
    const [typeAlert, setTypeAlert] = useState()
    const [message, setAlert] = useState("hola crayola")
    const [alertVisibility, setAlertVisibility] = useState(false)

    let { id } = useParams();

    useEffect (() => {
        console.log(id)
        retrieveContact(id || "")
        }, []);

    function deleteC(id: string){
        axios.delete(`${deleteContactsUrl}/${id}`)
          .then(response => {
              console.log(response)
              setAlertVisibility(true)
          })
          .catch(e => {
              console.log(e)
              setAlertVisibility(true)
          })
      }

      function retrieveContact(id: string){
        axios.get(`${deleteContactsUrl}/${id}`)
          .then(response => {
              setContact(response["data"])
          })
          .catch(e => {
              console.log(e)
          })
      }


    return(
        <>
        
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
                    Nombre: {contact?.["firstName"]}
                </Grid>
                <Grid item xs={6}>
                    Apellido: {contact?.["lastName"]}
                </Grid>
                <Grid item xs={6}>
                    Correo: {contact?.["email"]}
                </Grid>
                <Grid item xs={6}>
                    Numero: {contact?.["phone"]}
                </Grid>
                <Grid item xs={6}>
                    <GreenButton
                        text="Si"
                        action={() => deleteC(contact?.["_id"] || "")}
                    />
                </Grid>
                <Grid item xs={6}>
                    <GreenButton
                    text="No"
                    action={() => console.log("hola")}
                    color="#FF0000"
                    />
                </Grid>
            </Grid>    
            </Paper>
        </>
    )
}


export default DeleteContact