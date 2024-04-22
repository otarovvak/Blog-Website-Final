import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "../page/MainPage";
import { SignUpPage } from "../page/SignUp";
import { LogInPage } from "../page/LogIn";
import { AddPost } from "../page/AddPost";
import { Category } from "../page/Category";

export const router = createBrowserRouter([
  {
    path: "/add-post",
    element: <AddPost />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);
