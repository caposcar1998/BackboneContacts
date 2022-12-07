import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import GreenButton from "../../components/GenericButton/GenericButton";

function CreateContact(){

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any )=> console.log(data);

    return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("firstName")} />
      <Select {...register("gender")}>
        <MenuItem value="female">female</MenuItem>
        <MenuItem value="male">male</MenuItem>
        <MenuItem value="other">other</MenuItem>
      </Select>
      <GreenButton
        text="Crear"
        action={() => console.log()}
      />
    </form>
    )
}

export default CreateContact