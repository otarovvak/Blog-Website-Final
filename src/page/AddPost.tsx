import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../features/post/api/addPost";
import { CategorySelect } from "../features/postCategory/ui/CategorySelect";
import { Nav } from "../components/Nav";
import { jwtDecode } from "jwt-decode";
import "../index.css";

export const AddPost = () => {
  const [img, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const navigate = useNavigate();
  console.log(categoryId);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userId && categoryId && img) {
      try {
        const data = await addPost(title, userId, categoryId, body, img);
        console.log(data);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("UserId:", userId);
      console.log("CategoryId:", categoryId);
      console.log("Image:", img);
      console.error("User ID, Category ID, and Image must be provided.");
    }
  };

  return (
    <div>
      <Nav />
      <div className="container small-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-block">
            <h3 className="text-lg font-semibold">Image:</h3>
            <input
              type="file"
              id="img"
              name="img"
              className="user-input"
              required
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <div className="input-block">
            <h3 className="text-lg font-semibold">
              Choose the category of the post
            </h3>
            <CategorySelect value={categoryId} onChange={setCategoryId} />{" "}
          </div>
          <div className="input-block">
            <h3 className="text-lg font-semibold">Title</h3>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-block">
            <h3 className="text-lg font-semibold">Body</h3>
            <textarea
              id="body"
              name="body"
              placeholder="body of your post"
              className="w-64"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};
