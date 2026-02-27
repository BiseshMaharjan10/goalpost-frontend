import React, { useState } from "react";
import { Mail, ArrowRight, Lock } from "lucide-react";

const ForgetPass = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative">
      {/* Background Image */}
      <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200)`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex max-w-6xl w-full min-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-12 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-lg">
              <Lock className="text-white" size={32} />
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-3">
                Forgot Password?
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                No worries! Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-4 focus:ring-gray-100 transition-all"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                className="group w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Reset Link
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-gray-50 to-white text-gray-500">
                    or
                  </span>
                </div>
              </div>

              {/* Back to Login */}
              <p className="text-center text-sm text-gray-600">
                Remember your password?{" "}
                <span 
                  className="text-gray-900 font-bold cursor-pointer hover:underline inline-flex items-center gap-1 group">
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800" 
            alt="Soccer Player" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass