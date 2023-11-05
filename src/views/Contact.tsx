import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const inputStyle = `mt-5 w-full rounded-lg bg-stone-800 px-5 py-3 placeholder-white text-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div
      id="contact"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="flex w-full max-w-screen-2xl flex-col items-center gap-12 px-12 pb-20 pt-20 sm:pb-16 xl:flex-row xl:items-start xl:justify-between">
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
            className="titleFont select-none text-center text-4xl font-bold text-stone-800 sm:text-5xl lg:text-[64px] xl:text-start"
          >
            Ready to Start a Project?{" "}
            <span className="text-red-500">
              <Typewriter
                words={["Contact Us"]}
                cursor
                cursorStyle="|"
                typeSpeed={250}
                delaySpeed={150}
                loop
              />
            </span>
          </motion.h2>

          <div className="flex w-full max-w-[696px] flex-1 flex-col gap-6">
            <div className="mt-10 md:mt-0">
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="Post"
                action="https://formsubmit.co/70086aaaa0af3abaa037776c910d6b42"
              >
                <motion.input
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`${inputStyle} paragraphFont focus:outline-none`}
                  type="text"
                  placeholder="NAME"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && (
                  <p className="paragraphFont mt-1 select-none text-red-400">
                    {errors.name.type === "required" &&
                      "This filed is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 20 character."}
                  </p>
                )}

                <motion.input
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`${inputStyle} paragraphFont focus:outline-none`}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="paragraphFont mt-1 select-none text-red-400">
                    {errors.email.type === "required" &&
                      "This filed is required."}
                    {errors.email.type === "pattern" && "Invalid email address"}
                  </p>
                )}

                <motion.textarea
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`${inputStyle} paragraphFont focus:outline-none`}
                  rows={4}
                  cols={50}
                  placeholder="MESSAGE"
                  {...register("message", { required: true, maxLength: 2000 })}
                />
                {errors.message && (
                  <p className="paragraphFont mt-1 select-none text-red-400">
                    {errors.message.type === "required" &&
                      "This filed is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 character."}
                  </p>
                )}

                <motion.button
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 110 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  type="submit"
                  className="paragraphFont mt-5 select-none rounded-lg bg-stone-800 px-20 py-3 text-white transition duration-500 hover:bg-red-500"
                >
                  SUBMIT
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
