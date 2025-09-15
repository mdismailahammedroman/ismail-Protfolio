import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const SocialLinks = () => {
  return (
    <div className="mt-20 flex space-x-4 text-gray-500 items-center justify-center">
      <Link
        to="https://www.facebook.com/mdismailahammedroman/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center  hover:text-yellow-500 rounded"
      >
        <FaFacebookSquare className="text-2xl" />
      </Link>
      <Link
        to="https://x.com/ismailahammedr3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaTwitterSquare className="text-2xl" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/mdismailahammedroman/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link
        to="https://github.com/mdismailahammedroman"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaGithub className="text-2xl" />
      </Link>
    </div>
  );
};

export default SocialLinks;
