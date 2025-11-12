import axios from "axios";
import { Platform } from "react-native";

const baseURL = Platform.select({
  ios: "http://localhost:3001",
  android: "http://10.0.1.3:3001",
});

export const dtMoneyApi = axios.create({
  baseURL,
});
