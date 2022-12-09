import { FunctionComponent, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

type GenericAlertType = {
  typeAlert: any;
  message: string;
  setAlertVisibility: Function;
};

const GenericAlert: FunctionComponent<GenericAlertType> = ({
  typeAlert,
  message,
  setAlertVisibility,
}) => {
  const alertType = typeAlert || "info";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertVisibility(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <Alert severity={alertType}>{message}</Alert>;
};

export default GenericAlert;
