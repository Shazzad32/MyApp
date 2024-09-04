import React, { useEffect, useState } from "react";
import BinanceTable from "./BinanceTable";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { binanceManager } from "../api";
import EditModal from "./EditModal";
import TopSubDiv from "./TopSubDiv";
import AddCoin from "./AddCoin";
import { motion } from "framer-motion";
import "./main.css";
import "./style/home.css";
import StateModal from "./StateModal";
import EnterModal from "./EnterModal";

const BinanceHome = () => {
  const [state, setState] = useState({
    datas: [],
    dataResults: [],
    searchItem: "",
    modalOpen: false,
    stateOpen: false,
    enterModalOpen: false,
    open: false,
    selectItem: null,
  });

  useEffect(() => {
    getData();
    console.log("tttt");

    const intervalId = setInterval(() => {
      getData();
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const getData = () => {
    binanceManager
      .getBinanceCoins()
      .then((data) =>
        setState((old) => ({
          ...old,
          datas: data.sort((a, b) => a.name.localeCompare(b.name)),
          dataResults: data,
        }))
      )
      .catch((err) => console.log(err));
  };

  const updateItem = (item) => {
    binanceManager
      .updateCoin(item)
      .then((updatedItem) => {
        let arr = [...state.datas];
        let oldItem = arr.filter((x) => x._id === item._id)[0];
        arr[arr.indexOf(oldItem)] = updatedItem;
        setState((old) => ({ ...old, datas: arr, modalOpen: false }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCoin = (item) => {
    binanceManager
      .saveCoin(item)
      .then((createdItem) => {
        setState((old) => ({
          ...old,
          datas: [...old.datas, createdItem],
          open: false,
        }));
        handelAddCoinClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const exitFromCoin = (item) => {
    binanceManager
      .exitFromCoin(item)
      .then((updatedItem) => {
        let arr = [...state.datas];
        let oldItem = arr.filter((x) => x._id === item._id)[0];
        arr[arr.indexOf(oldItem)] = updatedItem;
        setState((old) => ({ ...old, datas: arr, stateOpen: false }));
      })
      .catch((err) => console.log(err));
  };

  const enterIntoCoin = (item) => {
    binanceManager
      .enterIntoCoin(item)
      .then((updatedItem) => {
        let arr = [...state.datas];
        let oldItem = arr.filter((x) => x._id === item._id)[0];
        arr[arr.indexOf(oldItem)] = updatedItem;
        setState((old) => ({ ...old, datas: arr, enterModalOpen: false }));
      })
      .catch((err) => console.log(err));
  };

  const handelEditModal = (item) => {
    const old = { ...state };
    old.modalOpen = true;
    old.selectItem = item;
    setState(old);
  };

  const handelModalClose = () => {
    const old = { ...state };
    old.modalOpen = false;
    setState(old);
  };

  const handelStateModalOpen = (item) => {
    const old = { ...state };
    old.stateOpen = true;
    old.selectItem = item;
    setState(old);
  };
  const handelStateModalClose = () => {
    const old = { ...state };
    old.stateOpen = false;
    setState(old);
  };

  const handelEnterModalOpen = (item) => {
    const old = { ...state };
    old.enterModalOpen = true;
    old.selectItem = item;

    setState(old);
  };

  const handelEnterModalClose = () => {
    const old = { ...state };
    old.enterModalOpen = false;
    setState(old);
  };

  const totalBuyingPrice = state.datas.reduce(
    (acc, item) => acc + item.buying_amount,
    0
  );
  const totalSeelingPrice = state.datas.reduce(
    (acc, item) => acc + item.selling_amount,
    0
  );
  const totalGridAmount = state.datas.reduce(
    (acc, item) => acc + item.grid_amount,
    0
  );

  const mimimumProfit = totalSeelingPrice * 0.01;

  const maximumProfit = totalSeelingPrice + totalGridAmount - totalBuyingPrice;

  const handelAddCoinOpen = () => {
    const old = { ...state };
    old.open = true;
    setState(old);
  };
  const handelAddCoinClose = () => {
    const old = { ...state };
    old.open = false;
    setState(old);
  };

  const searchText = (e) => {
    let searchTxt = e.target.value;
    let old = { ...state };
    if (searchTxt === "") {
      old.datas = [...old.dataResults];
    } else {
      old.datas = [...old.dataResults].filter((x) => {
        return x.name && x.name.toLowerCase().includes(searchTxt.toLowerCase());
      });
    }
    old.searchItem = searchTxt;

    setState(old);
  };

  const handleChange = () => {
    alert("Button Click");
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <>
        <div
          className="topbar"
          style={{
            height: "15%",
            width: "100%",
            display: "flex",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "50%",
                width: "95%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TopSubDiv
                name="TOTAL GRID AMOUNT"
                price={totalGridAmount.toFixed(1)}
              />
              <TopSubDiv
                name="TOTAL SELLING AMOUNT"
                price={totalSeelingPrice.toFixed(1)}
              />
              <TopSubDiv
                name="TOTAL BUYING AMOUNT"
                price={totalBuyingPrice.toFixed(1)}
              />
              <TopSubDiv
                name="MINIMUM PROFIT"
                price={mimimumProfit.toFixed(1)}
              />
              <TopSubDiv
                name="MAXIMUM PROFIT"
                price={maximumProfit.toFixed(1)}
              />
              <TopSubDiv
                name="GRID PROFIT RATIO"
                price={
                  ((mimimumProfit * 100) / totalGridAmount).toFixed(2) + "%"
                }
              />
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TopSubDiv name="TOTAL COINS" price={state.datas.length} />
            <div
              style={{
                height: 54,
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                onChange={searchText}
                value={state.searchItem}
                label="Search By Coin Name"
                type="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {<SearchIcon />}
                    </InputAdornment>
                  ),
                }}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            height: "85%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "96%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 9,
                padding: 5,
              }}
            >
              {state.datas.map((item, i) => (
                <BinanceTable
                  key={i}
                  item={item}
                  handleChange={handleChange}
                  handelEditModal={handelEditModal}
                  handelStateModalOpen={handelStateModalOpen}
                  handelEnterModalOpen={handelEnterModalOpen}
                />
              ))}
            </div>
          </div>
          <motion.div
            style={{
              height: 45,
              width: 45,
              right: 50,
              bottom: 40,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: "red",
              position: "absolute",
            }}
            whileHover={{ background: "#092635", scale: 1.1 }}
            onClick={handelAddCoinOpen}
          >
            <p
              style={{
                width: "100%",
                height: "100%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                marginTop: -8,
              }}
            >
              +
            </p>
          </motion.div>
        </div>
      </>
      {state.open && (
        <AddCoin
          createCoin={createCoin}
          open={state.open}
          handelAddCoinClose={handelAddCoinClose}
        />
      )}
      {state.modalOpen && (
        <EditModal
          updateItem={updateItem}
          selectItem={state.selectItem}
          open={state.modalOpen}
          handelModalClose={handelModalClose}
        />
      )}
      {state.stateOpen && (
        <StateModal
          open={state.stateOpen}
          handelStateModalClose={handelStateModalClose}
          selectItem={state.selectItem}
          exitFromCoin={exitFromCoin}
        />
      )}
      {state.enterModalOpen && (
        <EnterModal
          open={state.enterModalOpen}
          selectItem={state.selectItem}
          handelEnterModalClose={handelEnterModalClose}
          enterIntoCoin={enterIntoCoin}
        />
      )}
    </div>
  );
};

export default BinanceHome;
