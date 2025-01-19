import { FaPenNib, FaBookOpen, FaClipboard, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = () => {
  return (
    <div>
      <div className="bg-hoverBtn p-6 rounded-lg flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="text-white mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-1xl sm:text-2xl font-bold mb-2">Write a Review</h1>
          <p className="text-sm mb-4">
            Share your thoughts and experiences to help others choose the best college.
          </p>
          <Link to='/review1'>
           <button className="bg-white text-hoverBtn px-4 py-2 rounded shadow hover:bg-primaryBtn hover:text-white">
             Start Writing
           </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 relative">
        <div className="flex justify-center items-center animate-pulse">
            <FaBookOpen className="text-white text-4xl md:text-5xl" />
          </div>
          <div className="flex justify-center items-center animate-bounce">
            <FaPenNib className="text-white text-4xl md:text-6xl" />
          </div>
          
          
          <div className="flex justify-center items-center animate-bounce">
            <FaFileAlt className="text-white text-4xl md:text-6xl" />
          </div>
          <div className="flex justify-center items-center animate-pulse">
            <FaClipboard className="text-white text-4xl md:text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
