import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/index";

const Shop = () => {
  const dispatch = useDispatch;
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <h4 style={{ textAlign: "center" }}>Bank Balance Deposit/WithDraw</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          title={"-"}
          onClick={() => dispatch(actions.withdrawMoney(100))}
        />
        <h6>Update Balance</h6>
        <Button
          title={"+"}
          onClick={() => dispatch(actions.depositMoney(100))}
        />
      </div>
    </>
  );
};

const Button = ({ title, ...props }) => (
  <div style={{ margin: "0 10px" }}>
    <button style={{ padding: "0 10px" }} {...props}>
      {title}
    </button>
  </div>
);

export default Shop;
