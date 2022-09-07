import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constantes";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const HeaderIcon = ({ setActive, setSelectedCategory }) => {
  return (
    <div className="logoDev" style={{ display: "flex", gap: "5px" }}>
      <IconButton onClick={() => setActive((p) => !p)} sx={{ py: 0 }}>
        <MenuRoundedIcon sx={{ color: "#747474", fontSize: "30px" }} />
      </IconButton>
      <Link
        to={"/"}
        onClick={() => setSelectedCategory("Home")}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="logo"
          height={27}
          style={{ display: "flex", alignItems: "center" }}
        />
        <h3
          style={{
            fontSize: "20px",
            margin: 0,
            color: "#fff",
            fontFamily: "Roboto",
            letterSpacing: "-1px",
          }}
        >
          SaftyTube
        </h3>
      </Link>
    </div>
  );
};

export default HeaderIcon;
