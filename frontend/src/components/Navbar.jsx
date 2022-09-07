import { Stack } from "@mui/material";
import SearchBar from "./SearchBar.jsx";
import SlideBar from "./SlideBar";
import HeaderIcon from "./HeaderIcon";
import { useState } from "react";

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const [active, setActive] = useState(false);
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1.5}
      sx={{
        position: "sticky",
        background: "#202021",
        top: 0,
        justifyContent: "space-between",
        mr: { sm: "0px" },
        zIndex: "20",
      }}
    >
      {active && (
        <div
          onClick={(_) => setActive((p) => !p)}
          style={{
            position: "fixed",
            top: 0,
            height: "100%",
            width: "100%",
            left: 0,
            background: "#000",
            opacity: ".4",
          }}
        ></div>
      )}
      <SlideBar
        setActive={setActive}
        active={active}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <HeaderIcon
        setActive={setActive}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchBar setSelectedCategory={setSelectedCategory} />
    </Stack>
  );
};

export default Navbar;
