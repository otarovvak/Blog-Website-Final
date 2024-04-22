import { PostList } from "../features/post/ui/postList";
import { Nav } from "../components/Nav";
import { Advertisement } from "../components/Advertisement";
import "../index.css";

export const MainPage = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container relative">
        <img src="image.png" alt="" className="w-full" />

        <div className="absolute -bottom-12 left-12 mt-10  post-main flex-col p-10 bg-white shadow rounded">
          <div className="bg-blue-600 max-w-fit px-3 text-white text-sm rounded">
            Technology
          </div>
          <h1 className="text-4xl font-semibold	pt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="aboutPost pt-6">
            <div className="author flex items-center">
              <p className="gray text-base pl-2">Jason Francisco</p>
              <p className="release-date gray pl-3">August 20, 2020</p>
            </div>
          </div>
        </div>
      </div>
      <Advertisement></Advertisement>
      <PostList></PostList>
    </div>
  );
};
