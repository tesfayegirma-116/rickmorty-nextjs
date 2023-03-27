import Image from "next/image";
import RickImage from "../assets/images/rick.png";
import { FaGithubAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-gray-100 p-4 shadow-lg">
      <div className="flex space-x-4">
        <div className="flex items-center">
          <Image
            src={RickImage}
            alt="rick and morty logo"
            className="h-24 w-24 rounded-full object-cover animate-pulse"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-bold text-xl">Rick and Morty</span>
          <span className="text-sm text-gray-500">I'm Pickle Rick!</span>
        </div>
      </div>
      <div className="flex items-center space-x-9">
        <div className="flex flex-col">
          <span className="font-bold text-xl text-orange-400">Docs</span>
        </div>
        <div className="flex items-center space-x-1 animate-pulse">
          <FaGithubAlt className="text-3xl" />
        </div>
        <div className="border-2 border-gray-300 rounded-full p-2">
          <div className="flex items-center space-x-1">
            <span className="text-lg">ተስፋ</span>
            <img
              src="https://i.pravatar.cc/300"
              alt="rick and morty logo"
              className="h-6 w-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
