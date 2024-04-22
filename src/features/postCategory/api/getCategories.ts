import axios from "axios";

import type { Category } from "../model/category";

export const getCategories = async (): Promise<Category[]> => {
  const categories = await axios.get("http://localhost:8000/post/categories");
  return categories.data;
};
