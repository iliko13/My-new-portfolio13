import Card from "../components/Card";
import { projects } from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="project" className="relative min-h-screen">
      <div className="mx-auto w-full max-w-screen-2xl px-12 py-16">
        <div className="flex flex-1 flex-col gap-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" titleFont select-none text-center text-4xl font-bold text-stone-800 sm:text-5xl lg:text-[64px] xl:text-start"
          >
            My recent <span className="text-red-500">projects</span>
          </motion.h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row xl:justify-start"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 90 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-12 flex flex-wrap justify-center gap-12"
          >
            {projects.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                linkLive={item.linkLive}
                linkGit={item.linkGit}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
