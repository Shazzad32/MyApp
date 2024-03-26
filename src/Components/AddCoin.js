import { InputAdornment, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

const AddCoin = ({ createCoin, open, handelAddCoinClose }) => {
  const [value, setValue] = useState({
    coin: "",
    price: null,
    quantity: null,
  });

  const [validation, setValidation] = useState({
    coin: "",
    price: null,
    quantity: null,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue({
      coin: "",
      price: "",
      quantity: "",
    });

    if (validateForm()) {
      createCoin(value);
      setValue({
        coin: "",
        price: "",
        quantity: "",
      });
    } else {
      console.log("Form is Empty");
    }
  };

  const handelInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(e.target.value);
    setValidation({ ...validation, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidation = {};
    if (!value.coin) {
      newValidation.coin = " ";
      isValid = false;
    } else if (!value.price) {
      newValidation.price = " ";
      isValid = false;
    } else if (!value.quantity) {
      newValidation.quantity = " ";
      isValid = false;
    }
    setValidation(newValidation);
    return isValid;
  };

  return (
    <Modal
      open={open}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "60%",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          borderRadius: 10,
          gap: 20,
        }}
      >
        <div
          style={{
            height: "90%",
            width: "80%",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
        >
          <div
            style={{
              height: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              background: "#176B87",
              color: "white",
            }}
          >
            <h2>ADD NEW COIN</h2>
          </div>
          <div
            style={{
              display: "flex",
              height: "70%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <TextField
              fullWidth
              type="text"
              name="coin"
              label="COIN NAME"
              variant="outlined"
              value={value.coin || ""}
              onChange={handelInput}
              error={!!validation.coin}
              // helperText={!value.coin ? "Coin Name Required" : ""}
            />
            <TextField
              fullWidth
              type="number"
              name="price"
              label="PRICE"
              variant="outlined"
              value={value.price || ""}
              onChange={handelInput}
              error={!!validation.price}
            />
            <TextField
              fullWidth
              type="number"
              name="quantity"
              label="QUANTITY"
              variant="outlined"
              value={value.quantity || ""}
              onChange={handelInput}
              error={!!validation.quantity}
              helperText={!value.quantity}
            />
          </div>
          <div
            style={{
              height: "15%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            {" "}
            <motion.button
              style={{
                height: "65%",
                width: "12%",
                color: "#fff",
                background: "#176B87",
                border: "none",
                borderRadius: 5,
                fontSize: 14,
                cursor: "pointer",
              }}
              whileHover={{ background: "#092635", scale: 1.05 }}
              type="submit"
              onClick={handelSubmit}
            >
              SEND
            </motion.button>
            <motion.button
              style={{
                height: "65%",
                width: "12%",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                fontSize: 12,
                background: "#176B87",
                cursor: "pointer",
              }}
              whileHover={{ background: "#092635", scale: 1.05 }}
              onClick={handelAddCoinClose}
            >
              CANCEL
            </motion.button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCoin;
