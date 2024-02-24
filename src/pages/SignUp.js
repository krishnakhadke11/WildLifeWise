import React from "react";

const SignUp = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    // You can add your authentication code or API calls
    // After successful login, you can close the modal using onClose
    onClose();
  };

  return (
    <div className="bg-white relative w-full mt-5">
      <form
        className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8 w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-medium text-gray-900">Sign Up</h3>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required=""
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="text-sm font-medium text-gray-900 block mb-2"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            pattern="[0-9]{10}"
            maxLength="10"
            minLength="10"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your mobile number"
            required=""
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                required=""
              />
            </div>
            <div className="text-sm ml-3">
              <label htmlFor="remember" className="font-medium text-gray-900">
                Remember me{" "}
              </label>
            </div>
          </div>
          <a href="#" className="text-sm text-blue-700 hover:underline">
            {" "}
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign In
        </button>
        <div className="text-sm font-medium text-gray-500 flex items-center justify-center">          Already registered?{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Log In
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
