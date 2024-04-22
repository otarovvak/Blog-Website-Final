import { useState } from "react";

import { signUp } from "../features/auth";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await signUp(username, password);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };
  return (
    <div className="small-container">
      <h1 className="text-4xl font-semibold	pt-4">Register</h1>

      <form onSubmit={handleRegistration}>
        <div className="input-block">
          <label htmlFor="username">
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="10.5"
              viewBox="0 0 448 512"
            >
              <path
                fill="#4b6bfb"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
          </label>
          <input
            type="text"
            className="user-input"
            id="username"
            value={username}
            placeholder="Email or Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-block">
          <svg
            className="icons"
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="10.5"
            viewBox="0 0 448 512"
          >
            <path
              fill="#4b6bfb"
              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
            />
          </svg>{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="signin-btn log-btn button">
          Register
        </button>
      </form>
    </div>
  );
};
