import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UrlContext } from "../App";
import { ContactType } from "../types/Contact";

const useRetrieveContact = (id: any, reset?: any) => {
  const contactsUrl = useContext(UrlContext);

  const [contact, setContact] = useState<ContactType>();

  useEffect(() => {
    retrieveContact(id);
  }, [id, reset]);

  function retrieveContact(id: string) {
    axios
      .get(`${contactsUrl}/${id}`)
      .then((response) => {
        const contact: ContactType = {
          firstName: response?.data.firstName,
          lastName: response?.data.lastName,
          email: response?.data.email,
          phone: response?.data.phone,
        };
        setContact(contact);
        reset(contact);
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  }

  return { contact };
};

export default useRetrieveContact;
