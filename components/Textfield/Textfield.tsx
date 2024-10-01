import { useState } from "react";
import TextField from "@mui/material/TextField";
import ViewIcon from "../../../assets/icons/eye-view.svg";
import ViewCloseIcon from "../../../assets/icons/eye-close.svg";
import styles from "./Textfield.module.css";

const Textfield = (props: any) => {
  const [showPassword, setShowPassword] = useState(true);

  const Adornment = () => (
    <img
      className={styles.button}
      src={showPassword ? ViewCloseIcon : ViewIcon}
      alt="eye-icon"
      onClick={() =>
        showPassword ? setShowPassword(false) : setShowPassword(true)
      }
    />
  );

  return (
    <TextField
      {...props}
      className="custom-textfield"
      type={props.name === "password" && showPassword ? "password" : "text"}
      InputProps={{
        style: {
          borderColor: "#cccccc",
          height: "48px",
        },
        endAdornment: props.name === "password" ? Adornment() : null,
      }}
    />
  );
};

export default Textfield;
