import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import ExitToApp from "@mui/icons-material/ExitToApp";
import { logout } from "../../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./LogoutButton.module.css";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import ArrowDown from "../../../assets/icons/arrow-down.svg";

const LogoutButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.auth.username);
  const upperCaseName =
    name === undefined || name == null ? "" : name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div className={styles.menuLogout}>
        <div className={styles.icon}>
          {upperCaseName.length === 3 &&
            String(
              `${upperCaseName[0]}${upperCaseName[2]}`
            ).toLocaleUpperCase()}
          {upperCaseName.length === 2 &&
            String(
              `${upperCaseName[0]}${upperCaseName[1]}`
            ).toLocaleUpperCase()}
          {upperCaseName.length === 1 &&
            String(`${upperCaseName[0]}`).toLocaleUpperCase()}
        </div>
        <button
          className={styles.button}
          onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
        >
          <p>{name}</p>
          <img src={openMenu ? ArrowDown : ArrowLeft} alt="arrows-icons" />
        </button>
      </div>
      {openMenu && (
        <div className={styles.menu}>
          <button
            onClick={handleLogout}
            style={{
              color: "black",
              display: "block",
              backgroundColor: "white",
              paddingRight: "0.7rem",
              paddingLeft: "0.7rem",
            }}
          >
            <Box display="flex" alignItems="center">
              Logout
              <ExitToApp sx={{ ml: 1 }} />
            </Box>
          </button>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
