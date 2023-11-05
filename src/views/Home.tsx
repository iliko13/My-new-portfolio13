//assets
import profileImg from "../assets/profile-img.png";
//components
import Button from "../components/Button";

//react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

//framer-motion
import { motion } from "framer-motion";

//icon
import { AiOutlineDownload } from "react-icons/ai";

//cv
import cv from "../assets/CV.pdf";

const Home = () => {
  return (
    <div
      id="home"
      className=" relative flex min-h-screen items-center justify-center"
    >
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-12 px-12 py-16 xl:flex-row xl:items-start xl:justify-between">
        <div className="w-full xl:w-fit">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
            className="titleFont w-full select-none text-center text-4xl sm:text-6xl lg:text-8xl xl:w-fit xl:text-start"
          >
            Junior
            <br />
            <span className="text-red-500">
              <Typewriter
                words={["Front-End", "Developer"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                delaySpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 90 },
              visible: { opacity: 1, y: 0 },
            }}
            className="my-12 flex flex-col items-center justify-center gap-6 sm:flex-row xl:justify-start"
          >
            <a href={cv} download="CV">
              <Button>
                <AiOutlineDownload />
                <p className="select-none">Download CV</p>
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 90 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={profileImg}
            alt="profile"
            className="max-w-full sm:max-w-[301px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
