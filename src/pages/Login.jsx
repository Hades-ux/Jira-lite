import { useState } from "react";
import Bg from "../assets/background.png";
import { app } from "../firebase/firebase";
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import { NavLink } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Login successful!");
        console.log(value.user);
      })
      .catch((err) => alert(err.message));
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Logged in with Google!");
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-[25rem] h-[35rem] bg-white shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center p-4 text-indigo-700 font-bold">
          🌐 Jira Lite
        </h1>
        <h4 className="text-center p-1 font-semibold">Log in to continue</h4>

        <form onSubmit={logIn} className="space-y-4 px-6 pt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="bg-gray-100 p-3 rounded-md outline-none ring-2 ring-gray-300 focus:ring-gray-600 duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              className="bg-gray-100 p-3 rounded-md outline-none ring-2 ring-gray-300 focus:ring-indigo-600 duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Log In
          </button>

          <div className="text-center text-gray-500 font-semibold">— OR —</div>

          <button
            type="button"
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 bg-gray-200 border border-gray-300 py-2 rounded-md hover:shadow-md transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
          <div className="text-center">
            Not a user?{" "}
            <NavLink to="/" className="text-blue-600 hover:underline">
              Click to Signup
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
