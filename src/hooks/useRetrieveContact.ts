import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UrlContext } from "../App";

const useRetrieveContact = (id: any, reset?: any) => {
  const contactsUrl = useContext(UrlContext);

  const [contact, setContact] = useState();

  useEffect(() => {
    retrieveContact(id);
  }, [id, reset]);

  function retrieveContact(id: string) {
    axios
      .get(`${contactsUrl}/${id}`)
      .then((response) => {
        setContact(response["data"]);
        reset(response["data"]);
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  }

  return { contact };
};

export default useRetrieveContact;
