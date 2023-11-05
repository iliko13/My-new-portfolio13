type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className={
        "buttonFont text-bold relative w-full rounded-full bg-black px-8 py-2.5 text-white transition-all duration-300 ease-linear hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-black sm:w-fit sm:text-lg"
      }
    >
      <div className="flex items-center justify-center gap-2.5">
        <div className="flex items-center justify-center space-x-2 [text-shadow:_0_4px_4px_rgb(0_0_0/_50%)]">
          {children}
        </div>
      </div>
    </button>
  );
};

export default Button;
