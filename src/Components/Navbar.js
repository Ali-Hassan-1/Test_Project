import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: "5px 12px",
      }}
    >
      <h3 style={{ margin: 0 }}>Navbar</h3>
      <h5>Balance: {amount}</h5>
    </div>
  );
};

export default Navbar;
