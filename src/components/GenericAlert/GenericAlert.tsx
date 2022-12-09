import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const alertType = typeAlert || "info";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertVisibility(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
  }, []);

  return <Alert severity={alertType}>{message}</Alert>;
};

export default GenericAlert;
