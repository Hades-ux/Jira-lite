import Bg from "../assets/background.png";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const auth = getAuth(app);

const Forgote = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(`Password reset link sent to ${email}`);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-[30rem] h-[35rem] rounded-md bg-gray-100 shadow-2xl">
        <h1 className="text-4xl text-center p-4 text-indigo-700 font-bold">
          Jira-lite
        </h1>
        <h2 className="text-center p-3 text-xl">Can't log in?</h2>

        <form onSubmit={handleForgot}>
          <div className="flex flex-col gap-2 p-10">
            <label htmlFor="email">We'll send a recovery link to</label>
            <input
              id="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="bg-gray-100 p-3 rounded-md outline-none ring-2 ring-gray-300 focus:ring-gray-600 duration-200"
            />
          </div>
          <div className="p-10 pt-0">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>

          <NavLink
            to="/login"
            className="text-blue-600 hover:underline flex justify-center"
          >
            Return to log in
          </NavLink>

          <div className="flex justify-center flex-col items-center">
            <div className="border-t-2 w-96 mt-2 flex items-center flex-col border-gray-400">
              <h1 className="text-2xl text-center w-full text-indigo-700 font-bold">
                Jira-lite
              </h1>
              <p className="p-2 text-sm text-gray-400 text-center">
                Try to make a Jira-lite of official Jira aka a clone with some
                features.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgote;
