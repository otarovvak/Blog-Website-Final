import axios from "../../../app/axios";

export const addPost = async (
  title: string,
  userId: number,
  categoryId: string,
  body: string,
  img: File
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("userId", userId.toString());
  formData.append("categoryId", categoryId.toString());
  formData.append("body", body);
  formData.append("img", img);

  const res = await axios.post("http://localhost:8000/post/add/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
