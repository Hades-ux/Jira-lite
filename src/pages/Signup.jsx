import { useState } from "react";
import logo from "../assets/jira-logo.png";
import horizontalLogo from "../assets/Atlassian logo neutral RGB 2x.png";
import { app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful!");
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signupWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed up successfully with Google!");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className={`w-full bg-indigo-600 text-white font-semibold py-3 rounded-md transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
          }`}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>

        <div className="text-center text-gray-500 font-semibold">— OR —</div>

        <button
          type="button"
          onClick={signupWithGoogle}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-md transition ${
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