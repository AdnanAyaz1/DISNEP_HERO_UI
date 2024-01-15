import { useEffect, useRef, useState } from "react";
import { getMoviesData } from "../Services/GlobalApi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
export const Image_Base_Url = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movies, setMovies] = useState("");


  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await getMoviesData();
    setMovies(data);
    console.log(data);
  };

  const ref = useRef();


  const sliderRight = (element) => {
   
    element.scrollLeft += element.clientWidth-10;
  };

  const sliderLeft = (element) => {
    
    element.scrollLeft -=  element.clientWidth-10;
  };

  return (
    <div className="relative  lg:px-20 px-2 ">
      <div
        className="flex overflow-x-auto p-4 scrollbar-hide scroll-smooth  rounded-md"
        ref={ref}
      >
        {movies &&
          movies?.results.map((movie) => {
            return (
              <div
                className="min-w-[100%] mr-5  mx-auto  hover:border-4 border-gray-300 transition-all ease-in-out duration-100"
                key={movie.id}
              >
                <img
                  src={Image_Base_Url + movie.backdrop_path}
                  alt=""
                  className=" lg:h-[600px] h-[400px] w-full rounded-md"
                />
              </div>
            );
          })}
      </div>
      <div
        className=" hidden md:block absolute left-2 top-[50%] hover:cursor-pointer "
        onClick={() => sliderLeft(ref.current)}
      >
        <HiOutlineChevronLeft className="text-white h-[60px] w-[60px]" />
      </div>
      <div
        className=" hidden md:block absolute right-2 top-[50%] hover:cursor-pointer"
        onClick={() => sliderRight(ref.current)}
      >
        <HiOutlineChevronRight className="text-white h-[60px] w-[60px]" />
      </div>
    </div>
  );
};

export default Slider;
