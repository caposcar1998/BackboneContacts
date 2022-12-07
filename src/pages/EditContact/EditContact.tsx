import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useParams } from "react-router-dom";
import GreenButton from "../../components/GenericButton/GenericButton";
import axios from 'axios';
import { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";

type Contact = {
    firstName : string
    lastName : string
    email: string
    phone: Number
  }
  

function EditContact(){
    const retrieveContactUrl = process.env.REACT_APP_URL_CLIENTS || ""

    let { id } = useParams();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any )=> Edit(data);
    const [contact, setContact] = useState<Contact>()

    useEffect (() => {
        console.log(id)
        retrieveContact(id || "")
        }, [reset]);


    function Edit(data: any){
        console.log(data)
      axios.put(`${retrieveContactUrl}/${id}`,{
        "firstName": data["firstName"],
        "lastName": data["lastName"],
        "email": data["email"],
        "phone": data["phone"]         
      })
        .then(response => {
            console.log("exito")
        })
        .catch(e => {
            console.log(e)
        })
    }

    function retrieveContact(id: string){
        axios.get(`${retrieveContactUrl}/${id}`)
          .then(response => {
              setContact(response["data"])
              console.log(response)
              reset(response["data"])
          })
          .catch(e => {
              console.log(e)
          })
      }


    return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField defaultValue={contact?.firstName}  {...register("firstName", { required: true, maxLength: 20 })} />
      <TextField defaultValue={contact?.lastName} {...register("lastName", { required: true })} />
      <TextField defaultValue={contact?.email} {...register("email", { required: true, pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/i })} />
      <TextField defaultValue={contact?.phone} {...register("phone", { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i })} />
      <GreenButton
        text="Editar"
        action={onSubmit}
      />
    </form>
    )
}

export default EditContact