import { getEnvVariables } from "@/helpers";
import axios from "axios";

const { VITE_STORE_API_URL } = getEnvVariables();

const productsApi = axios.create({
  baseURL: VITE_STORE_API_URL,
});

export { productsApi };
