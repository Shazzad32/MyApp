import { Switch, CircularProgress, Typography, Box } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const BinanceTable = ({ item, handleChange, handelEditModal }) => {
  const [activeButton, setActiveButton] = useState(null);

  // Handlers for button clicks
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const value = 10;

  return (
    <div
      style={{
        height: "50%",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 275,
          width: "90%",
          background: "white",
          borderRadius: 10,
          display: "flex",
          boxShadow:
            "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "46%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "95%",
              width: "100%",
              background: "white",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: 5,
                marginLeft: 20,
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: 16 }}>COIN NAME</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>BUYING AMOUNT</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>BUYING FACTOR</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>SELLING AMOUNT</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>GRID AMOUNT</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>GRID QUANTITY</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>CURRENT PRICE</p>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 5,
                  borderRadius: 20,
                }}
              >
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.buying_amount.toFixed(4)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.buying_factor}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.selling_amount.toFixed(4)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.grid_amount.toFixed(4)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.grid_quantity.toFixed(4)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.current_price.toFixed(7)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "100%",
            width: "46%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "95%",
              width: "100%",
              background: "white",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: 5,
                textAlign: "left",
              }}
            >
              <p style={{ fontWeight: "bold", fontSize: 16 }}>AUTO BUYING</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>AUTO SELLING</p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                REFERENCE PRICE
              </p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                DESTINATION PRICE
              </p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                BUYING RESTRICTION LIMIT
              </p>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                BUYING PER DROP
              </p>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "95%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 5,
                  borderRadius: 20,
                }}
              >
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {
                    <Switch
                      onChange={() => handleChange()}
                      checked={item.auto_buying}
                    />
                  }
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {
                    <Switch
                      onChange={() => handleChange()}
                      checked={item.auto_selling}
                    />
                  }
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.reference_price.toFixed(7)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.destination_price.toFixed(7)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.buying_restriction_limit.toFixed(4)}
                </p>
                <p
                  style={{
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow:
                      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                  }}
                >
                  {item.buying_per_drop}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "8%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <motion.div
            style={{
              width: "65%",
              borderRadius: 5,
              fontWeight: "bold",
              height: 40,
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: "#092635",
              // border: "1px solid gray",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            }}
            whileHover={{ background: "orange", color: "black", scale: 1.05 }}
            onClick={() => handelEditModal(item)}
          >
            <FiEdit
              style={{
                color: "white",
              }}
            />
          </motion.div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <div
              style={{
                height: 40,
                width: "65%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderRadius: 5,
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              <CircularProgress
                style={{ height: 35, width: 35 }}
                variant="determinate"
                color={
                  item.reference_price > item.current_price
                    ? "error"
                    : "success"
                }
                value={
                  Math.abs(
                    (1 - item.current_price / item.reference_price) * 100
                  ) * 200
                }
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="sub-title"
                  component="div"
                  style={{ fontSize: 9, fontWeight: "bold", color: "black" }}
                >
                  {`${(
                    Math.abs(1 - item.current_price / item.reference_price) *
                    100
                  ).toFixed(2)}%`}
                </Typography>
              </Box>
            </div>
            <div
              style={{
                height: 40,
                width: "65%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                background: "#092635",
                color: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                {(
                  Math.abs(item.current_price / item.destination_price) * 100
                ).toFixed(2)}
                %
              </p>
            </div>
            <div
              style={{
                height: 40,
                width: "65%",
                borderRadius: 5,
                background:
                  item.grid_amount > item.buying_restriction_limit
                    ? "red"
                    : "green",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
              }}
            ></div>
            <div
              style={{
                height: 65,
                width: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  height: "45%",
                  width: "97%",
                  background: "gray",
                  border: "none",
                  borderRadius: 5,
                }}
                onClick={() => handleButtonClick("A")}
                disabled={activeButton === "B"}
              >
                A
              </button>
              <button
                style={{
                  height: "45%",
                  width: "97%",
                  background: "gray",
                  border: "none",
                  borderRadius: 5,
                }}
                onClick={() => handleButtonClick("B")}
                disabled={activeButton === "A"}
              >
                B
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinanceTable;
