import { AiFillGithub } from "react-icons/ai";

type Props = {
  img: string;
  title: string;
  linkLive: string;
  linkGit: string;
};

const openInNewTab = (url: any) => {
  window.open(url, "_blank", "noreferrer");
};

const Card = ({ img, title, linkLive, linkGit }: Props) => {
  return (
    <div
      className="xs:h-[290px] group relative flex h-[210px] min-w-fit max-w-[448px] flex-1 cursor-pointer 
    items-center justify-center overflow-hidden rounded-2xl bg-stone-300 px-8 py-12 transition-all duration-700
     ease-in-out hover:bg-stone-600 sm:min-w-[330px]"
    >
      <img
        src={img}
        alt={title}
        className="max-h-[220px] backdrop-blur-0 transition-all duration-700 ease-in-out group-hover:scale-105"
      />

      <div className="paragraphFont absolute -top-12 left-1/2 z-10 w-full -translate-x-1/2 px-8 text-center text-base text-stone-100 opacity-0 transition-all duration-700 ease-in-out [text-shadow:_0_4px_4px_rgb(0_0_0/_50%)] group-hover:top-0.5 group-hover:opacity-100 sm:text-lg">
        {title}
      </div>
      <div className="test-stone-100 absolute -bottom-12 left-1/2 z-10 w-full -translate-x-1/2 text-center text-base opacity-0 transition-all duration-700 ease-in-out group-hover:bottom-0.5 group-hover:opacity-100 sm:text-lg">
        <div className="flex items-center justify-between">
          <button
            role="link"
            onClick={() => openInNewTab(linkGit)}
            className="mb-2 ml-2 rounded-xl bg-red-500 px-6 py-1 text-4xl text-stone-900 transition-all duration-700 ease-in-out
     hover:bg-stone-100"
          >
            <AiFillGithub />
          </button>
          <button
            role="link"
            onClick={() => openInNewTab(linkLive)}
            className="mb-2 mr-2
     rounded-xl bg-red-600 px-6 py-2 font-semibold text-stone-100 transition-all duration-700 ease-in-out hover:bg-stone-100 hover:text-black"
          >
            L I V E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
