import { useState, useEffect } from "react";
import { getCategories } from "../../postCategory/api/getCategories";
import React from "react";

export interface Props {
  imgUrl: string;
  title: string;
  body: string;
  userId: number;
  createdDate: string;
  categoryId: number;
}

export const PostCard = ({
  imgUrl,
  title,
  userId,
  createdDate,
  categoryId,
}: Props) => {
  const [username, setUsername] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const formattedDate = new Date(createdDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/${userId}`);
        const userData = await response.json();
        setUsername(userData.username);
      } catch (error) {
        console.error("Failed to fetch username", error);
      }
    };

    fetchUsername();
  }, [userId]);

  useEffect(() => {
    const fetchCategoryName = async () => {
      try {
        const categories = await getCategories();
        const category = categories.find((cat) => cat.id === categoryId);
        if (category) {
          setCategoryName(category.name);
        }
      } catch (error) {
        console.error("Failed to fetch category name", error);
      }
    };

    fetchCategoryName();
  }, [categoryId]);

  return (
    <div
      onClick={() => {}}
      className="postCard ml-8 bg-white shadow rounded post flex-col p-10"
    >
      <img src={imgUrl} alt="" />
      <p className="bg-blue-600 max-w-fit px-3 text-white text-sm rounded mt-5 mb-3">
        {categoryName}
      </p>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="author flex items-center mt-3">
        <p className="gray text-base ">{username}</p>
        <p className="release-date gray pl-3">{formattedDate}</p>
      </div>
    </div>
  );
};
