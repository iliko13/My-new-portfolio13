import orkolImg from "./assets/orkol-img.png";
import movieImg from "./assets/movie-img.png";
import citadelImg from "./assets/citadel-img.png";

type Props = {
  id: number;
  img: string;
  title: string;
  linkLive: string;
  linkGit: string;
};

export const projects: Props[] = [
  {
    id: 0,
    img: orkolImg,
    title: "Orkol-Studio",
    linkLive: "https://orkol-studio.netlify.app",
    linkGit: "https://github.com/iliko13/orkole-studio",
  },
  {
    id: 1,
    img: movieImg,
    title: "Movie",
    linkLive: "https://movie-x-app.netlify.app",
    linkGit: "https://github.com/iliko13/Movie_website",
  },
  {
    id: 2,
    img: citadelImg,
    title: "Citadel",
    linkLive: "https://citadel-security.netlify.app",
    linkGit: "https://github.com/iliko13/citadel-security-website",
  },
];
