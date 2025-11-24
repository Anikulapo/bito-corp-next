"use client";

import { useState } from "react";
import { Mail, Lock, Building2, MapPin, Phone } from "lucide-react";
import { useAppSelector } from "@/state/hooks";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const theme = useAppSelector((state) => state.theme.theme);
  const isDarkMode = theme === "dark";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    location: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Firebase authentication implementation
    // To integrate Firebase, add this to your project:
    // 1. Include Firebase SDK via CDN in your HTML
    // 2. Initialize Firebase with your config
    // 3. Use Firebase REST API for authentication

    if (isSignUp) {
      console.log("Sign up with:", formData);
      // Example Firebase REST API signup:
      // const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: formData.email,
      //     password: formData.password,
      //     returnSecureToken: true
      //   })
      // });
      // Store additional business info in Firestore using REST API
      alert("Sign up functionality - Ready for Firebase integration");
    } else {
      console.log("Login with:", {
        email: formData.email,
        password: formData.password,
      });
      // Example Firebase REST API login:
      // const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: formData.email,
      //     password: formData.password,
      //     returnSecureToken: true
      //   })
      // });
      alert("Login functionality - Ready for Firebase integration");
    }
  };

  const bgColor = isDarkMode ? "bg-[#262626]" : "bg-gray-50";
  const cardBg = isDarkMode ? "bg-[#323232]" : "bg-white";
  const textColor = isDarkMode ? "text-[#EBEBEB]" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-[#D1D1D1]" : "text-gray-600";
  const inputBg = isDarkMode ? "bg-[#3a3a3a]" : "bg-white";
  const inputBorder = isDarkMode ? "border-gray-600" : "border-gray-300";
  const inputFocus = isDarkMode
    ? "focus:border-indigo-400"
    : "focus:border-indigo-500";

  return (
    <div
      className={`relative min-h-screen ${bgColor} flex items-center justify-center px-4 transition-colors duration-200`}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold ${textColor}`}>
            Pay<span className="text-indigo-600">Zen</span>
          </h1>
          <p className={`mt-2 ${textSecondary}`}>
            {isSignUp ? "Create your account" : "Welcome back"}
          </p>
        </div>

        {/* Login/Signup Card */}
        <div
          className={`${cardBg} rounded-2xl shadow-xl p-8 transition-colors duration-200`}
        >
          <div className="space-y-5">
            {/* Email Field */}
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-2`}>
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary} w-5 h-5`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className={`w-full pl-11 pr-4 py-3 ${inputBg} ${inputBorder} ${inputFocus} ${textColor} border rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors`}
                />
              </div>
            </div>

            {/* Sign Up Fields */}
            {isSignUp && (
              <>
                {/* Business Name */}
                <div>
                  <label
                    className={`block text-sm font-medium ${textColor} mb-2`}
                  >
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary} w-5 h-5`}
                    />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Meng Design"
                      className={`w-full pl-11 pr-4 py-3 ${inputBg} ${inputBorder} ${inputFocus} ${textColor} border rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label
                    className={`block text-sm font-medium ${textColor} mb-2`}
                  >
                    Location
                  </label>
                  <div className="relative">
                    <MapPin
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary} w-5 h-5`}
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Taiwan"
                      className={`w-full pl-11 pr-4 py-3 ${inputBg} ${inputBorder} ${inputFocus} ${textColor} border rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    className={`block text-sm font-medium ${textColor} mb-2`}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary} w-5 h-5`}
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+886123456789"
                      className={`w-full pl-11 pr-4 py-3 ${inputBg} ${inputBorder} ${inputFocus} ${textColor} border rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors`}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Password Field */}
            <div>
              <label className={`block text-sm font-medium ${textColor} mb-2`}>
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textSecondary} w-5 h-5`}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-4 py-3 ${inputBg} ${inputBorder} ${inputFocus} ${textColor} border rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors`}
                />
              </div>
            </div>

            {/* Remember Me / Forgot Password (Login only) */}
            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className={`ml-2 text-sm ${textColor}`}>
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-500/30"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>

            {/* Toggle Sign Up/Login */}
            <div className="text-center pt-4">
              <p className={`text-sm ${textSecondary}`}>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-indigo-600 hover:text-indigo-500 font-semibold"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className={`absolute inset-0 flex items-center`}>
              <div className={`w-full border-t ${inputBorder}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${cardBg} ${textSecondary}`}>
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-3 ${inputBg} ${inputBorder} border rounded-lg hover:bg-gray-100 ${
                isDarkMode ? "hover:bg-gray-700" : ""
              } transition-colors`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className={textColor}>Google</span>
            </button>
            <button
              type="button"
              className={`flex items-center justify-center px-4 py-3 ${inputBg} ${inputBorder} border rounded-lg hover:bg-gray-100 ${
                isDarkMode ? "hover:bg-gray-700" : ""
              } transition-colors`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill={isDarkMode ? "#fff" : "#000"}
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className={textColor}>GitHub</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className={`text-center text-xs ${textSecondary} mt-8`}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
