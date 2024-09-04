import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

const EnterModal = ({
  open,
  selectItem,
  enterIntoCoin,
  handelEnterModalClose,
}) => {
  const handleYesClick = (e) => {
    e.preventDefault();
    enterIntoCoin(selectItem);
  };
  return (
    <Modal
      open={open}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 170,
          width: 400,
          padding: 20,
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 8 }}>
          <h3 style={{ color: "blue", textTransform: "uppercase" }}>
            Do You Want To Enter Into{" "}
            <span style={{ color: "red", textAlign: "center" }}>
              {" "}
              "{selectItem.name}"
            </span>
          </h3>
        </div>
        <div style={{ flex: 2, display: "flex", gap: 10 }}>
          <button
            style={{
              color: "white",
              background: "#227B94",
              border: "none",
              height: 30,
              width: 60,
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={handleYesClick}
          >
            YES
          </button>
          <button
            style={{
              color: "white",
              background: "#227B94",
              border: "none",
              height: 30,
              width: 60,
              borderRadius: 5,
              cursor: "pointer",
            }}
            onClick={handelEnterModalClose}
          >
            NO
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default EnterModal;
