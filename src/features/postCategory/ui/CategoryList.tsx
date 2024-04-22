import { useState, useEffect } from "react";
import { getCategories } from "../api/getCategories";

import type { Category } from "../model/category";

export const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((items) => setCategories(items));
  }, []);
  return (
    <ul>
      {categories.map((category) => (
        <li>{category.name}</li>
      ))}
    </ul>
  );
};
