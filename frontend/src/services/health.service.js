
import api from "../lib/axios";

export const getHealth = async () => {
  const response = await api.get("/health");
  return response.data;
};
