import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { ReactSVG } from "react-svg";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { ErrorState, UserState } from "../../../types";
import { getAssetPath, isValidEmail } from "../../utils/commonFunction";
import {
  finishCall,
  setError,
  startCall,
} from "../../redux/slices/commonSlice";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number>(0);
  const dispatch = useAppDispatch();
  const user: UserState = useAppSelector((state) => state.user);
  const error: ErrorState = useAppSelector((state) => state.common);
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Signing up with email:", email);
  };
  const handleGoogleSignIn = async () => {
    try {
      dispatch(startCall({ location: "SignUp" }));
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = result.user;
      dispatch(setUser({ uid, displayName, email, photoURL }));
      dispatch(finishCall({ location: "SignUp" }));
    } catch (error) {
      console.error("Error signing in with Google", error);
      toast.error("Error signing in with Google");
      dispatch(
        setError({
          location: "SignUp",
          errorMessage: "Error signing in with Google",
        })
      );
    }
  };
  useEffect(() => {
    if (user?.uid) {
      navigate("/home");
    }
  }, [user.uid]);

  useEffect(() => {
    if (isValidEmail(email)) {
      setIsEmailValid(true);
    }
  }, [email]);

  console.log("user", user);

  return (
    <div className="bg-white flex flex-col items-center justify-center p-4 h-full">
      {error.location === "SignUp" && error.loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50"></div>
      )}
      {/* Main Container */}
      <div className="w-full  space-y-8 flex flex-row justify-center">
        {/* Illustration */}
        <div className="flex justify-center">
          <img
            src="https://brilliant.org/images/nux/koji-node.gif"
            style={{
              width: "500px",
            }}
          />
        </div>

        {/* Sign Up Content */}
        <div className="text-center space-y-6 max-w-[410px]">
          <h1 className="text-2xl font-bold text-gray-900">
            Create a free account to discover your personalized learning path
          </h1>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-md bg-white hover:bg-gray-50"
              onClick={() => handleGoogleSignIn()}
            >
              <ReactSVG
                src={getAssetPath("/icons/google.svg")}
                className="w-5 h-5 mr-2"
              />
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full shadow-md bg-white hover:bg-gray-50">
              <ReactSVG
                src={getAssetPath("/icons/facebook.svg")}
                style={{
                  color: "rgb(8, 102, 255)",
                }}
                className="w-5 h-5 mr-2"
              />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Email"
                required
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <Mail size={20} />
              </div>
            </div>
            {isEmailValid && (
              <>
                <div className="w-full flex flex-row gap-2 justify-between">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    placeholder="First Name"
                    required
                  />

                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="px-2 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                    placeholder="Age"
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => alert("Only Google Login Works")}
            >
              Sign up
            </button>
          </form>

          {/* Terms and Privacy */}
          <p className="text-sm text-gray-600">
            By clicking above, I agree to Brilliant's{" "}
            <a href="#" className="text-gray-900 underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-900 underline">
              Privacy Policy
            </a>
          </p>

          {/* Login Link */}
          <p className="text-sm text-gray-600">
            Existing user?{" "}
            <a href="#" className="text-gray-900 underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
