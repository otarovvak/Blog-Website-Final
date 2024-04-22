import React, { useState } from "react";
import { addPost } from "../features/post/api/addPost"; // adjust the import path as necessary
import { CategorySelect } from "../features/postCategory/ui/CategorySelect";
import { Nav } from "../components/Nav";
import "../index.css";

export const AddPost: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const [userId, setUserId] = useState<number | undefined>(undefined); // Update how you get userId
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const postData = {
        img: image,
        title: title,
        body: body,
        categoryId: categoryId,
        userId: userId,
      };

      const data = await addPost(postData);
      console.log("Post added successfully", data);
      // Add any additional actions like redirection or alert here
    } catch (error) {
      console.error("There was an error submitting the post:", error);
      // Handle the error appropriately
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
            <CategorySelect value={categoryId} onChange={setCategoryId} />
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
