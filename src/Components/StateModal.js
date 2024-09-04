import React from "react";
import { Modal } from "@mui/material";

const StateModal = ({
  open,
  handelStateModalClose,
  selectItem,
  exitFromCoin,
}) => {
  const handleYesClick = (e) => {
    e.preventDefault();
    exitFromCoin(selectItem);
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
          <p
            style={{
              color: "blue",
              textTransform: "uppercase",
              fontWeight: "bold",
              // marginTop: 20,
            }}
          >
            Do You Want To Exit From{" "}
            <span style={{ color: "red", textAlign: "center" }}>
              {" "}
              "{selectItem.name}"
            </span>
          </p>
          {/* <p>{selectItem}</p> */}
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            float: "right",
            gap: 10,
          }}
        >
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
            onClick={handelStateModalClose}
          >
            NO
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default StateModal;
