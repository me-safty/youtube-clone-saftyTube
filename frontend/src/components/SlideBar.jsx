import { Stack } from "@mui/material";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import { categories } from "../utils/constantes";
import { Link } from "react-router-dom";

const SlideBar = ({
  active,
  setActive,
  selectedCategory,
  setSelectedCategory,
}) => {
  const cats = categories.map((e) => (
    <Link key={e.name} to="/">
      <div
        onClick={() => {
          setSelectedCategory(e.name);
          setActive((p) => !p);
        }}
        className={`category-btn ${
          selectedCategory === e.name ? "active" : ""
        }`}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          alignItems: "center",
          paddingInlineStart: "20px",
          color: "#fff",
          paddingBlock: "5px",
          cursor: "pointer",
          opacity: 0.8,
          transition: ".1s",
        }}
      >
        <span>{e.icon}</span>
        <span>{e.name}</span>
      </div>
    </Link>
  ));
  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        height: "100vh",
        zIndex: 1000,
        background: "#212121",
        left: `${active ? "0px" : "-250px"}`,
        transition: ".2s",
      }}
    >
      <div
        className="icon"
        style={{
          paddingInline: "12px 40px",
          minHeight: "66px",
          display: "flex",
        }}
      >
        <HeaderIcon setActive={setActive} />
      </div>
      {cats}
    </Stack>
  );
};

export default SlideBar;
