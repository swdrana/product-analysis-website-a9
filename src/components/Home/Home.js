import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Reviews from "../Reviews/Reviews";
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* Feature section  */}
      <div className="feature d-flex mx-5 mt-5">
        <div className="info col-md-w-50">
          <h2 className="text-start">হাবলুদের জন্য প্রোগ্রামিং</h2>
          <h6 className="mb-4 mt-4 text-start">
            বেস্ট সেলার প্রোগ্রামিং বই!!!
          </h6>
          <hr />
          <p className="text-start mt-4">
            'হাবলুদের জন্য প্রোগ্রামিং' বইটি কাদের জন্য যারা ভয়ের কারণে
            প্রোগ্রামিং শিখা শুরু করতেই পারে না। প্রোগ্রামিং কঠিন; সায়ন্সের
            স্টুডেন্ট বা ম্যাথে ভালো না হলে প্রোগ্রামিং শিখতে পারবে না মনে করে
            মুখ লুকিয়ে রাখে। তাদের জন্য গল্প আর মজার ছলে, চায়ের আড্ডার মাধ্যমে
            প্রোগ্রামিংয়ের বেসিক কনসেপ্টগুলো উপস্থাপন করা হয়েছে। তাছাড়া
            স্মার্টফোনে কোনকিছু ইনস্টল না করেই প্রোগ্রামিং প্রাকটিস করতে পারবে।
            আর যারা প্রোগ্রামিং শিখে কিছুটা এগিয়ে আছে, তারাও বইটি পড়ে
            প্রোগ্রামিংয়ের বেসিক কনসেপ্টগুলো ফকফকা করে নিতে পারবে।
          </p>
          <p className="text-start">
            হাবলুরা পড়ালেখায় হাবলু হলেও, দুনিয়ার সবকিছুতে হাবলু না। ক্লাস ফাঁকি
            দেয়ার ফন্দি, শর্টকাটে পাশ করার পদ্ধতি, ফ্রেন্ডের পকেট থেকে টাকা
            খসানোর সিস্টেম, হাবলুদের চাইতে ভালো কেউ জানে না। তাদের পড়ালেখা মনে
            না থাকলেও, টিভি সিরিয়ালের কাহিনী, সিনেমার ডায়ালগ, ইন্টারনেটের
            চিপা-চাপার খবর ঠিকই মনে থাকে। এমনকি এসব জিনিসে চাল্লুদেরকেও পিছনে
            ফেলে দেয় তারা। সেজন্যই হাবলুদের মতো করে, চায়ের দোকানের আড্ডার ভাষা
            দিয়ে, প্রোগ্রামিংকে উপস্থাপন করা হয়েছে। যাতে হাবলুরা হাবলু স্টাইলে
            প্রোগ্রামিং-এর মজা পেয়ে এগিয়ে যেতে পারে।
          </p>
        </div>
        <div className="img">
          <img
            src="https://static-01.daraz.com.bd/p/mdc/95dac66cff6c0bab100e982c73511406.jpg"
            alt="feature-img"
            height="400px"
            width="400px"
          />
        </div>
      </div>
      
      {/* Review Section  */}
      <div className="review-section">
        <Reviews></Reviews>
        <Link to='/reviews'>See All</Link>
      </div>
    </div>
  );
};

export default Home;
