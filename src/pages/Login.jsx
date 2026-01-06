import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import messi from "../assets/messi.jpeg"
import futsal from "../assets/futsal.jpeg"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative">
      {/* Background Image */}
      <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${futsal})`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Log In Account
            </h1>
            <p className="text-sm text-gray-500">
              Login to access your account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email*
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                type="checkbox"
                id="remember"
                name="rememberMe"
                className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-gray-900"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember Me
                </label>
            </div>
            <span className="text-sm text-gray-900 font-semibold cursor-pointer hover:underline">
                Forgot password?
            </span>
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
            >
            Log In
            </button>
           
           
            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <span className="text-gray-900 font-semibold cursor-pointer hover:underline">
                Sign up
            </span>
            </p>
          </div>  
        </div>

        {/* Right Side */}
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          <img 
            src={messi} 
            alt="Futsal Court" 
            className="absolute inset-0 w-full h-full  object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
}

export default Login
