import { useState, useEffect } from "react";

import { PostCard } from "./postCard";

import { getPosts } from "../api/getPosts";

import type { Post } from "../model/post";

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          imgUrl={post.imgUrl}
          title={post.title}
          body={post.body}
          userId={post.userId}
          createdDate={post.createdDate}
          categoryId={post.categoryId}
        />
      ))}
    </div>
  );
};
