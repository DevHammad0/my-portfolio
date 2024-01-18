import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-black border-b-2 text-center ">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <span className=" ml-3 text-lg font-bold text-teal-600 hover:text-teal-700">Muhammad Hammad</span>
      </div>
      <div className="flex items-center min-w-72 cursor-pointer ">
        <Link href="/" className="text-white hover:text-gray-300 flex-grow hover:flex-grow-[3] transition-all duration-200 hover:border-b-2 hover:border-b-teal-600">
          Home
        </Link>
        <Link href="#about-section" className="text-white hover:text-gray-300 flex-grow hover:flex-grow-[3] transition-all duration-200 hover:border-b-2 hover:border-b-teal-600">
          About
        </Link>
        <Link href="#project-section" className="text-white hover:text-gray-300 flex-grow hover:flex-grow-[3] transition-all duration-200 hover:border-b-2 hover:border-b-teal-600">
          Projects
        </Link>
        <span className="flex-grow">
          <ModeToggle/>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
