import { useState } from "react";
import Bg from "../assets/background.png";
import { app } from "../firebase/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000);
      })
      .catch((err) => toast.error("wrong Id/Password"))
      .finally(() => setLoading(false));
  };

  const loginWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Logged in with Google!");
        setTimeout(() => navigate("/dashboard"), 1000);
      })
      .catch((error) => toast.error("Pop up closed by user"))
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-[25rem] h-[35rem] bg-white shadow-2xl rounded-lg">
        <h1 className="text-4xl text-center p-4 text-indigo-700 font-bold">
          Jira Lite
        </h1>
        <h4 className="text-center p-1 pt-0 font-semibold">
          Log in to continue
        </h4>

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
            disabled={loading}
            className={`w-full bg-indigo-600 text-white font-semibold py-3 rounded-md transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="text-sm">
            Not a user?{" "}
            <NavLink to="/" className="text-blue-600 hover:underline">
              Click to Sign up
            </NavLink>
          </div>

          <div className="flex items-center justify-center text-sm space-x-2">
            <NavLink to="/Forgote" className="text-blue-600 hover:underline">
              Can't log in?
            </NavLink>
            <span className="text-gray-400">|</span>
            <NavLink to="/" className="text-blue-600 hover:underline">
              Create an account
            </NavLink>
          </div>

          <div className="text-center text-gray-500 font-semibold">— OR —</div>

          <button
            type="button"
            onClick={loginWithGoogle}
            disabled={loading}
            className={`w-full flex items-center justify-center gap-3 bg-gray-200 border border-gray-300 py-2 rounded-md transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-md"
            }`}
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
        </form>
      </div>
    </div>
  );
};

export default Login;
