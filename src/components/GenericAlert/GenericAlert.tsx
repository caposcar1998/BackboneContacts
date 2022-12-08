import { FunctionComponent, SyntheticEvent, useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

type GenericAlert = {
  typeAlert: any;
  message: string;
  alertVisibility: boolean;
  setAlertVisibility: Function;
};

const GenericAlert: FunctionComponent<GenericAlert> = ({
  typeAlert,
  message,
  alertVisibility,
  setAlertVisibility,
}) => {
  const alertType = typeAlert || "info";
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    // To clear or cancel a timer, you call the clearTimeout(); method,
    // passing in the timer object that you created into clearTimeout().

    return () => clearTimeout(timer);
  }, []);

  return <Alert severity={alertType}>{message}</Alert>;
};

export default GenericAlert;
