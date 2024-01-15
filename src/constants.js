import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

import disney from "./assets/Images/disney.png";
import marvel from "./assets/Images/marvel.png";
import nationalG from "./assets/Images/nationalG.png";
import pixar from "./assets/Images/pixar.png";
import starwar from "./assets/Images/starwar.png";

import disneyv from "./assets/Videos/disney.mp4";
import marvelv from "./assets/Videos/marvel.mp4";
import nationalGv from "./assets/Videos/national-geographic.mp4";
import pixarv from "./assets/Videos/pixar.mp4";
import starwarv from "./assets/Videos/star-wars.mp4";

export const productionHouse = [
  {
    img: disney,
    video: disneyv,
  },
  {
    img: marvel,
    video: marvelv,
  },
  {
    img: nationalG,
    video: nationalGv,
  },
  {
    img: pixar,
    video: pixarv,
  },
  {
    img: starwar,
    video: starwarv,
  },
];

export const navLinks = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

export const Genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },

  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },

  {
    id: 10752,
    name: "War",
  },
];
