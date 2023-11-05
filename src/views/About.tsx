import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const fbLink = "https://www.facebook.com/ilia.kukava.7";
const lnLink = "https://www.linkedin.com/feed/";
const ghLink = "https://github.com/iliko13";
const gmLink =
  "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGkSwKMvZCtHspWwFSqGSvPnNKPLrTvkFBnzWHWMktMbWKNLChTVRhGLjFGQnjLQXxQV";

const openInNewTab = (url: any) => {
  window.open(url, "_blank", "noreferrer");
};

const About = () => {
  const paragraphStyle = `paragraphFont m-1 rounded-2xl border border-black px-2 py-1 hover:bg-stone-800 hover:text-stone-100`;

  return (
    <div
      id="about"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="item flex w-full max-w-screen-2xl flex-col gap-12  px-12 py-16 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex flex-1 flex-col gap-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="titleFont select-none text-center text-4xl font-bold text-stone-800 sm:text-5xl lg:text-[64px] xl:text-start"
          >
            About <span className="text-red-500">me</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            className="paragraphFont select-none"
          >
            Over the year I've embarked on an adventure, in front end
            development. I've delved into technologies such as React, TypeScript
            and JavaScript while actively working on projects to improve my
            skills. My love, for web development pushes me to learn and design
            captivating user experiences.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center gap-6  text-4xl xl:justify-start"
          >
            <button
              onClick={() => openInNewTab(lnLink)}
              className="  transition-all duration-300 ease-linear hover:text-blue-600"
            >
              <AiFillLinkedin />
            </button>
            <button
              onClick={() => openInNewTab(fbLink)}
              className="transition-all duration-300 ease-linear hover:text-blue-600"
            >
              <AiFillFacebook />
            </button>
            <button
              onClick={() => openInNewTab(ghLink)}
              className=" hover:shadow-2xl"
            >
              <AiFillGithub />
            </button>
            <button
              onClick={() => openInNewTab(gmLink)}
              className=" transition-all duration-300 hover:text-red-700 hover:shadow-2xl"
            >
              <BiLogoGmail />
            </button>
          </motion.div>

          <div className="flex flex-1 select-none items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: -90 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="titleFont text-lg"
              >
                skills
              </motion.h1>
              <p className="mt-5 grid cursor-pointer  grid-rows-6 md:flex">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, x: -190 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={paragraphStyle}
                >
                  React.js
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: -190 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Typescript
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: -120 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Redux
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: -90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Tailwind
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: -120 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Framer-motion
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, x: 190 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Fetch data from API
                </motion.span>
              </p>
              <p className="grid cursor-pointer  grid-rows-4 md:flex lg:mt-1 ">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, x: -220 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={paragraphStyle}
                >
                  React-scroll
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: -190 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Bootstrap
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 2, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: 220 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Javascript
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, x: 220 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={paragraphStyle}
                >
                  React-hook
                </motion.span>
              </p>
              <p className="grid cursor-pointer grid-rows-2 sm:grid-cols-2 md:flex lg:mt-1">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: 120 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Git
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1, duration: 3 }}
                  variants={{
                    hidden: { opacity: 0, y: 140 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={paragraphStyle}
                >
                  Github
                </motion.span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
