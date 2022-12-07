import { FunctionComponent, useEffect, useState } from "react";
import axios from 'axios';


type RetrieveContact = {
    id: string
}

const RetrieveContact: FunctionComponent<RetrieveContact> = ({id}) => {

    const retrieveContactUrl = process.env.REACT_APP_URL_CLIENTS || ""

    const [contacts, setContacts] = useState([])

  
    useEffect (() => {
        retrieveContact(id)
      }, []);
  
    function retrieveContact(id: string){
      axios.get(`${retrieveContactUrl}/${id}`)
        .then(response => {
            console.log(response)
            setContacts(response["data"]["results"])
        })
        .catch(e => {
            console.log(e)
        })
    }

    return(
        <></>
    )

}


export default RetrieveContact