import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="mt-20 flex space-x-4 text-gray-500 items-center justify-center">
      <a
        href="https://www.facebook.com/ismailahmmedroman1/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaFacebookSquare className="text-2xl" />
      </a>
      <a
        href="https://x.com/ismailahammedr3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaTwitterSquare className="text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/md-ismail-ahammed-roman-773082127/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a
        href="https://github.com/ismailahammed1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 h-12 w-12 items-center flex justify-center hover:text-yellow-500 rounded"
      >
        <FaGithub className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
