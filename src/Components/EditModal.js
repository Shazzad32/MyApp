import { Modal, Switch, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EditModal = ({ open, handelModalClose, selectItem, updateItem }) => {
  const [state, setState] = useState({ ...selectItem });

  useEffect(() => {
    setState({ ...selectItem });
  }, [selectItem]);

  const handelSubmit = (e) => {
    e.preventDefault();
    updateItem(state);
  };

  const handelInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSwitchChange = (name) => {
    setState((prevValue) => ({ ...prevValue, [name]: !prevValue[name] }));
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
          height: "70%",
          width: "40%",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "90%",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "12%",
              background: "#176B87",
              color: "white",
              borderRadius: "5px 5px 0px 0px ",
            }}
          >
            <p style={{ fontSize: 22, fontWeight: "bolder" }}>
              UPDATE PRICE OF
              <span style={{ color: "orange ", marginLeft: 5 }}>
                "{state.name}"
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "76%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
            }}
          >
            <p
              style={{
                width: "80%",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              AUTO BUYING
              {
                <Switch
                  value={state.auto_buying}
                  name="auto_buying"
                  onChange={() => handleSwitchChange("auto_buying")}
                  checked={state.auto_buying}
                />
              }
            </p>
            <p
              style={{
                width: "80%",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              AUTO SELLING
              {
                <Switch
                  value={state.auto_selling}
                  name="auto_selling"
                  onChange={() => handleSwitchChange("auto_selling")}
                  checked={state.auto_selling}
                />
              }
            </p>
            <TextField
              style={{ width: "80%" }}
              type="number"
              name="buying_factor"
              label="BUYING FACTOR"
              variant="outlined"
              onChange={handelInput}
              value={state.buying_factor}
            />
            <TextField
              style={{ width: "80%" }}
              type="number"
              name="buying_restriction_limit"
              label="BUYING RESTRICTION LIMIT"
              variant="outlined"
              onChange={handelInput}
              value={state.buying_restriction_limit}
            />
            <TextField
              style={{ width: "80%" }}
              type="number"
              name="buying_per_drop"
              label="BUYING PER DROP"
              variant="outlined"
              onChange={handelInput}
              value={state.buying_per_drop}
            />
          </div>
          <div
            style={{
              height: "12%",
              width: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <motion.button
              style={{
                height: "65%",
                width: "15%",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                fontSize: 12,
                background: "#176B87",
                cursor: "pointer",
              }}
              whileHover={{ background: "#092635", scale: 1.05 }}
              type="submit"
              onClick={handelSubmit}
            >
              UPDATE
            </motion.button>
            <motion.button
              style={{
                height: "65%",
                width: "15%",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                fontSize: 12,
                marginLeft: 15,
                background: "#176B87",
                cursor: "pointer",
              }}
              whileHover={{ background: "#092635", scale: 1.05 }}
              onClick={handelModalClose}
            >
              CLOSE
            </motion.button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
