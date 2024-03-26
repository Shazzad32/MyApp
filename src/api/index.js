import axios from "axios";

import BinanceManager from "./binance_manager";

export const binanceManager = new BinanceManager(axios);
