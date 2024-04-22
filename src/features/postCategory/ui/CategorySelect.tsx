import { useState, useEffect } from "react";
import { getCategories } from "../api/getCategories";

import type { Category } from "../model/category";

interface Props {
  value?: number;
  onChange?: (value: number) => void;
}

export const CategorySelect = ({ value, onChange }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((items: Category[]) => {
      setCategories(items);
    });
  }, []);
  return (
    <select
      value={value}
      onChange={(e) => onChange && onChange(parseInt(e.target.value))}
    >
      {categories.map((category) => (
        <option value={category.id}>{category.name}</option>
      ))}
    </select>
  );
};
