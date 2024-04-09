import { useState } from "react";

const useAlert = () => {
  // Creating the Alert State
  // Alert bnadia hai hmne state aur default valeus dedi hain
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });

  //   creating a showAlert Function
  const showAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: true,
      text,
      type,
    });

  //   creating a hideAlert Function
  //   states apne hisab se krli hain hmne default bnadi hain hmne
  const hideAlert = ({ text, type = "danger" }) =>
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });

  // Custom hooks return krte hain array ya object
  return { alert, showAlert, hideAlert };
};

export default useAlert;
