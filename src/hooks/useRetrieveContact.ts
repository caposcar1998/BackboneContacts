import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UrlContext } from "../App";

const useRetrieveContact = (props: any) => {
  const contactsUrl = useContext(UrlContext);

  const [contact, setContact] = useState();

  useEffect(() => {
    retrieveContact(props.id);
  }, []);

  function retrieveContact(id: string) {
    console.log(`${contactsUrl}/${id}`);
    axios
      .get(`${contactsUrl}/${id}`)
      .then((response) => {
        console.log("todo bn");
        setContact(response["data"]);
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  }

  return { contact };
};

export default useRetrieveContact;
