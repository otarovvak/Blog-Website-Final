import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store"; // Adjust the path to your store file as needed
import { clearTokens } from "../features/auth/slice/authSlice"; // Ensure this action is defined in your authSlice
import Logo from "../shared/logo.svg";

export const Nav = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearTokens());
  };
  return (
    <div className="container mx-auto logo grid grid-cols-7 items-center py-5">
      <div className="col-span-2">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="searchLight col-span-2 flex justify-center">
        <div className="search">
          <input type="text" placeholder="Search" className="bg-gray-100" />
        </div>
      </div>
      <ul className="col-span-3 flex items-center justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-post">Add post</Link>
        </li>

        {accessToken ? (
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
