import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import GreenButton from "../../components/GenericButton/GenericButton";
import axios from 'axios';
import { useContext } from "react";
import { UrlContext } from "../../App";

type Contact = {
  firstName : string
  lastName : string
  email: string
  phone: Number
}

function CreateContact(){

  const contactsUrl = useContext(UrlContext);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any )=> Create(data);

    function create(){
      console.log(onSubmit)
    }

    function Create(contact: Contact){
      axios.post(`${contactsUrl}`,{
        "firstName": contact.firstName,
        "lastName": contact.lastName,
        "email": contact.email,
        "phone": contact.phone         
      })
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Nombre"  {...register("firstName", { required: true, maxLength: 20 })} />
      <TextField label="Apellido" {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
      <TextField label="Email" {...register("email", { required: true, pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/i })} />
      <TextField label="Numero" {...register("phone", { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i })} />
      <GreenButton
        text="Crear"
        action={create}
      />
    </form>
    )
}

export default CreateContact