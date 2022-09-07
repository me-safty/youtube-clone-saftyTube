import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ setSelectedCategory }) => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setSelectedCategory(value);
      navigate("/");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={(_) => {}}
      sx={{
        background: "#121212",
        border: "1px solid rgb(69 69 69)",
        borderRadius: 0,
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-bar"
        type="text"
        placeholder="Search..."
        style={{
          width: "350px",
          background: "#121212",
          paddingInlineStart: "10px",
          color: "#fff",
          border: "none",
          outline: "none",
        }}
      />
      <IconButton
        variant="contained"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        sx={{ color: "#eee", background: "rgb(69 69 69)", borderRadius: 0 }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
