import axios from "../../../app/axios";

export const addPost = async (postData: {
  [x: string]: string | Blob | null;
}) => {
  try {
    const formData = new FormData();

    // Append img if it is not null
    if (postData.img !== null) {
      formData.append("img", postData.img);
      formData.append("categoryId", postData.categoryId);
      formData.append("userId", postData.userId);
    }

    // Append other properties

    const response = await axios.post(
      "http://localhost:8000/posts/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Failed to add post", error);
    throw error;
  }
};
