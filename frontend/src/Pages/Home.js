
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500">
      <header className="text-center p-16 text-white">
        <h1 className="text-5xl font-bold">Welcome to <span className="text-red-600">Twitter!</span></h1>
        {/* <p className="text-gray-200">The Iconic 60-words Post-making platform, Unleash the yourself, but in 60 words,lol.</p> */}
      </header>
      <section className="text-center p-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800">Join the community today!</h2>
        <p className="text-gray-600">Sign up now to start connecting with people from all over the world.</p>
        <Link to="/register"><button className="btn btn-primary mt-4">Sign Up</button></Link>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center p-16 space-y-8 lg:space-y-0 lg:space-x-8 bg-white">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-purple-500 bg-white p-2 rounded-t-lg">Connect with Friends</h3>
          <p className="text-gray-600">Easily connect with your friends and family. With Tweets, you can find old friends, make new ones, and build a community of like-minded people.</p>
          <Link to="/friends" className="btn btn-primary mt-4">Find Friends</Link>
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-purple-500 bg-white p-2 rounded-t-lg">Share Moments</h3>
          <p className="text-gray-600">Share your photos, videos, and thoughts with your followers. With T-60, you can express yourself in 60 words or less, making your content concise and impactful.</p>
          <Link to="/share" className="btn btn-primary mt-4">Share Now</Link>
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-purple-500 bg-white p-2 rounded-t-lg">Join the Conversation</h3>
          <p className="text-gray-600">Join in on discussions, and share your opinions with the world. With Twitter, you can engage in meaningful conversations and connect with people from all over the world.</p>
          <Link to="/conversation" className="btn btn-primary mt-4">Join Now</Link>
        </div>
      </section>
      <footer className="text-center p-8 bg-gray-200">
        <p className="text-gray-600">&copy; 2024 Twitter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;


    // import React from 'react';
    // import { Link } from 'react-router-dom';
    // import './homePageCss.css';
    
    // function Home() {
    //   return (
    //     <div className="bg-gray-100">
    //       <header className="text-center py-16">
    //         <h1 className="text-5xl font-bold text-gray-800">TWitTeR!</h1>
    //         <p className="text-gray-600">Connect with friends and family, share your moments, and join the conversation.</p>
    //       </header>
    //       <section className="text-center py-16 pb-[200px] bg-gray-200">
    //         <h2 className="text-4xl font-bold text-gray-800">Join the community today!</h2>
    //         <p className="text-gray-600">Sign up now to start connecting with people from all over the world.</p>
    //         <Link to="/register"><button className="btn btn-primary mt-4">Sign Up</button></Link>
    //       </section>
          
    //       <footer className="text-center py-8 bg-gray-300">
    //         <p className="text-gray-600">&copy; 2024 . All rights reserved.</p>
    //       </footer>
    //     </div>
    //   );
    // }
    
    // export default Home;