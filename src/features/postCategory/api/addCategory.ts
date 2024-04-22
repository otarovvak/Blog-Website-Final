import axios from "../../../app/axios";

export const addCategory = async (name: string) => {
  const res = await axios.post("http://localhost:8000/post/add/category", {
    name,
  });
  return res.data;
};
