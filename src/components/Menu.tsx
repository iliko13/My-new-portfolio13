import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

const Menu = () => {
  return (
    <div
      className="fixed  bottom-0 left-1/2 z-30 flex w-full -translate-x-1/2 items-center justify-around gap-12 rounded-t-xl
     bg-stone-200 px-6 py-3 sm:bottom-12 sm:w-fit sm:justify-center sm:rounded-full"
    >
      <Link to="home" smooth>
        <button className="text-xl">
          <AiFillHome />
        </button>
      </Link>
      <Link to="about" smooth>
        <button className="text-xl">
          <BsFillPersonFill />
        </button>
      </Link>
      <Link to="project" smooth>
        <button className="text-xl">
          <GrProjects />
        </button>
      </Link>
      <Link to="contact" smooth>
        <button className="text-xl">
          <IoMdMail />
        </button>
      </Link>
    </div>
  );
};

export default Menu;
