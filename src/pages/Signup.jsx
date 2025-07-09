import { useState } from "react";
import logo from "../assets/jira-logo.png";
import horizontalLogo from "../assets/Atlassian logo neutral RGB 2x.png";
import { app } from "../firebase/firebase";
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,} from "firebase/auth";
import { NavLink } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("User signed up:", value.user);
        alert("Signup successful!");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
      setEmail("")
      setPassword("")
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in with Google:", result.user);
        alert("Signed up successfully with Google!");
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center px-4 pt-10 pb-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 518' preserveAspectRatio='none' fill='%23E9F2FE' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1331.5 -20.8369L-38.614 -36.9811L-43.579 433.588H243.576L248.105 518L1598.49 435.131L1574.37 -14.3789L1331.5 0.525597V-20.8369Z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 420px",
        backgroundPosition: "top center",
      }}
    >
      <img src={logo} alt="Jira logo" className="w-28 h-10 mb-4" />

      <form
        onSubmit={signupUser}
        className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">
          Get started with Jira
        </h1>

        <button
          type="button"
          onClick={signupWithGoogle}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-md hover:shadow-md transition"
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

        <div className="relative text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-500">or</div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Work email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 p-3 rounded-md outline-none ring-2 ring-gray-300 focus:ring-gray-600 duration-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            Create password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 p-3 rounded-md outline-none ring-2 ring-gray-300 focus:ring-gray-600 duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-indigo-700 transition"
        >
          Sign up
        </button>

        <p className="text-xs text-center text-gray-500">
          Using a work email helps find teammates and boost collaboration.
        </p>

        <div className="text-center">
          Already a user?{" "}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Click to Login
          </NavLink>
        </div>
      </form>

      <img src={horizontalLogo} alt="Atlassian" className="w-36 mt-6" />
    </div>
  );
};

export default Signup;
