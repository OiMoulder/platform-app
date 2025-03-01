import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Creator Platform</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Discover and support your favorite creators. Join a community where creativity thrives.
      </p>
      <div className="flex space-x-4">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
          Explore Creators
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
