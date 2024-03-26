import BinanceHome from "./BinanceHome";
import LoginComponent from "./LoginComponent";
import { useState } from "react";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <div>
      {!loggedIn ? <LoginComponent onLogin={handleLogin} /> : <BinanceHome />}
    </div>
  );
};

export default Main;
