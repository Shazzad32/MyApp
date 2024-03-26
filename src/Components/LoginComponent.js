import { Button, InputAdornment, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import "./style/responsive.css";

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "forbit" && password === "rrr123") {
      onLogin();
    } else {
      alert("Incurrect username or password");
    }
  };

  return (
    <div
      className="main_top"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="top_log"
        style={{
          height: "50%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <div
          className="login"
          style={{
            height: "90%",
            width: "60%",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            borderBottom: "1px solid silver",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          }}
        >
          <h2 style={{ color: "black" }}>LOG IN</h2>
          <TextField
            className="name"
            label="User Name"
            type="text"
            value={username}
            style={{ width: "75%" }}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {<AccountBoxOutlinedIcon />}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className="password"
            label="Password"
            type="password"
            value={password}
            style={{ width: "75%" }}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {<LockOutlinedIcon />}
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="button"
            onClick={handleLogin}
            style={{
              width: "75%",
              height: 45,
              background: "#3887BE",
              color: "white",
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
