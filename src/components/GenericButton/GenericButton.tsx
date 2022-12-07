import { Button } from "@mui/material"
import { FunctionComponent } from "react"


type GenericButton  = {
    text: string
    action: any
    color?: string
}

const GenericButton: FunctionComponent<GenericButton> = ({text, action, color}) => {
    
    

    return(
        <Button
        type="submit"
        sx={{backgroundColor : color ? color : "#3feea5"} }
        variant="contained"
        onClick={action}
        >
            {text}
        </Button>
    )
}

export default GenericButton